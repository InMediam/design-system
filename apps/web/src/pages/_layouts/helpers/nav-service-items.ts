import ShieldTickIcon from "../../../assets/shield-tick.svg"
import FileSearchIcon from "../../../assets/file-search-03.svg"
import WalletIcon from "../../../assets/wallet-02.svg"
import FlameIcon from "../../../assets/flame-01.svg"

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
    icon: ShieldTickIcon,
    items: [
      {
        id: "garantia-locaticia-visao-geral",
        title: "Visão geral",
        url: "/garantia-locaticia/visao-geral"
      },
    ]
  },
  {
    id: "vistoria-digital-service",
    title: "Vistoria digital",
    icon: FileSearchIcon,
    items: []
  },
  {
    id: "gestao-de-cobranca-service",
    title: "Gestão de cobrança",
    icon: WalletIcon,
    items: []
  },
  {
    id: "seguro-incendio-service",
    title: "Seguro incêndio",
    icon: FlameIcon,
    items: []
  }
]