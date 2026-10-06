import * as React from 'react'

import { cn } from '../../lib/utils'

export type InputProps = React.ComponentProps<'input'>

const Input = ({ className, type, max, ...props }: InputProps) => {
  return (
    <input
      type={type}
      max={type === 'date' && !max ? '2999-12-31' : max}
      className={cn(
        'flex h-10 w-full rounded-lg border border-primary bg-primary px-3',
        'py-2 text-sm ring-offset-background file:border-0',
        'file:bg-transparent file:text-sm file:font-medium',
        'placeholder:text-placeholder focus-visible:outline-none',
        'focus-visible:ring-2 focus-visible:ring-secondary',
        'focus-visible:ring-offset-0 focus-visible:border-primary',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'hover:border-primary',
        className,
      )}
      {...props}
    />
  )
}
Input.displayName = 'Input'

export { Input }
