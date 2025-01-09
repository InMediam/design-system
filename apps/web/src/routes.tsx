import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './pages/_layouts/app'
import { Error } from './pages/error'
import { Home } from './pages/app/home'
import { NotFound } from './pages/404'
import { Settings } from './pages/app/settings'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        id: 'home',
        path: '/',
        element: <Home />
      },
      {
        id: "settings",
        path: "/settings",
        element: <Settings />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  },
])