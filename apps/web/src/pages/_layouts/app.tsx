import { Outlet } from "react-router-dom"
import { AppSidebar } from "./components/app-sidebar"
import { Separator } from "ui"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "ui"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { MenuUser } from "./components/menu-user"

export function AppLayout() {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-screen w-full">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-muted">
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <MenuUser />
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}