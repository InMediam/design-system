import { Meta, StoryObj } from "@storybook/react"
import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProps
} from "../components/ui/carousel"

export default {
  title: 'Carousel',
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: 'select' }
    },
  }
} as Meta<CarouselProps>

export const Primary: StoryObj<CarouselProps> = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => {
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
        </Carousel>
      </div>
    )
  },
}