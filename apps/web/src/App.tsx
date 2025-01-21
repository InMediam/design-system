import { Helmet, HelmetProvider } from "react-helmet-async"
import { ThemeProvider } from "./components/theme/theme-provider"
import { router } from "./routes"
import { RouterProvider } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/react-query"
import { AuthProvider } from "./contexts/auth-context"

export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider storageKey="inmediam-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | InMediam" />
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

