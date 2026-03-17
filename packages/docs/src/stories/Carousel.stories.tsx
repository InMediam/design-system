import { Meta, StoryObj } from "@storybook/react"
import { Card, CardContent, CarouselDots, CarouselDotsProps } from "@inmediam/ui"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProps
} from "@inmediam/ui"

export default {
  title: 'Carousel',
  args: {
    orientation: "horizontal",
    size: "sm"
  }
} as Meta<CarouselProps>

export const Primary: StoryObj<CarouselProps & CarouselDotsProps> = {
  render: ({ size, ...args }) => {
    return (
      <div className="flex items-center justify-center">
        <Carousel {...args} className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots size={size} />
        </Carousel>
      </div>
    )
  },
}

export const Playground: StoryObj<CarouselProps & CarouselDotsProps> = {
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: 'select' }
    },
    size: {
      options: ["sm", "md", "lg", "xl"],
      control: { type: 'select' }
    },
  },
  render: ({ size, ...args }) => {
    return (
      <div className="flex items-center justify-center">
        <Carousel {...args} className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots size={size} />
        </Carousel>
      </div>
    )
  },
}