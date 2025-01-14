import {
  ChevronRight,
} from "lucide-react"
import { NavLink, useMatches } from "react-router-dom"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Separator,
  SidebarGroupLabel,
  useSidebar,
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
import { navServiceItems } from "../helpers/nav-service-items"
import { CardValue } from "./card-value"

export function NavService() {
  const matches = useMatches()
  const { open } = useSidebar()

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-xs px-4 pb-1 duration-300">SERVIÇOS</SidebarGroupLabel>
      <SidebarMenu className="data-[open=true]:pl-4 data-[open=true]:pr-4" data-open={open}>
        {navServiceItems.map((main) => {
          const isActive = !!matches.find(match => match.id === main.id);
          return (
            <Collapsible
              asChild
              className="group/collapsible"
              key={main.id}
              defaultOpen={main.items.some((subItem) => matches.find(match => match.id === subItem.id))}
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    className="data-[open=false]:flex data-[open=false]:justify-center h-10"
                    tooltip={main.title}
                    isActive={isActive}
                    data-open={open}
                  >
                    <Separator
                      className="m-0 p-0 data-[active=false]:hidden w-1 h-5 rounded-xl data-[active=true]:bg-brand-500 data-[open=false]:hidden"
                      orientation="vertical"
                      data-open={open}
                      data-active={isActive}
                    />
                    <img
                      className="h-6 w-6 data-[icon=false]:hidden mr-1"
                      src={main.icon}
                      data-icon={!!main.icon}
                    />
                    <span className="font-semibold text-gray-600 text-base data-[open=false]:hidden" data-open={open}>
                      {main.title}
                    </span>
                    <ChevronRight
                      className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 data-[open=false]:hidden"
                      data-open={open}
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {
                      main.items.map((subItem) => {
                        const isItemActive = !!matches.find(match => match.id === subItem?.id)
                        return (
                          <SidebarMenuSubItem className="h-10 pl-0" key={subItem.id}>
                            <SidebarMenuSubButton
                              asChild
                              className="h-10 pl-5"
                              isActive={isItemActive}
                            >
                              <NavLink to={subItem.url} className="pl-0">
                                <Separator
                                  className="m-0 p-0 bg-transparent w-1 h-5 rounded-xl data-[active=true]:bg-brand-500"
                                  orientation="vertical"
                                  data-active={isItemActive}
                                />
                                <span className="text-gray-600 text-base whitespace-nowrap">
                                  {subItem.title}
                                </span>
                                <div className="flex justify-end w-full data-[open=false]:hidden pr-1" data-open={open}>
                                  <CardValue>
                                    10
                                  </CardValue>
                                </div>
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        )
                      })
                    }
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup >
  )
}
