import { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarImage, AvatarFallback, AvatarProps } from "../components/ui/avatar"

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {},
  render: (args) => {
    return (
      <div className="w-full">
        <Avatar {...args}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    )
  },
}

export const Fallback: StoryObj<AvatarProps> = {
  args: {},
  render: (args) => {
    return (
      <div className="w-full">
        <Avatar {...args}>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>)
  }
}