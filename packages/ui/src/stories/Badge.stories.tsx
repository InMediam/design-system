import { Meta, StoryObj } from "@storybook/react"
import { Badge, BadgeProps } from "../components/ui/badge"

export default {
  title: 'Badge',
  component: Badge,
} as Meta<BadgeProps>

export const Primary: StoryObj<BadgeProps> = {
  args: {
    variant: "default",
  },
  render: (args) => {
    return (
      <div className="w-fit">
        <Badge {...args}>Badge</Badge>
      </div>
    )
  },
}