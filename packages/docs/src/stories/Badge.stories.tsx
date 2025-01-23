import { Meta, StoryObj } from "@storybook/react"
import { Badge, BadgeProps } from "@inmediam/ui"

export default {
  title: 'Badge',
  component: Badge,
  args: {
    variant: "default",
    children: "Badge",
  }
} as Meta<BadgeProps>

export const Primary: StoryObj<BadgeProps> = {
  render: (args) => {
    return (
      <Badge {...args} />
    )
  },
}

export const Playground: StoryObj<BadgeProps> = {
  args: {
    dot: true,
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
  },
  render: (args) => {
    return (
      <Badge {...args} />
    )
  },
}