import type { Meta, StoryObj } from '@storybook/react'
import { Input, InputProps } from "../components/ui/input"
import { Label } from '../components/ui/label'

export default {
  title: 'Form/Input',
  component: Input,
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {
  args: {
    type: 'text',
    placeholder: 'Digite o seu nome',
  },
  render: (args) => {
    return (
      <div className="flex flex-col gap-2 w-fit">
        <Label htmlFor="name">Nome:</Label>
        <Input {...args} />
      </div>
    )
  },
}
