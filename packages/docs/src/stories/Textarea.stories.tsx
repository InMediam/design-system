import type { Meta, StoryObj } from '@storybook/react'
import { Label } from "@inmediam/ui"
import { Textarea, TextareaProps } from "@inmediam/ui"
import { InputItemsWrapper } from "@inmediam/ui"

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
