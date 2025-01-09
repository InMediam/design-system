import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "ui"

export function NavHeader() {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          </div>
          <div className="grid flex-1 text-center text-sm leading-tight">
            <h2 className="truncate font-semibold">
              InMediam
            </h2>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
