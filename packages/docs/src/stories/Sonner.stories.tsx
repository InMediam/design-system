import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { toast } from "sonner"

import { Button, Toaster } from "@inmediam/ui"

type ToastVariant = "default" | "success" | "error" | "warning" | "info"

type Position =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"

interface SonnerArgs {
  variant: ToastVariant
  message: string
  description: string
  withAction: boolean
  position: Position
  richColors: boolean
  expand: boolean
}

export default {
  title: "Sonner",
  component: Toaster,
  args: {
    variant: "default",
    message: "Evento registrado com sucesso.",
    description: "",
    withAction: false,
    position: "bottom-right",
    richColors: false,
    expand: false,
  },
} as Meta<SonnerArgs>

const Template: StoryFn<SonnerArgs> = (args) => {
  const handleClick = () => {
    const options = {
      description: args.description || undefined,
      action: args.withAction
        ? {
            label: "Desfazer",
            onClick: () => toast.success("Ação desfeita."),
          }
        : undefined,
    }

    if (args.variant === "default") {
      toast(args.message, options)
    } else {
      toast[args.variant](args.message, options)
    }
  }

  return (
    <>
      <Button className="w-fit" onClick={handleClick}>
        Mostrar toast
      </Button>
      <Toaster
        position={args.position}
        richColors={args.richColors}
        expand={args.expand}
      />
    </>
  )
}

export const Default: StoryObj<SonnerArgs> = {
  render: () => (
    <>
      <Button
        className="w-fit"
        onClick={() => toast("Evento registrado com sucesso.")}
      >
        Mostrar toast
      </Button>
      <Toaster />
    </>
  ),
}

export const Playground: StoryFn<SonnerArgs> = Template.bind({})
Playground.argTypes = {
  variant: {
    options: ["default", "success", "error", "warning", "info"],
    control: { type: "select" },
  },
  position: {
    options: [
      "top-left",
      "top-center",
      "top-right",
      "bottom-left",
      "bottom-center",
      "bottom-right",
    ],
    control: { type: "select" },
  },
  message: { control: { type: "text" } },
  description: { control: { type: "text" } },
  withAction: { control: { type: "boolean" } },
  richColors: { control: { type: "boolean" } },
  expand: { control: { type: "boolean" } },
}
