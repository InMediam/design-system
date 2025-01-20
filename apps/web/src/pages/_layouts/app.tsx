import { Outlet } from "react-router-dom"
import { AppSidebar } from "./components/app-sidebar"
import { Button, Separator, useIsMobile } from "ui"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  Dot
} from "ui"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { MenuUser } from "./components/menu-user"
import { Bell, Search } from "lucide-react"

export function AppLayout() {
  const isMobile = useIsMobile()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-screen w-full pr-8">
        <header className="flex h-[4.5rem] shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-muted">
          <div className="flex items-center gap-2 pl-2 data-[is-mobile=false]:hidden" data-is-mobile={isMobile}>
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4" />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <ThemeToggle />
            <div className="flex gap-1">
              <Button className="hover:bg-transparent px-3" variant="ghost">
                <Search className="w-5 h-5 text-gray-500" />
              </Button>
              <Button className="hover:bg-transparent px-1" variant="ghost">
                <Bell className="w-5 h-5 text-gray-500" />
                <Dot className="-ml-3 -mt-2 w-2 h-2 bg-brand-600" variant="warning" />
              </Button>
            </div>
            <Separator orientation="vertical" className="h-14 bg-gray-200 dark:bg-muted" />
            <MenuUser />
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}