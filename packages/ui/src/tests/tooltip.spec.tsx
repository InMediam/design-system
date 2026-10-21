import { act, fireEvent, render, screen } from '@testing-library/react'
import * as React from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../components/ui/tooltip'
import { touchDrag, touchHold, touchTap } from './touch'

type RenderTipOptions = {
  wrapper?: (children: React.ReactNode) => React.ReactNode
  tooltip?: Partial<React.ComponentProps<typeof Tooltip>>
  content?: React.ReactNode
}

const withProvider = (children: React.ReactNode) => (
  <TooltipProvider delayDuration={0} disableHoverableContent>
    {children}
  </TooltipProvider>
)

function renderTip(
  trigger: React.ReactElement,
  options: RenderTipOptions = {},
) {
  const build = (nextTrigger: React.ReactElement, next: RenderTipOptions) => {
    const { wrapper = (children) => children, tooltip, content } = next
    return withProvider(
      wrapper(
        <Tooltip {...tooltip}>
          <TooltipTrigger asChild>{nextTrigger}</TooltipTrigger>
          {content === undefined ? (
            <TooltipContent>Dica</TooltipContent>
          ) : (
            content
          )}
        </Tooltip>,
      ),
    )
  }

  const result = render(build(trigger, options))
  const rerenderTip = (
    nextTrigger: React.ReactElement,
    next: RenderTipOptions = {},
  ) => result.rerender(build(nextTrigger, { ...options, ...next }))

  return { ...result, rerenderTip }
}

// O DismissableLayer do Radix só passa a ouvir o pointerdown de fora no tick
// seguinte à abertura da dica.
const waitDismissableLayer = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0))
  })

afterEach(() => {
  vi.useRealTimers()
})

describe('toque simples', () => {
  it('abre com um toque e fecha com outro', () => {
    renderTip(<span>?</span>)

    touchTap(screen.getByText('?'))
    expect(screen.getByRole('tooltip')).toHaveTextContent('Dica')

    touchTap(screen.getByText('?'))
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('marca o gatilho passivo como tap', () => {
    renderTip(<span>?</span>)

    expect(screen.getByText('?')).toHaveAttribute('data-touch-mode', 'tap')
  })

  it('o toque fica só com a dica', () => {
    const rowClick = vi.fn()
    renderTip(<span>?</span>, {
      wrapper: (children) => <div onClick={rowClick}>{children}</div>,
    })

    expect(touchTap(screen.getByText('?'))).toBe(false)
    expect(rowClick).not.toHaveBeenCalled()
  })

  it('segurar não abre e não bloqueia o comportamento nativo', () => {
    vi.useFakeTimers()
    renderTip(<span>?</span>)

    expect(touchHold(screen.getByText('?'))).toBe(true)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('arrastar não abre', () => {
    renderTip(<span>?</span>)

    touchDrag(screen.getByText('?'))
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('toque fora fecha', async () => {
    renderTip(<span>?</span>)

    touchTap(screen.getByText('?'))
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
    await waitDismissableLayer()
    // No toque, o DismissableLayer do Radix só fecha no click que segue o
    // pointerdown.
    touchTap(document.body)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('abrir outra dica fecha a anterior', () => {
    render(
      withProvider(
        <>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>A</span>
            </TooltipTrigger>
            <TooltipContent>Dica A</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>B</span>
            </TooltipTrigger>
            <TooltipContent>Dica B</TooltipContent>
          </Tooltip>
        </>,
      ),
    )

    touchTap(screen.getByText('A'))
    touchTap(screen.getByText('B'))
    expect(screen.queryByText('Dica A')).not.toBeInTheDocument()
    expect(screen.getByRole('tooltip')).toHaveTextContent('Dica B')
  })

  it('rolar o container fecha', () => {
    renderTip(<span>?</span>, {
      wrapper: (children) => <div data-testid="scroll">{children}</div>,
    })

    touchTap(screen.getByText('?'))
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
    fireEvent.scroll(screen.getByTestId('scroll'))
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('botão desabilitado abre com toque e não executa a ação', () => {
    const onClick = vi.fn()
    renderTip(
      <button disabled onClick={onClick}>
        Ver fatura
      </button>,
    )

    touchTap(screen.getByText('Ver fatura'))
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
    expect(onClick).not.toHaveBeenCalled()
  })

  it('botão desabilitado que fica habilitado passa a long-press', () => {
    const onClick = vi.fn()
    const { rerenderTip } = renderTip(
      <button disabled onClick={onClick}>
        Ver fatura
      </button>,
    )
    expect(screen.getByText('Ver fatura')).toHaveAttribute(
      'data-touch-mode',
      'tap',
    )

    rerenderTip(<button onClick={onClick}>Ver fatura</button>)
    expect(screen.getByText('Ver fatura')).toHaveAttribute(
      'data-touch-mode',
      'long-press',
    )
  })

  it('chama onOpenChange(true) quando o consumidor controla open', () => {
    const onOpenChange = vi.fn()
    renderTip(<span>?</span>, { tooltip: { open: false, onOpenChange } })

    touchTap(screen.getByText('?'))
    expect(onOpenChange).toHaveBeenCalledWith(true)
  })
})

describe('sem interceptação', () => {
  it('open={false} sem onOpenChange não intercepta e volta a abrir quando vira undefined', () => {
    const rowClick = vi.fn()
    const wrapper = (children: React.ReactNode) => (
      <div onClick={rowClick}>{children}</div>
    )
    const { rerenderTip } = renderTip(<span>?</span>, {
      wrapper,
      tooltip: { open: false },
    })

    expect(touchTap(screen.getByText('?'))).toBe(true)
    expect(rowClick).toHaveBeenCalledTimes(1)
    expect(screen.getByText('?')).not.toHaveAttribute('data-touch-mode')

    rerenderTip(<span>?</span>, { tooltip: { open: undefined } })
    touchTap(screen.getByText('?'))
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
  })

  it.each([
    ['sem TooltipContent', null],
    [
      'TooltipContent hidden',
      <TooltipContent key="hidden" hidden>
        Dica
      </TooltipContent>,
    ],
  ])('%s não intercepta', (_, content) => {
    const rowClick = vi.fn()
    renderTip(<span>?</span>, {
      content,
      wrapper: (children) => <div onClick={rowClick}>{children}</div>,
    })

    expect(touchTap(screen.getByText('?'))).toBe(true)
    expect(rowClick).toHaveBeenCalledTimes(1)
  })
})

describe('mouse e teclado inalterados', () => {
  it('hover com mouse abre', async () => {
    renderTip(<span>?</span>)

    fireEvent.pointerMove(screen.getByText('?'), { pointerType: 'mouse' })
    expect(await screen.findByRole('tooltip')).toBeInTheDocument()
  })

  it('foco por teclado abre', async () => {
    renderTip(<span>?</span>)

    fireEvent.focus(screen.getByText('?'))
    expect(await screen.findByRole('tooltip')).toBeInTheDocument()
  })

  it('clique sem toque chega no container', () => {
    const rowClick = vi.fn()
    renderTip(<span>?</span>, {
      wrapper: (children) => <div onClick={rowClick}>{children}</div>,
    })

    expect(fireEvent.click(screen.getByText('?'))).toBe(true)
    expect(rowClick).toHaveBeenCalledTimes(1)
  })
})
