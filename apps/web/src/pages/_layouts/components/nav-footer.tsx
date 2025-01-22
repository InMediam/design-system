import { ComponentProps } from 'react'
import { useMatches } from 'react-router-dom'
import {
  Separator,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@inmediam/ui"

import { useNavigateRoutes } from '@/hooks/useNavigateRoutes'

import { navFooterItems } from '../helpers/nav-footer-items'

export function NavFooter({ ...rest }: ComponentProps<typeof SidebarGroup>) {
  const matches = useMatches()
  const { open, openMobile, isMobile } = useSidebar()
  const { navigateByPath } = useNavigateRoutes()

  return (
    <SidebarGroup {...rest}>
      <SidebarMenu
        className="data-[open=true]:pl-4 data-[open=true]:pr-4 items-center justify-center"
        data-open={open}
      >
        {navFooterItems.map((main) => {
          const isActive = !!matches.find((match) => match.id === main.id)
          return (
            <SidebarMenuItem key={main.id}>
              <SidebarMenuButton
                className="h-10 px-3 data-[open=false]:flex data-[open-mobile=true]:data-[is-mobile=true]:w-[15.5rem] data-[open=true]:w-[17.5rem] data-[open=false]:justify-center"
                tooltip={main.title}
                isActive={isActive}
                data-open={open}
                data-open-mobile={openMobile}
                data-is-mobile={isMobile}
                onClick={() => navigateByPath({ path: main.url })}
              >
                <Separator
                  className="-ml-3 data-[open=false]:-ml-8 fixed h-5 w-1 rounded-xl data-[active=false]:hidden data-[active=true]:bg-brand-500"
                  orientation="vertical"
                  data-open={open}
                  data-active={isActive}
                />
                <span className="flex gap-3">
                  <img
                    className="h-5 w-5 data-[icon=false]:hidden"
                    src={main.icon}
                    data-icon={!!main.icon}
                  />
                  <span
                    className="whitespace-nowrap text-base font-medium text-gray-600 data-[open=false]:hidden data-[active=true]:font-semibold data-[active=true]:dark:text-gray-400"
                    data-open={open}
                    data-active={isActive}
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
