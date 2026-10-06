import { cn } from '../../lib/utils'

type HintTextProps = React.ComponentProps<'span'>

export function HintText({ ...rest }: HintTextProps) {
  return (
    <span
      {...rest}
      className={cn(
        'font-normal text-sm/5 text-error-primary',
        rest.className,
      )}
    >
      {rest.children}
    </span>
  )
}
