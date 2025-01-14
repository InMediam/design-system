import { NavMain } from "./nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "ui"
import { NavHeader } from "./nav-header"
import { NavService } from "./nav-services"
import { NavFooter } from "./nav-footer"
import BuilderImage from "../../../assets/builder-image.png"
import { NotificationCard } from "./notification-card"

import "../styles.css"


export function AppSidebar() {
  const { open } = useSidebar()

  return (
    <Sidebar className="h-full" collapsible="icon">
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent className="h-full">
        <NavMain />
        <NavService />
        <SidebarFooter className="px-0 pt-0 pb-4">
          <div className="flex justify-center data-[open=false]:h-[18.5rem]" data-open={open}>
            <NotificationCard
              title="Novidades disponíveis"
              description="Confira as novas páginas no painel administrativo"
              image={BuilderImage}
            />
          </div>
          <NavFooter />
        </SidebarFooter>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
