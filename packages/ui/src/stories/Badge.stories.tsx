import { Meta, StoryObj } from "@storybook/react"
import { Badge, BadgeProps } from "../components/ui/badge"

export default {
  title: 'Badge',
  component: Badge,
  args: {
    variant: "default",
    children: "Badge",
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'secondary',
        'success',
        'warning',
        'destructive',
        'outline',
      ],
      control: { type: 'select' }
    },
  }
} as Meta<BadgeProps>

export const Primary: StoryObj<BadgeProps> = {
  render: (args) => {
    return (
      <div className="w-fit">
        <Badge {...args} />
      </div>
    )
  },
}

export const Playground: StoryObj<BadgeProps> = {
  args: {
    dot: true,
  },
  render: (args) => {
    return (
      <div className="w-fit">
        <Badge {...args} />
      </div >
    )
  },
}