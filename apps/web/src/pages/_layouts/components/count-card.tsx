import { ComponentProps } from "react";
import { Card, CardDescription, cn } from "@inmediam/ui";


export function CountCard({ children, className, ...rest }: ComponentProps<typeof Card>) {

  return (
    <Card
      {...rest}
      className={cn('border rounded-md border-gray-200 shadow-none bg-gray-50 dark:bg-muted dark:text-gray-500 dark:border-muted px-1.5 py-0.5', className)}
    >
      <CardDescription className="text-xs font-medium text-gray-700 dark:text-gray-500 ">
        {children}
      </CardDescription>
    </Card>
  )
}   