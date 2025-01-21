import {
  ChevronDown,
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

export function NavService() {
  const matches = useMatches()
  const { open, openMobile, isMobile } = useSidebar()

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-xs px-4 pb-1 duration-300 text-gray-500">SERVIÇOS</SidebarGroupLabel>
      <SidebarMenu className="data-[open=true]:pl-4 data-[open=true]:pr-4 justify-center items-center" data-open={open}>
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
                    className="data-[open=false]:flex h-10 data-[open=true]:w-[17.5rem] data-[open-mobile=true]:data-[is-mobile=true]:w-[15.5rem] px-3 group-data-[state=open]/collapsible:data-[open=true]:bg-transparent data-[open=false]:justify-center"
                    tooltip={main.title}
                    isActive={isActive}
                    data-open={open}
                    data-open-mobile={openMobile}
                    data-is-mobile={isMobile}
                  >
                    <Separator
                      className="-ml-3 data-[open=false]:-ml-8 fixed data-[active=false]:hidden w-1 h-5 rounded-xl data-[active=true]:bg-brand-500 
                      group-data-[state=open]/collapsible:data-[open=true]:hidden"
                      orientation="vertical"
                      data-open={open}
                      data-active={isActive}
                    />
                    <img
                      className="h-5 w-5 data-[icon=false]:hidden mr-1"
                      src={main.icon}
                      data-icon={!!main.icon}
                    />
                    <span
                      className="font-medium text-gray-600 data-[active=true]:dark:text-gray-400 text-base data-[open=false]:hidden data-[active=true]:group-data-[state=closed]/collapsible:font-semibold data-[active=true]:group-data-[state=closed]/collapsible:text-gray-800"
                      data-open={open}
                      data-active={isActive}
                    >
                      {main.title}
                    </span>
                    <ChevronDown
                      className="text-gray-500 ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180 data-[open=false]:hidden"
                      data-open={open}
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub className="border-none px-0 mx-0">
                    {
                      main.items.map((subItem) => {
                        const isItemActive = !!matches.find(match => match.id === subItem?.id)
                        return (
                          <SidebarMenuSubItem
                            className="h-10 data-[open=true]:w-[17.5rem] data-[open-mobile=true]:data-[is-mobile=true]:w-[15.5rem]"
                            key={subItem.id}
                            data-open={open}
                            data-open-mobile={openMobile}
                            data-is-mobile={isMobile}
                          >
                            <SidebarMenuSubButton
                              asChild
                              className="h-10"
                              isActive={isItemActive}
                            >
                              <NavLink to={subItem.url} className="pl-0">
                                <Separator
                                  className="m-0 p-0 bg-transparent w-1 h-5 rounded-xl data-[active=true]:bg-brand-500 mr-8"
                                  orientation="vertical"
                                  data-active={isItemActive}
                                />
                                <span
                                  className="font-medium text-gray-600 text-base whitespace-nowrap data-[active=true]:font-semibold data-[active=true]:text-gray-800 data-[active=true]:dark:text-gray-400"
                                  data-active={isItemActive}
                                >
                                  {subItem.title}
                                </span>
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
    </SidebarGroup>
  )
}
