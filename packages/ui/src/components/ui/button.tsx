import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  'flex gap-1 inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[loading-disabled=true]:border data-[loading-disabled=true]:border-primary data-[loading-disabled=true]:bg-primary data-[loading-disabled=true]:text-quinary data-[loading-disabled=true]:opacity-100',
  {
    variants: {
      variant: {
        default: 'bg-brand-tertiary text-primary-solid hover:bg-brand-quaterary disabled:opacity-100 disabled:border disabled:border-secondary disabled:bg-secondary disabled:text-quinary disabled:opacity-100',
        destructive:
          'bg-error text-white hover:bg-error-hover',
        success:
          'bg-success text-white hover:bg-success',
        warning:
          'bg-warning text-white hover:bg-warning',
        outline:
          'border border-primary bg-primary hover:bg-secondary-hover',
        secondary: 'bg-secondary text-secondary hover:bg-secondary-hover',
        tertiary: 'border border-brand bg-brand-primary text-secondary hover:bg-brand-secondary',
        ghost: 'hover:bg-secondary-hover',
        link: 'text-brand-tertiary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-3.5',
        xs: 'h-8 px-3',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-4',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  // eslint-disable-line 
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
