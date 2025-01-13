import { Meta, StoryObj } from "@storybook/react"
import { Checkbox, CheckboxProps } from "../components/ui/checkbox"
import { Label } from "../components/ui/label"

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {},
  render: (args) => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms"  {...args} />
        <Label
          htmlFor="terms"
        >
          Accept terms and conditions
        </Label>
      </div>
    )
  },
}