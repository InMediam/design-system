import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../lib/utils'

interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
  required?: boolean
}

const labelVariants = cva(
  [
    'text-sm/5 font-medium peer-disabled:cursor-not-allowed',
    'peer-disabled:opacity-70 text-secondary',
  ],
)

const Label = ({
  className,
  required = false,
  ...props
}: LabelProps &
  VariantProps<typeof labelVariants> // eslint-disable-line
) => (
  <LabelPrimitive.Root
    className={cn(labelVariants(), className)}
    {...props}
  >
    {props.children}
    <span
      className="text-fg-brand-primary data-[required=false]:hidden ml-[2px]"
      data-required={required}
    >
      *
    </span>
  </LabelPrimitive.Root>
)
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
