import { Bold } from "lucide-react"

import { Toggle, ToggleProps } from "ui"
import { Meta, StoryObj } from "@storybook/react"

export default {
  title: 'Toggle',
} as Meta<ToggleProps>

export const Primary: StoryObj<ToggleProps> = {
  args: {},
  render: (args) => {
    return (
      <Toggle {...args} aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
    )
  },
}
