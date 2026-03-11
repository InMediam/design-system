import { Meta, StoryObj } from "@storybook/react"
import { Home, Settings, User } from "lucide-react"
import {
  MobileTabList,
  MobileTabItem,
  MobileTabListProps,
} from "@inmediam/ui"
import { useState } from "react"

const meta = {
  title: "MobileTabList",
  component: MobileTabList,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
    },
  },
} satisfies Meta<typeof MobileTabList>

export default meta

const defaultTabs: MobileTabItem[] = [
  { id: 1, label: "Account", value: "account", icon: <User className="h-4 w-4" /> },
  { id: 2, label: "Home", value: "home", icon: <Home className="h-4 w-4" /> },
  {
    id: 3,
    label: "Settings",
    value: "settings",
    icon: <Settings className="h-4 w-4" />,
  },
]

export const Primary: StoryObj<MobileTabListProps> = {
  args: {
    tabs: defaultTabs,
    showNavigationButton: false,
  },
  render: (args) => {
    const [value, setValue] = useState("account")
    return (
      <div className="w-full max-w-md px-2">
        <MobileTabList
          {...args}
          value={value}
          onValueChange={setValue}
        />
        <div className="mt-4 rounded-lg p-4 border text-sm text-muted-foreground">
          Active tab: <strong>{value}</strong>
        </div>
      </div>
    )
  },
}

export const WithNavigationButton: StoryObj<MobileTabListProps> = {
  args: {
    tabs: defaultTabs,
    showNavigationButton: true,
  },
  render: (args) => {
    const [value, setValue] = useState("account")
    return (
      <div className="w-full max-w-md">
        <MobileTabList
          {...args}
          value={value}
          onValueChange={setValue}
          sheetTitle="Menu"
          sheetDescription="Navigate between sections"
        />
        <div className="mt-4 rounded-lg border p-4 text-sm text-muted-foreground">
          Active tab: <strong>{value}</strong>
        </div>
      </div>
    )
  },
}
