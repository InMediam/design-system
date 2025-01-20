import { ArrowLeftToLine } from "lucide-react"
import { Button, useSidebar } from "ui"

export function SidebarButtonTrigger() {
  const { isMobile, open, openMobile, setOpen, setOpenMobile } = useSidebar()

  function handleToggleOpenSidebar() {
    if (isMobile) return setOpenMobile((prev) => !prev)
    setOpen((prev) => !prev)
  }

  return (
    <Button
      className="gap-3 w-[17.5rem] data-[open-mobile=true]:data-[is-mobile=true]:w-[15.5rem] h-10 data-[open=false]:w-[3.5rem] justify-start hover:bg-transparent active:bg-transparent data-[open=true]:pl-4"
      variant="ghost"
      onClick={handleToggleOpenSidebar}
      data-open={open}
      data-open-mobile={openMobile}
      data-is-mobile={isMobile}
    >
      <ArrowLeftToLine className="w-5 h-5 text-gray-500 data-[open=false]:rotate-180" data-open={open} />
      <span className="font-medium text-base text-gray-600 data-[open=false]:hidden" data-open={open}>
        Recolher menu
      </span>
    </Button>
  )
}