import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const dotVariants = cva(
  "w-1.5 h-1.5 rounded-full",
  {
    variants: {
      variant: {
        default: "bg-gray-700",
        secondary: "bg-brand-700",
        destructive: "bg-error-700",
        success: "bg-success-700",
        warning: "bg-warning-700",
        outline: "bg-gray-700",
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
