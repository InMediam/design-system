import { ComponentProps } from "react";
import { Card, cn } from "ui";


export function CardValue({ children, className, ...rest }: ComponentProps<typeof Card>) {

  return (
    <Card
      {...rest}
      className={cn('text-xs font-medium border rounded-md border-gray-200 shadow-none bg-gray-50 dark:bg-muted dark:text-gray-500 dark:border-muted px-1.5 py-0.5', className)}>
      {children}
    </Card>
  )
} 