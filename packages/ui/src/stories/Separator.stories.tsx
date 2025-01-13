import { Meta, StoryObj } from "@storybook/react"
import { Separator, SeparatorProps } from "../components/ui/separator"

export default {
  title: 'Separator',
  component: Separator,
} as Meta<SeparatorProps>

export const Primary: StoryObj<SeparatorProps> = {
  args: {},
  render: () => {
    return (
      <div className="w-fit">
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
          <p className="text-sm text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    )
  },
}