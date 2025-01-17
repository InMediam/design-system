import { NavMain } from "./nav-main"
import {
  Separator,
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
import { SidebarButtonTrigger } from "./sidebar-button-trigger"

export function AppSidebar() {
  const { open } = useSidebar()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent className="overflow-x-hidden">
        <NavMain />
        <NavService />
      </SidebarContent>
      <SidebarFooter className="px-0 pt-0 pb-4 flex justify-center items-center">
        <NavFooter
          data-open={open}
          data-show-notification={true}
        />
        <Separator
          className="w-full bg-gray-neutral-200"
          orientation="horizontal"
        />
        <SidebarButtonTrigger />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
