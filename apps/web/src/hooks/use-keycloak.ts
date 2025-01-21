import axios from 'axios'

import { env } from '@/env'

type getNewAccessTokenFromRefreshToken = {
  refreshToken: string
}

type getNewAccessTokenFromRefreshTokenResponse = {
  access_token: string
  expires_in: number
  refresh_expires_in: number
  refresh_token: string
  token_type: string
  not_before_policy: number
  session_state: string
  scope: string
}

type logoutUser = {
  refreshToken: string
}

export function useKeycloak() {
  function parseJwt(token: string) {
    if (!token) {
      return
    }
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace('-', '+').replace('_', '/')
    return JSON.parse(window.atob(base64))
  }

  const verifyTokenExpired = (token: string) => {
    const decodedToken = parseJwt(token)

    if (typeof decodedToken === 'object') {
      const exp = decodedToken?.exp
      const now = Math.floor(Date.now() / 1000)

      if (exp && exp < now) {
        return true
      }
    }

    return false
  }

  async function getNewAccessTokenFromRefreshToken({
    refreshToken,
  }: getNewAccessTokenFromRefreshToken): Promise<
    getNewAccessTokenFromRefreshTokenResponse | false
  > {
    try {
      const url = `${env.VITE_KEYCLOAK_URL}/realms/${env.VITE_KEYCLOAK_REALM}/protocol/openid-connect/token`
      const clientId = env.VITE_KEYCLOAK_CLIENT_ID

      const params = new URLSearchParams()
      clientId && params.append('client_id', clientId)
      params.append('grant_type', 'refresh_token')
      params.append('refresh_token', refreshToken)

      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }

      const res = await axios.post(url, params, config)
      const data: getNewAccessTokenFromRefreshTokenResponse = res.data

      return data
    } catch (error) {
      return false
    }
  }

  async function logoutUser({ refreshToken }: logoutUser): Promise<void> {
    const path = `${env.VITE_KEYCLOAK_URL}/realms/${env.VITE_KEYCLOAK_REALM}`
    const clientId = env.VITE_KEYCLOAK_CLIENT_ID
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }

    try {
      await axios.post(
        `${path}/protocol/openid-connect/logout`,
        {
          grant_type: 'refresh_token',
          clientId,
          refreshToken,
        },
        {
          headers,
        },
      )
    } catch (error) {
      console.error(error)
    }
  }

  return {
    verifyTokenExpired,
    getNewAccessTokenFromRefreshToken,
    logoutUser,
  }
}
