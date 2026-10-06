'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import { cn } from '../../lib/utils'

const Slider = ({
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) => (
  <SliderPrimitive.Root
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className={cn(
        'relative h-1.5 w-full grow overflow-hidden rounded-full',
        'bg-quaternary',
      )}
    >
      <SliderPrimitive.Range className="absolute h-full bg-brand-quinary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={cn(
      'block h-4 w-4 rounded-full border border-brand bg-primary shadow',
      'transition-colors focus-visible:outline-none dark:ring-1',
      'dark:ring-ring focus-visible:ring-1 focus-visible:ring-ring',
      'disabled:pointer-events-none disabled:opacity-50',
    )}
    />
  </SliderPrimitive.Root>
)
Slider.displayName = SliderPrimitive.Root.displayName

export type { SliderProps } from '@radix-ui/react-slider'

export { Slider }
