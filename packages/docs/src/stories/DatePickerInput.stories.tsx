import React from "react"
import { Meta, StoryObj } from "@storybook/react"

import { DatePickerInput } from "@inmediam/ui"

export default {
  title: "DatePickerInput",
  component: DatePickerInput,
} as Meta<typeof DatePickerInput>

type Story = StoryObj<typeof DatePickerInput>

export const Default: Story = {
  render: () => <DatePickerInput label="Data" />,
}

export const ComValorInicial: Story = {
  render: () => (
    <DatePickerInput label="Data de início" defaultValue="01/06/2025" />
  ),
}

export const DataDeVencimento: Story = {
  render: () => <DatePickerInput label="Data de vencimento" />,
}

export const ComCallback: Story = {
  render: () => (
    <DatePickerInput
      label="Data de nascimento"
      onChange={(date, masked) => {
        if (date) {
          console.log("Data válida:", date.toISOString(), "| Mascarada:", masked)
        }
      }}
    />
  ),
}
