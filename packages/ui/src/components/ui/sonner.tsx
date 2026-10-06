'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

import { cn } from '../../lib/utils'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: cn(
            'group toast group-[.toaster]:bg-primary',
            'group-[.toaster]:text-primary',
            'group-[.toaster]:border-secondary group-[.toaster]:shadow-lg',
          ),
          description: 'group-[.toast]:text-tertiary',
          actionButton: cn(
            'group-[.toast]:bg-brand-quinary',
            'group-[.toast]:text-primary-on-brand',
          ),
          cancelButton:
            'group-[.toast]:bg-tertiary group-[.toast]:text-tertiary',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
