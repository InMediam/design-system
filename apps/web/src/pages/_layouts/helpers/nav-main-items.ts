import HomeLine from "../../../assets/home-line.svg"
import UsersLine from "../../../assets/users-01.svg"
import Home from "../../../assets/home-03.svg"
import Inbox from "../../../assets/inbox-02.svg"

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
    icon: HomeLine,
    url: "/",
  },
  {
    id: "clientes",
    title: "Clientes",
    url: "/clientes",
    icon: UsersLine,
  },
  {
    id: "imoveis",
    title: "Imóveis",
    url: "/imoveis",
    icon: Home,
  },
  {
    id: "locacoes",
    title: "Locações",
    url: "/locacoes",
    icon: Inbox,
  }
]