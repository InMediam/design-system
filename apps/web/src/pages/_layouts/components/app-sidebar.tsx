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
      </SidebarContent>
      <SidebarFooter className="px-0 pt-0 pb-4 flex justify-center items-center">
        <NavFooter
          data-open={open}
          data-show-notification={true}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
