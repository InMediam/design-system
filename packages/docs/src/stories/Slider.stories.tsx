import { Meta, StoryObj } from "@storybook/react"
import { Slider, SliderProps } from "@inmediam/ui"

export default {
  title: 'Slider',
  component: Slider,
} as Meta<SliderProps>

export const Primary: StoryObj<SliderProps> = {
  args: {},
  render: (args) => {
    return (
      <Slider
        {...args}
        className="w-[20%]"
        defaultValue={[50]}
        max={100}
        step={1}
      />
    )
  },
}