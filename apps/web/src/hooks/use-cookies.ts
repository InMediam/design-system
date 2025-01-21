import { destroyCookie, parseCookies, setCookie } from 'nookies'

export function useCookies() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setCookies = (key: string, value: string, ctx?: any) => {
    if (getCookies(key)) {
      removeCookies(key)
    }

    setCookie(ctx, key, value, {
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
      sameSite: true,
      secure: true,
    })
  }

  const getCookies = (key: string): string => {
    return parseCookies()[key]
  }

  const removeCookies = (key: string, ctx = undefined): void => {
    destroyCookie(ctx, key)
  }

  return {
    setCookies,
    getCookies,
    removeCookies,
  }
}
