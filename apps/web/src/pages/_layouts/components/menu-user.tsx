import {
  ChevronsUpDown,
  LogOut,
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

export function MenuUser() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="p-2 w-fit">
        <Button className="gap-3 bg-brand-25 hover:bg-brand-25/75 dark:bg-sidebar h-14 border border-gray-200 dark:border-gray-700 rounded-xl" variant="outline">
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
        <DropdownMenuGroup className="flex flex-col justify-center items-center py-6 px-4 bg-gradient-to-b from-brand-25 from-0% to-white to-100%">
          <Avatar className="h-10 w-10 rounded-full mb-4">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="rounded-lg">DD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center leading-tight gap-[0.25rem] pb-2">
            <span className="truncate text-sm font-semibold text-gray-950 dark:text-gray-400">Douglas Duarte</span>
            <span className="truncate text-xs font-normal text-gray-700">douglasduarte.eng@gmail.com</span>
          </div>
          <Badge variant="outline">
            Corretor(a)
          </Badge>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-1">
          <LogOut className="w-4 h-4" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
