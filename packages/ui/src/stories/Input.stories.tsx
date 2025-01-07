import type { Meta, StoryObj } from '@storybook/react'
import { Input, InputProps } from "../components/ui/input"
import { Label } from '../components/ui/label'
import { InputItemsWrapper } from '../components/ui/inputItemsWrapper'

export default {
  title: 'Form/Input',
  component: Input,
  args: {
    type: 'text',
    placeholder: 'Digite o seu nome',
  },
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {
  render: (args) => {
    return (
      <InputItemsWrapper>
        <Label htmlFor="name">Nome:</Label>
        <Input  {...args} />
      </InputItemsWrapper>
    )
  },
}

export const Playground: StoryObj<InputProps> = {
  args: {
    type: 'text',
    placeholder: 'Digite algo',
  },
  argTypes: {
    type: {
      options: ['text', 'password', 'email', 'number', 'file'],
      control: { type: 'select' }
    },
  },
  render: (args) => {
    return (
      <InputItemsWrapper>
        <Label htmlFor="name">Playground:</Label>
        <Input  {...args} />
      </InputItemsWrapper>
    )
  },
}