import { Meta, StoryObj } from "@storybook/react"
import { Badge, BadgeProps } from "../components/ui/badge"
import { Dot } from "../components/ui/dot"

export default {
  title: 'Badge',
  component: Badge,
} as Meta<BadgeProps>

export const Primary: StoryObj<BadgeProps> = {
  args: {
    variant: "default",
    children: "Badge",
  },
  render: (args) => {
    return (
      <div className="w-fit">
        <Badge {...args} />
      </div>
    )
  },
}

export const PrimaryWithDot: StoryObj<BadgeProps> = {
  args: {
    variant: "default",
    children: "Badge",
    hasDot: true,
  },
  render: (args) => {
    return (
      <div className="w-fit">
        <Badge {...args} />
      </div >
    )
  },
}