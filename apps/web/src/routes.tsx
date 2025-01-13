import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './pages/_layouts/app'
import { Error } from './pages/error'
import { Home } from './pages/app/home'
import { NotFound } from './pages/404'
import { Clientes } from './pages/app/clientes'
import { Imoveis } from './pages/app/imoveis'
import { Locacoes } from './pages/app/locacoes'


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
        id: 'clientes',
        path: '/clientes',
        element: <Clientes />
      },
      {
        id: 'imoveis',
        path: '/imoveis',
        element: <Imoveis />
      },
      {
        id: 'locacoes',
        path: '/locacoes',
        element: <Locacoes />
      },
      {
        id: "garantia-locaticia-visao-geral",
        path: "/garantia-locaticia/visao-geral",
        element: <Home />
      }

    ]
  },
  {
    path: '*',
    element: <NotFound />,
  },
])