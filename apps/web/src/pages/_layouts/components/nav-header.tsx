import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "ui"

import LogoMark from "../../../assets/logo-mark.svg"
import { MediamLogoComponent } from "../icons/mediam-logo-component"
import { useNavigateRoutes } from "@/hooks/useNavigateRoutes"

export function NavHeader() {
  const { open } = useSidebar()
  const { navigateToHome } = useNavigateRoutes()

  return (
    <SidebarMenu>
      <SidebarMenuItem className="px-2">
        <SidebarMenuButton
          className="data-[open=false]:flex data-[open=false]:justify-center bg-tranparent hover:bg-transparent active:bg-transparent w-full"
          size="lg"
          data-open={open}
          onClick={navigateToHome}
        >
          <div className="flex justify-center items-center gap-1">
            <span>
              <img src={LogoMark} className="w-8 h-8" />
            </span>
            <span>
              <MediamLogoComponent
                className="data-[open=false]:hidden"
                data-open={open}
              />
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
