import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '../components/ui/label'
import { Textarea, TextareaProps } from '../components/ui/textarea'
import { InputItemsWrapper } from '../components/ui/inputItemsWrapper'

export default {
  title: 'Form/Textarea',
  component: Textarea,
} as Meta<TextareaProps>

export const Primary: StoryObj<TextareaProps> = {
  args: {
    placeholder: 'Descreva a observação',
  },
  render: (args) => {
    return (
      <InputItemsWrapper>
        <Label htmlFor="observation">Observação:</Label>
        <Textarea {...args} />
      </InputItemsWrapper>
    )
  },
}
