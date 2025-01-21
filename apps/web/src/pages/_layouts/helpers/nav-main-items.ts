import HomeLineIcon from "../../../assets/home-line.svg"
import UsersIcon from "../../../assets/users-01.svg"
import HomeIcon from "../../../assets/home-03.svg"
import InboxIcon from "../../../assets/inbox-02.svg"

interface NavMain {
  id: string
  title: string
  icon: any
  url: string
}

export const navMainItems: NavMain[]  = [
  {
    id: "home",
    title: "Início",
    icon: HomeLineIcon,
    url: "/",
  },
  {
    id: "clientes",
    title: "Clientes",
    url: "/clientes",
    icon: UsersIcon,
  },
  {
    id: "imoveis",
    title: "Imóveis",
    url: "/imoveis",
    icon: HomeIcon,
  },
  {
    id: "locacoes",
    title: "Locações",
    url: "/locacoes",
    icon: InboxIcon,
  }
]