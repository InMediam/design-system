import * as React from 'react'

import { cn } from "../../lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> // eslint-disable-line

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-200 focus-visible:ring-offset-0 focus-visible:border-brand-400 dark:focus-visible:ring-gray-800 dark:focus-visible:border-gray-600  disabled:cursor-not-allowed disabled:opacity-50 hover:border-gray-300 dark:text-gray-200',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
