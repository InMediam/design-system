import { Meta, StoryObj } from "@storybook/react"

import { ScrollArea, ScrollBar } from "@inmediam/ui"

export default {
  title: "ScrollArea",
  component: ScrollArea,
} as Meta<typeof ScrollArea>

type Story = StoryObj<typeof ScrollArea>

const tags = [
  "Accordions", "Alert Dialog", "Avatar", "Badge", "Breadcrumb",
  "Button", "Calendar", "Card", "Carousel", "Checkbox",
  "Collapsible", "Command", "Context Menu", "Dialog", "Drawer",
  "Dropdown Menu", "Form", "Hover Card", "Input", "Input OTP",
  "Label", "Menubar", "Navigation Menu", "Pagination", "Popover",
  "Progress", "Radio Group", "Resizable", "Scroll Area", "Select",
  "Separator", "Sheet", "Skeleton", "Slider", "Sonner",
  "Switch", "Table", "Tabs", "Textarea", "Toast",
  "Toggle", "Toggle Group", "Tooltip",
]

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Componentes</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm py-1">{tag}</div>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max gap-4 p-4">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-md border bg-muted text-sm font-medium"
          >
            Item {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

export const ComConteudoLongo: Story = {
  render: () => (
    <ScrollArea className="h-48 w-full rounded-md border">
      <div className="p-4 space-y-2">
        {Array.from({ length: 30 }, (_, i) => (
          <p key={i} className="text-sm text-muted-foreground">
            Linha {i + 1} — conteúdo de exemplo para demonstrar o scroll vertical.
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
}
