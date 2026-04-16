import { Meta, StoryObj } from "@storybook/react"
import { toast } from "sonner"

import { Button, Toaster } from "@inmediam/ui"

export default {
  title: "Sonner",
  component: Toaster,
  decorators: [
    (Story: React.ComponentType) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
} as Meta<typeof Toaster>

type Story = StoryObj<typeof Toaster>

export const Default: Story = {
  render: () => (
    <Button onClick={() => toast("Evento registrado com sucesso.")}>
      Mostrar toast
    </Button>
  ),
}

export const Sucesso: Story = {
  render: () => (
    <Button
      variant="success"
      onClick={() => toast.success("Operação realizada com sucesso!")}
    >
      Toast de sucesso
    </Button>
  ),
}

export const Erro: Story = {
  render: () => (
    <Button
      variant="destructive"
      onClick={() => toast.error("Ocorreu um erro inesperado.")}
    >
      Toast de erro
    </Button>
  ),
}

export const Aviso: Story = {
  render: () => (
    <Button
      variant="warning"
      onClick={() => toast.warning("Atenção: verifique os dados antes de continuar.")}
    >
      Toast de aviso
    </Button>
  ),
}

export const ComDescricao: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Arquivo enviado", {
          description: "O arquivo foi processado e está disponível.",
        })
      }
    >
      Toast com descrição
    </Button>
  ),
}

export const ComAcao: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Registro removido", {
          description: "O item foi excluído da lista.",
          action: {
            label: "Desfazer",
            onClick: () => toast.success("Ação desfeita."),
          },
        })
      }
    >
      Toast com ação
    </Button>
  ),
}
