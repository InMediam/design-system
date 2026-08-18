import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"
import { Dot } from "./dot"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex gap-1.5 w-fit",
  {
    variants: {
      variant: {
        default:
          "border-brand bg-brand-primary text-brand-secondary hover:bg-brand-secondary",
        secondary:
          "border-secondary bg-secondary text-secondary hover:bg-secondary-hover",
        destructive:
          "border-error bg-error-secondary text-error-primary hover:bg-error-secondary",
        success: "bg-success-secondary text-success-primary hover:bg-success-secondary",
        warning: "border-warning bg-warning-secondary text-warning-primary",
        outline: "text-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {
  dot?: boolean
}

function Badge({ className, variant, dot = false, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && <Dot variant={variant} />}
      {props.children}
    </div>
  )
}

export { Badge, badgeVariants }
