import { Switch, SwitchProps } from '@inmediam/ui'
import { Label } from '@inmediam/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Form/Switch',
  component: Switch,
} as Meta<SwitchProps>

export const Primary: StoryObj<SwitchProps> = {
  render(args) {
    return (
      <div className="flex gap-2 w-fit justify-center items-center">
        <Switch {...args} />
        <Label htmlFor="active">Ativo</Label>
      </div>
    )
  },
}
