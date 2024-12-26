import type { Meta, StoryObj } from '@storybook/react'
import { Switch, SwitchProps } from '../components/ui/switch'
import { Label } from '../components/ui/label'

export default {
  title: 'Form/Switch',
  component: Switch,
} as Meta<SwitchProps>

export const Primary: StoryObj<SwitchProps> = {
  render(args) {
    return (
      <div className="flex flex-col gap-2 w-fit">
        <Label htmlFor="active">Ativo:</Label>
        <Switch {...args} />
      </div>
    )
  },
}
