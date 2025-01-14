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
import { CardValue } from "./card-value"

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
                className="data-[open=false]:flex data-[open=false]:justify-center h-10"
                tooltip={main.title}
                isActive={isMainActive}
                data-open={open}
                onClick={() => navigateByPath({ path: main.url })}
              >
                <Separator
                  className="m-0 p-0 data-[active=false]:hidden w-1 h-5 rounded-xl data-[active=true]:bg-brand-500 data-[open=false]:-mr-1"
                  orientation="vertical"
                  data-open={open}
                  data-active={isMainActive}
                />
                <span className="flex gap-3">
                  <img
                    className="h-6 w-6 data-[icon=false]:hidden"
                    src={main.icon}
                    data-icon={!!main.icon}
                  />
                  <span className="font-semibold text-gray-600 text-base data-[open=false]:hidden" data-open={open}>
                    {main.title}
                  </span>
                </span>
                <div className="flex justify-end w-full data-[open=false]:hidden pr-1" data-open={open}>
                  <CardValue>
                    10
                  </CardValue>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
