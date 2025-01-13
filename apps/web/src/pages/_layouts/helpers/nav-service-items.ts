import Shield from "../../../assets/shield-tick.svg"
import FileSearch from "../../../assets/file-search-03.svg"
import Wallet from "../../../assets/wallet-02.svg"
import Flame from "../../../assets/flame-01.svg"

interface NavServiceItems {
  id: string
  title: string
  icon: any
  items: {
    id: string
    title: string
    url: string
  }[]
}

export const navServiceItems: NavServiceItems[]  = [
  {
    id: "garantia-locaticia-service",
    title: "Garantia locatícia",
    icon: Shield,
    items: [
      {
        id: "garantia-locaticia-visao-geral",
        title: "Visão geral",
        url: "/garantia-locaticia/visao-geral"
      },
      {
        id: "garantia-locaticia-notificacoes",
        title: "Notificações",
        url: "/garantia-locaticia/notificacoes"
      }
  
    ]
  },
  {
    id: "vistoria-digital-service",
    title: "Vistoria digital",
    icon: FileSearch,
    items: []
  },
  {
    id: "gestao-de-cobranca-service",
    title: "Gestão de cobrança",
    icon: Wallet,
    items: []
  },
  {
    id: "seguro-incendio-service",
    title: "Seguro incêndio",
    icon: Flame,
    items: []
  }
]