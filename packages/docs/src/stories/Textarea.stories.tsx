import type { Meta, StoryObj } from '@storybook/react'
import { Label } from "ui"
import { Textarea, TextareaProps } from "ui"
import { InputItemsWrapper } from "ui"

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
