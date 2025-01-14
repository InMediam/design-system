import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './pages/_layouts/app'
import { Error } from './pages/error'
import { Home } from './pages/app/home'
import { NotFound } from './pages/404'
import { Clientes } from './pages/app/clientes'
import { Imoveis } from './pages/app/imoveis'
import { Locacoes } from './pages/app/locacoes'
import { GerenciarEquipe } from './pages/app/gerenciar-equipe'
import { CentralUsuario } from './pages/app/central-usuario'
import { Suporte } from './pages/app/suporte'
import { VisaoGeral } from './pages/app/garantia-locaticia/visao-geral'


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
        path: "garantia-locaticia",
        children: [
          {
            id: "garantia-locaticia-visao-geral",
            path: "visao-geral",
            element: <VisaoGeral />
          }
        ]
      },

      {
        path: "vistoria-digital",
        children: []
      },

      {
        path: "gestao-de-cobranca",
        children: []
      },

      {
        path: "seguro-incendio",
        children: []
      },

      {
        id: "gerenciar-equipe",
        path: "/gerenciar-equipe",
        element: <GerenciarEquipe />
      },

      {
        id: "central-usuario",
        path: "/central-usuario",
        element: <CentralUsuario />
      },

      {
        id: "suporte",
        path: "/suporte",
        element: <Suporte />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  },
])