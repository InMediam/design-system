import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from 'lucide-react'
import * as React from 'react'
import { type ChevronProps, DayButton, DayPicker } from 'react-day-picker'

import { cn } from '../../lib/utils'
import { buttonVariants } from './button'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

const chevronIcons = {
  left: ChevronLeft,
  right: ChevronRight,
  up: ChevronUp,
  down: ChevronDown,
}

function CalendarChevron({ orientation = 'left', className }: ChevronProps) {
  const Icon = chevronIcons[orientation]
  return <Icon className={cn('h-4 w-4', className)} />
}

// A v9+ aplica os modificadores (selected, today...) na célula; os estilos
// abaixo ficam no botão, como era na v8.
function CalendarDayButton({
  className,
  // `day` não deve ir para o DOM.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  day: _day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const ref = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <button
      ref={ref}
      className={cn(
        className,
        modifiers.today && 'bg-secondary-hover',
        modifiers.selected &&
          [
            'bg-brand-quinary opacity-100 hover:text-primary-on-brand',
            'focus:bg-brand-quinary focus:text-primary-on-brand',
          ],
        modifiers.range_middle && 'bg-secondary-hover text-primary',
        modifiers.outside && 'text-tertiary opacity-50',
        modifiers.outside &&
          modifiers.selected &&
          'bg-secondary-hover/50 text-tertiary opacity-100',
        modifiers.disabled && 'text-tertiary opacity-50',
      )}
      {...props}
    />
  )
}
CalendarDayButton.displayName = 'CalendarDayButton'

function Calendar({
  className,
  classNames,
  components,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'relative flex flex-col gap-4 sm:flex-row',
        month: 'space-y-4',
        month_caption: 'flex justify-center pt-1 items-center',
        caption_label: 'text-sm font-medium',
        nav: 'absolute inset-x-1 top-0 flex items-center justify-between',
        button_previous: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          'aria-disabled:cursor-not-allowed',
        ),
        button_next: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          'aria-disabled:cursor-not-allowed',
        ),
        month_grid: 'w-full border-collapse space-y-1',
        weekdays: 'flex',
        weekday: 'text-tertiary rounded-md w-9 font-normal text-[0.8rem]',
        week: 'flex w-full mt-2',
        day: cn(
          'h-9 w-9 text-center text-sm p-0 relative',
          'aria-selected:bg-secondary-hover first:aria-selected:rounded-l-md',
          'last:aria-selected:rounded-r-md',
          '[&.day-range-end]:aria-selected:rounded-r-md',
          '[&.day-outside]:aria-selected:bg-secondary-hover/50',
          'focus-within:relative focus-within:z-20',
        ),
        day_button: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal',
        ),
        range_end: 'day-range-end',
        outside: 'day-outside',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: CalendarChevron,
        DayButton: CalendarDayButton,
        ...components,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
