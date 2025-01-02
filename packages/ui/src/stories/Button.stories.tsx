import { Circle } from "lucide-react";
import { Button, ButtonProps } from "../components/ui/button";
import { Meta, StoryFn, StoryObj } from "@storybook/react";

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Confirmar',
  },
} as Meta<ButtonProps>

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'default',
    size: 'default',
  },
  render: (args) => {
    return (
      <div>
        <Button {...args}>
          <Circle className="w-4" /> Button CTA <Circle className="w-4" />
        </Button>
      </div>
    )
  }
}

export const ExtraSmall: StoryFn<typeof Button> = Template.bind({});
ExtraSmall.args = {
  variant: 'default',
  size: 'xs',
};

export const Small: StoryFn<typeof Button> = Template.bind({});
Small.args = {
  variant: 'default',
  size: 'sm',
}

export const Medium: StoryFn<typeof Button> = Template.bind({});
Medium.args = {
  variant: 'default',
  size: 'default',
};

export const Large: StoryFn<typeof Button> = Template.bind({});
Large.args = {
  variant: 'default',
  size: 'lg',
};