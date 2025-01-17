import { Outlet } from "react-router-dom"
import { AppSidebar } from "./components/app-sidebar"
import { Separator, useIsMobile } from "ui"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "ui"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { MenuUser } from "./components/menu-user"

export function AppLayout() {
  const isMobile = useIsMobile()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-screen w-full pr-8">
        <header className="flex h-[4.5rem] shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-muted">
          <div className="flex items-center gap-2 px-4 data-[is-mobile=false]:hidden" data-is-mobile={isMobile}>
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <ThemeToggle />
            <Separator orientation="vertical" className="h-14 bg-gray-200 dark:bg-muted" />
            <MenuUser />
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}