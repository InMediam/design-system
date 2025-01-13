import { Meta, StoryObj } from "@storybook/react"
import { Progress, ProgressProps } from "../components/ui/progress"
import { useEffect, useState } from "react"

export default {
  title: 'Progress',
  component: Progress,
} as Meta<ProgressProps>


function RenderComponent({ ...args }: ProgressProps) {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress {...args} value={progress} className="w-[30%]" />
  )
}

export const Primary: StoryObj<ProgressProps> = {
  args: {},
  render: (args) => {
    return (
      <RenderComponent {...args} />
    )
  },
}