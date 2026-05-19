import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

function InputGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="input-group"
      className={cn('relative flex items-center', className)}
      {...props}
    />
  )
}

const InputGroupInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    data-slot="input-group-input"
    className={cn(
      'flex h-10 w-full rounded-lg border border-primary bg-primary px-3 py-2 pr-10 text-sm ring-offset-background',
      'placeholder:text-placeholder',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-0 focus-visible:border-primary',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'hover:border-primary',
      className,
    )}
    {...props}
  />
))
InputGroupInput.displayName = 'InputGroupInput'

interface InputGroupAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'inline-start' | 'inline-end'
}

function InputGroupAddon({
  className,
  align = 'inline-end',
  ...props
}: InputGroupAddonProps) {
  return (
    <div
      data-slot="input-group-addon"
      className={cn(
        'absolute top-1/2 -translate-y-1/2 flex items-center',
        align === 'inline-end' ? 'right-1' : 'left-1',
        className,
      )}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-brand-tertiary-on-brand hover:bg-brand-quaterary',
        ghost: 'hover:bg-secondary-hover',
        outline: 'border border-primary bg-primary hover:bg-secondary-hover',
      },
      size: {
        default: 'h-10 px-3.5',
        xs: 'h-8 px-3',
        'icon-xs': 'h-6 w-6',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface InputGroupButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof inputGroupButtonVariants> {
  asChild?: boolean
}

const InputGroupButton = React.forwardRef<HTMLButtonElement, InputGroupButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(inputGroupButtonVariants({ variant, size, className }))}
        {...props}
      />
    )
  },
)
InputGroupButton.displayName = 'InputGroupButton'

export { InputGroup, InputGroupInput, InputGroupAddon, InputGroupButton }
