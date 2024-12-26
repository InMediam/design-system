import { Button, ButtonProps } from "../components/ui/button";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Confirmar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'success',
  },
}
