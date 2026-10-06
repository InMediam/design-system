import { Checkbox, CheckboxProps } from '@inmediam/ui'
import { Label } from '@inmediam/ui'
import { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {},
  render: (args) => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" {...args} />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    )
  },
}
