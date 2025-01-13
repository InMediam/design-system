import { Circle } from "lucide-react";
import { Button, ButtonProps } from "../components/ui/button";
import { Meta, StoryFn, StoryObj } from "@storybook/react";

export default {
  title: 'Button',
  component: Button,
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button CTA'
  },
} as Meta<ButtonProps>

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button className="w-fit" {...args} />;

export const Primary: StoryObj<ButtonProps> = {
  render: (args) => {
    return (
      <Button className="w-fit" {...args}>
        <Circle className="w-4" /> {args.children} <Circle className="w-4" />
      </Button>
    )
  }
}

export const Playground: StoryFn<typeof Button> = Template.bind({});
Playground.args = {
  variant: 'success',
  size: 'default',
};
Playground.argTypes = {
  variant: {
    options: [
      'default',
      'secondary',
      'success',
      'warning',
      'destructive',
      'outline',
      'ghost',
      'link'
    ],
    control: { type: 'select' }
  },
  size: {
    options: ['default', 'xs', 'sm', 'lg'],
    control: { type: 'select' }
  }
}