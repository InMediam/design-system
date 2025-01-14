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
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavService />
        <SidebarFooter className="px-0 pt-0 pb-4">
          <div className="data-[open=false]:h-[18.5rem] data-[open=true]:hidden" data-open={open} />
          <NavFooter />
          <div className="flex justify-center">
            <NotificationCard
              title="Novidades disponíveis"
              description="Confira as novas páginas no painel administrativo"
              image={BuilderImage}
              redirectPath="/"
            />
          </div>
        </SidebarFooter>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
