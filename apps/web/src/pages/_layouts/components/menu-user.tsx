import {
  ChevronsUpDown,
  LogOut,
  Settings,
  User,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
} from "ui"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "ui"
import { UsersIconComponent } from "../icons/users-icon-component"
import { FlagIconComponent } from "../icons/flag-icon-component"
import { MessageChatIconComponent } from "../icons/message-chat-icon-component"
import { FileIconComponent } from "../icons/file-icon-component"
import { useAuth } from "@/hooks/use-auth"

export function MenuUser() {
  const { signOut } = useAuth()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="p-2 w-fit">
        <Button className="gap-3 hover:bg-brand-25 data-[state=open]:bg-brand-25 dark:bg-sidebar h-14 border border-gray-200 dark:border-gray-700 rounded-xl" variant="outline">
          <Avatar className="h-10 w-10 rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="rounded-lg">DD</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold text-gray-700 dark:text-gray-400">Douglas Duarte</span>
            <span className="truncate text-sm font-normal text-gray-600">Corretor(a)</span>
          </div>
          <ChevronsUpDown className="ml-auto w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[20rem] h-[31.125rem] min-w-56 rounded-lg"
        side="bottom"
        align="end"
        sideOffset={20}
      >
        <DropdownMenuGroup className="flex flex-col justify-center items-center py-6 px-4 dark:bg-none bg-gradient-to-b from-brand-25 from-0% to-white to-100%">
          <Avatar className="h-14 w-14 rounded-full mb-4">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="rounded-lg">DD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center leading-tight gap-[0.25rem] pb-2">
            <span className="truncate text-sm font-semibold text-gray-950 dark:text-gray-400">Douglas Duarte</span>
            <span className="truncate text-xs font-normal text-gray-700 dark:text-gray-500">douglasduarte.eng@gmail.com</span>
          </div>
          <Badge variant="outline">
            Corretor(a)
          </Badge>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <div className="flex flex-col">
          <DropdownMenuItem className="flex gap-2 px-4 h-[2.44rem]">
            <User className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700 dark:text-gray-500 text-sm">
              Meu perfil
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 px-4 h-[2.44rem]">
            <UsersIconComponent className="w-5 h-5" />
            <span className="text-gray-700 dark:text-gray-500  text-sm">
              Gerenciar equipe
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 px-4 h-[2.44rem]">
            <Settings className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700 dark:text-gray-500 text-sm">
              Configurações
            </span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex gap-2 px-4 h-[2.44rem]">
            <FileIconComponent className="w-5 h-5" />
            <span className="text-gray-700 dark:text-gray-500 text-sm">
              Termos e contratos
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 px-4 h-[2.44rem]">
            <FlagIconComponent className="w-5 h-5" />
            <span className="text-gray-700 dark:text-gray-500 text-sm">
              Central do usuário
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 px-4 h-[2.44rem]">
            <MessageChatIconComponent className="w-5 h-5" />
            <span className="text-gray-700 dark:text-gray-500 text-sm">
              Suporte
            </span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex gap-2 px-4 h-[2.44rem]" onClick={signOut}>
            <LogOut className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700 dark:text-gray-500 text-sm">
              Sair
            </span>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
