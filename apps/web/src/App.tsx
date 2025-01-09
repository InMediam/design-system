import { Helmet, HelmetProvider } from "react-helmet-async"
import { ThemeProvider } from "./components/theme/theme-provider"
import { router } from "./routes"
import { RouterProvider } from "react-router-dom"

export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider storageKey="inmediam-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | InMediam" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

