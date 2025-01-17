import {
  Bell,
  ChevronsUpDown,
  LogOut,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
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
import {
  SidebarMenu,
  SidebarMenuItem,
} from "ui"

export function MenuUser() {

  return (
    <SidebarMenu className="w-fit">
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="p-2 w-fit">
            <Button className="gap-3 bg-brand-25 hover:bg-brand-25/75 dark:bg-sidebar h-14" variant="outline">
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
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side="bottom"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem className="flex gap-1">
                <Bell className="w-4 h-4" />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex gap-1">
              <LogOut className="w-4 h-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
