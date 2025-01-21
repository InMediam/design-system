import { Outlet } from "react-router-dom"
import { AppSidebar } from "./components/app-sidebar"
import { Button, Separator, useIsMobile } from "ui"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  Dot
} from "ui"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { MenuUser } from "./components/menu-user"
import { Bell, Search } from "lucide-react"
import { StrictMode, useEffect, useMemo } from "react"
import { useAuth } from "@/hooks/use-auth"
import { useKeycloak } from "@/hooks/use-keycloak"
import { useCookies } from "@/hooks/use-cookies"
import { AuthUser } from "@/contexts/auth-context"
import { apiPrivate } from "@/lib/axios"
import { keycloak } from "@/lib/keycloak"
import { queryClient } from "@/lib/react-query"

export function AppLayout() {
  const { signOut, setAuth, auth } = useAuth()
  const { verifyTokenExpired, getNewAccessTokenFromRefreshToken } = useKeycloak()
  const { setCookies, getCookies } = useCookies()

  const isMobile = useIsMobile()

  const authTokens: AuthUser = useMemo(() => {
    return {
      accessToken: auth.accessToken ?? getCookies('@inmediam-token'),
      refreshToken: auth.refreshToken ?? getCookies('@inmediam-refreshToken'),
      sub: auth.sub ?? getCookies('@inmediam-sub'),
    }
  }, [auth, getCookies])

  const { accessToken, refreshToken, sub } = authTokens

  apiPrivate.interceptors.request.use(
    async (config) => {

      if (config.headers.Authorization) return config

      if (accessToken && refreshToken) {

        const isTokenExpired = verifyTokenExpired(accessToken)

        if (!isTokenExpired) {
          config.headers.Authorization = `Bearer ${accessToken}`
          return config;
        }

        const isRefreshTokenExpired = verifyTokenExpired(refreshToken)

        if (isTokenExpired && !isRefreshTokenExpired) {
          await getNewAccessTokenFromRefreshToken({
            refreshToken,
          })
            .then(async (response) => {
              if (response) {
                const {
                  refresh_token: newRefreshToken,
                  access_token: newAccessToken,
                } = response

                setCookies('@inmediam-token', newAccessToken)
                setCookies('@inmediam-refreshToken', newRefreshToken)
                setAuth({
                  accessToken: newAccessToken,
                  refreshToken: newRefreshToken,
                  sub,
                })

                config.headers.Authorization = `Bearer ${newAccessToken}`
              } else {
                await signOut()
              }
            }).catch(async () => {
              await signOut()
            })
        }

        if (isTokenExpired && isRefreshTokenExpired) {
          await signOut()
        }
      }
      return config
    },
    (error) => Promise.reject(error),
  )

  useEffect(() => {
    !keycloak.authenticated &&
      keycloak
        .init({
          checkLoginIframe: false,
          scope: 'openid profile offline_access email',
          onLoad: 'login-required',
        })
        .then(async (authenticated) => {
          if (authenticated && keycloak.authenticated) {
            const session = {
              accessToken: keycloak.token,
              refreshToken: keycloak.refreshToken,
              sub: keycloak.tokenParsed?.sub,
            }

            const hasUserImobiliariaRole = keycloak.hasRealmRole('imobiliaria')

            if (!hasUserImobiliariaRole) {
              await signOut()
              return
            }

            const { accessToken, refreshToken, sub } = session

            if (accessToken && refreshToken) {
              setCookies('@inmediam-token', accessToken)
              setCookies('@inmediam-refreshToken', refreshToken)
              sub && setCookies('@inmediam-sub', sub)
              setAuth({ accessToken, refreshToken, sub })
              queryClient.getQueryCache().clear()
            }
          }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StrictMode>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="h-screen w-full pr-8">
          <header className="flex h-[4.5rem] shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-muted">
            <div className="flex items-center gap-2 pl-2 data-[is-mobile=false]:hidden" data-is-mobile={isMobile}>
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="h-4" />
            </div>
            <div className="ml-auto flex items-center gap-4">
              <ThemeToggle />
              <div className="flex gap-1">
                <Button className="hover:bg-transparent px-3" variant="ghost">
                  <Search className="w-5 h-5 text-gray-500" />
                </Button>
                <Button className="hover:bg-transparent px-1" variant="ghost">
                  <Bell className="w-5 h-5 text-gray-500" />
                  <Dot className="-ml-3 -mt-2 w-2 h-2 bg-brand-600" variant="warning" />
                </Button>
              </div>
              <Separator orientation="vertical" className="h-14 bg-gray-200 dark:bg-muted" />
              <MenuUser />
            </div>
          </header>
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </StrictMode>
  )
}