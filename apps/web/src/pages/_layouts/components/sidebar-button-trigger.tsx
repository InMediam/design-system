import { ArrowLeftToLine } from "lucide-react"
import { Button, useSidebar } from "ui"

export function SidebarButtonTrigger() {
  const { setOpen, open } = useSidebar()

  return (
    <Button
      className="gap-3 w-[17.5rem] h-10 data-[open=false]:w-[3.5rem] justify-start hover:bg-transparent active:bg-transparent data-[open=true]:pl-4"
      variant="ghost"
      onClick={() => setOpen((prev) => !prev)}
      data-open={open}
    >
      <ArrowLeftToLine className="w-6 h-6 text-gray-500 data-[open=false]:rotate-180" data-open={open} />
      <span className="font-semibold text-base text-gray-600 data-[open=false]:hidden" data-open={open}>
        Recolher menu
      </span>
    </Button>
  )
}