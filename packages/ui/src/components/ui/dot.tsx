import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const dotVariants = cva(
  "w-1.5 h-1.5 rounded-full",
  {
    variants: {
      variant: {
        default: "bg-brand-quaterary",
        secondary: "bg-foreground",
        destructive: "bg-error",
        success: "bg-success",
        warning: "bg-warning",
        outline: "bg-background border-2 border-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface DotProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof dotVariants> { }

function Dot({ className, variant, ...props }: DotProps) {
  return (
    <div className={cn(dotVariants({ variant }), className)} {...props} />
  )
}

export { Dot, dotVariants }
