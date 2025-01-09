import {
  ChevronRight,
} from "lucide-react"
import { NavLink, useMatches } from "react-router-dom"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "ui"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "ui"
import { navMainItems } from "../helper/nav-main-items"

export function NavMain() {
  const matches = useMatches()

  return (
    <SidebarGroup>
      <SidebarMenu>
        {navMainItems.map((main) => (
          <Collapsible
            asChild
            className="group/collapsible"
            key={main.id}
            defaultOpen={
              main.items.some((subItem) => matches.find(match => match.id === subItem.id))
            }
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={main.title}>
                  {main.icon && <main.icon />}
                  <span>{main.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {main.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.id}>
                      <SidebarMenuSubButton asChild isActive={!!matches.find(match => match.id === subItem.id)}>
                        <NavLink to={subItem.url}>
                          <span>{subItem.title}</span>
                        </NavLink>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
