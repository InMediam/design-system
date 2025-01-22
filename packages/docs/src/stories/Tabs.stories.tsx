import { Meta, StoryObj } from '@storybook/react'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsProps,
} from "@inmediam/ui"

export default {
  title: 'Tabs',
} as Meta<TabsProps>

export const Primary: StoryObj<TabsProps> = {
  args: {
  },
  render: (args) => {
    return (
      <div>
        <Tabs defaultValue="account" {...args}>
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Tab 1 content</TabsContent>
          <TabsContent value="password">Tab 2 content</TabsContent>
        </Tabs>
      </div>
    )
  },
}
