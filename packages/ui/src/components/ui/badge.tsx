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
          "border-brand bg-brand-primary text-brand-secondary hover:bg-brand-secondary dark:text-primary-solid hover:dark:bg-brand-primary/95",
        secondary:
          "border-secondary bg-secondary text-secondary hover:bg-secondary-hover",
        destructive:
          "border-error-subtle bg-error-primary text-error-primary-hover hover:bg-error-secondary",
        success: "border-secondary bg-success-primary text-success-primary hover:bg-success-secondary hover:dark:bg-success-primary/85",
        warning: "border-warning bg-warning-primary text-warning-primary dark:bg-warning-secondary dark:text-primary-solid",
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
