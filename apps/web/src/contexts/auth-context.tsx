import { createContext, useState } from 'react'

import { useCookies } from '@/hooks/use-cookies'
import { useKeycloak } from '@/hooks/use-keycloak'
import { keycloak } from '@/lib/keycloak'
import { queryClient } from '@/lib/react-query'

export interface AuthUser {
  accessToken: string | null
  refreshToken: string | null
  sub: string | null | undefined
}

interface AuthContextProps {
  signIn: () => void
  signOut: () => void
  setAuth: ({ accessToken, refreshToken }: AuthUser) => void
  auth: AuthUser
  isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthUser>({
    accessToken: null,
    refreshToken: null,
    sub: null,
  } as AuthUser)

  const isAuthenticated = keycloak?.authenticated !== undefined

  const clearAuthCookies = async () => {
    removeCookies('@inmediam-refreshToken')
    removeCookies('@inmediam-token')
    removeCookies('@inmediam-sub')
    setAuth({ accessToken: null, refreshToken: null, sub: null })
  }

  const { logoutUser } = useKeycloak()
  const { removeCookies } = useCookies()

  const signIn = async () => {
    await keycloak.login()
  }

  const signOut = async () => {
    logoutUser({
      refreshToken: keycloak.refreshToken ?? '',
    }).then(async () => {
      await queryClient.getQueryCache().clear()
      await clearAuthCookies()
      await keycloak.logout()
    })
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        auth,
        setAuth,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
