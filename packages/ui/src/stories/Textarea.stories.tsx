import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '../components/ui/label'
import { Textarea, TextareaProps } from '../components/ui/textarea'

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
      <div className="flex flex-col gap-2 w-fit">
        <Label htmlFor="observation">Observação:</Label>
        <Textarea {...args} />
      </div>
    )
  },
}
