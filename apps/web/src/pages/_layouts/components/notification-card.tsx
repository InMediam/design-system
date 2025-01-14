import { X } from "lucide-react";
import { ComponentProps } from "react";
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, cn, useSidebar } from "ui";

interface NotificationCardProps extends ComponentProps<typeof Card> {
  title: string;
  description: string;
  image: string;
}

export function NotificationCard({ className, title, description, image, ...rest }: NotificationCardProps) {
  const { open } = useSidebar()

  return (
    <Card {...rest} className={cn("bg-gray-100 dark:bg-transparent dark:border-gray-700 data-[open=false]:hidden w-[17.5rem] h-full", className)} data-open={open}>
      <CardHeader className="pt-4 pb-4 w-full px-4">
        <div className="flex flex-row justify-between">
          <CardTitle className="text-sm font-semibold text-gray-900 dark:text-muted-foreground">{title}</CardTitle>
          <X className="w-5 h-5 dark:text-muted-foreground" />
        </div>
        <CardDescription className="p-0 dark:text-gray-500">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 flex justify-center">
        <img className="w-[15.5rem] h-[8.5rem] bg-no-repeat bg-auto p-0" src={image} />
      </CardContent>
      <CardFooter className="flex justify-start items-start gap-3 pl-4 pr-0 pt-2 pb-2">
        <Button className="text-gray-600 p-0 h-6" variant="link">Descartar</Button>
        <Button className="text-brand-700 p-0 h-6" variant="link">Conferir</Button>
      </CardFooter>
    </Card>
  )
}