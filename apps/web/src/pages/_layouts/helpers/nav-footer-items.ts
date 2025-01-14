import UsersIcon from "../../../assets/users-03.svg"
import FlagIcon from "../../../assets/flag-06.svg"
import MessageChatIcon from "../../../assets/message-chat-square.svg"

interface NavFooter {
  id: string
  title: string
  icon: any
  url: string
}

export const navFooterItems: NavFooter[]  = [
  {
    id: "gerenciar-equipe",
    title: "Gerenciar equipe",
    icon: UsersIcon,
    url: "/",
  },
  {
    id: "central-usuario",
    title: "Central do usuário",
    url: "/clientes",
    icon: FlagIcon,
  },
  {
    id: "suporte",
    title: "Suporte",
    url: "/imoveis",
    icon: MessageChatIcon,
  },
]