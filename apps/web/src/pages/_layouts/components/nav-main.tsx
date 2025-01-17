import { useMatches } from "react-router-dom"

import {
  Separator,
  useSidebar,
} from "ui"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "ui"
import { navMainItems } from "../helpers/nav-main-items"
import { useNavigateRoutes } from "@/hooks/useNavigateRoutes"

export function NavMain() {
  const matches = useMatches()
  const { open } = useSidebar()
  const { navigateByPath } = useNavigateRoutes()

  return (
    <SidebarGroup>
      <SidebarMenu className="data-[open=true]:pl-4 data-[open=true]:pr-4" data-open={open}>
        {navMainItems.map((main) => {
          const isMainActive = !!matches.find(match => match.id === main.id);
          return (
            <SidebarMenuItem key={main.id}>
              <SidebarMenuButton
                className="data-[open=false]:flex data-[open=false]:justify-center h-10 data-[open=true]:w-[17.5rem] px-3"
                tooltip={main.title}
                isActive={isMainActive}
                data-open={open}
                onClick={() => navigateByPath({ path: main.url })}
              >
                <Separator
                  className="-ml-3 data-[active=false]:hidden w-1 h-5 rounded-xl data-[active=true]:bg-brand-500"
                  orientation="vertical"
                  data-open={open}
                  data-active={isMainActive}
                />
                <span className="flex gap-3">
                  <img
                    className="h-5 w-5 data-[icon=false]:hidden"
                    src={main.icon}
                    data-icon={!!main.icon}
                  />
                  <span
                    className="font-medium text-gray-600 text-base data-[open=false]:hidden data-[active=true]:font-semibold data-[active=true]:text-gray-800"
                    data-open={open}
                    data-active={isMainActive}
                  >
                    {main.title}
                  </span>
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
