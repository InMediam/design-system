
import { cn } from "../../lib/utils"

interface InputItemsWrapperProps {
  children: React.ReactNode,
  className?: string,
}

export function InputItemsWrapper({ children, className }: InputItemsWrapperProps) {
  return (
    <div className={cn("flex flex-col gap-2 w-fit", className)}>
      {children}
    </div>
  )
}