import { act, fireEvent, render, screen } from '@testing-library/react'
import * as React from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../components/ui/tooltip'
import { CLICK_SUPPRESSION_WINDOW_MS } from '../components/ui/tooltip-touch-mode'
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
  vi.restoreAllMocks()
})

const mockPointer = (coarse: boolean) =>
  vi.spyOn(window, 'matchMedia').mockImplementation(
    (query) =>
      ({
        matches: coarse && query === '(pointer: coarse)',
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }) as MediaQueryList,
  )

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

describe('segurar', () => {
  const onClick = vi.fn()
  const renderButton = () => renderTip(<button onClick={onClick}>Abrir</button>)

  beforeEach(() => {
    vi.useFakeTimers()
    onClick.mockReset()
  })

  it('toque rápido executa a ação e não abre', () => {
    renderButton()

    expect(touchTap(screen.getByText('Abrir'))).toBe(true)
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('segurar 500 ms abre e soltar não executa a ação', () => {
    renderButton()

    expect(touchHold(screen.getByText('Abrir'))).toBe(false)
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
    expect(onClick).not.toHaveBeenCalled()
  })

  it('foco causado pelo toque não abre', () => {
    renderButton()
    const el = screen.getByText('Abrir')

    fireEvent.pointerDown(el, { pointerType: 'touch' })
    fireEvent.focus(el)
    fireEvent.pointerUp(el, { pointerType: 'touch' })
    fireEvent.click(el)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('segurar outro gatilho fecha a dica aberta', () => {
    render(
      withProvider(
        <>
          <Tooltip>
            <TooltipTrigger asChild>
              <button onClick={onClick}>Abrir</button>
            </TooltipTrigger>
            <TooltipContent>Dica</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button onClick={onClick}>Outro</button>
            </TooltipTrigger>
            <TooltipContent>Dica 2</TooltipContent>
          </Tooltip>
        </>,
      ),
    )

    touchHold(screen.getByText('Abrir'))
    touchHold(screen.getByText('Outro'))
    expect(screen.queryByText('Dica')).not.toBeInTheDocument()
    expect(screen.getByRole('tooltip')).toHaveTextContent('Dica 2')
  })

  it('soltar antes de 500 ms não abre', () => {
    renderButton()
    const el = screen.getByText('Abrir')

    fireEvent.pointerDown(el, { pointerType: 'touch' })
    act(() => {
      vi.advanceTimersByTime(499)
    })
    fireEvent.pointerUp(el, { pointerType: 'touch' })
    fireEvent.click(el)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('mover mais de 10 px cancela', () => {
    renderButton()
    const el = screen.getByText('Abrir')

    fireEvent.pointerDown(el, { pointerType: 'touch', clientX: 0, clientY: 0 })
    fireEvent.pointerMove(el, {
      pointerType: 'touch',
      clientX: 0,
      clientY: 11,
    })
    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('mover o dedo depois de a dica abrir não libera a ação', () => {
    renderButton()
    const el = screen.getByText('Abrir')

    fireEvent.pointerDown(el, { pointerType: 'touch', clientX: 0, clientY: 0 })
    act(() => {
      vi.advanceTimersByTime(500)
    })
    fireEvent.pointerMove(el, {
      pointerType: 'touch',
      clientX: 0,
      clientY: 30,
    })
    fireEvent.pointerUp(el, { pointerType: 'touch' })
    expect(fireEvent.click(el)).toBe(false)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('toque rápido com a dica aberta executa a ação e fecha', () => {
    renderButton()

    touchHold(screen.getByText('Abrir'))
    touchTap(screen.getByText('Abrir'))
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('link ancestral não navega depois de segurar', () => {
    const linkClick = vi.fn()
    renderTip(<span>Endereço</span>, {
      wrapper: (children) => (
        <a href="/x" onClick={linkClick}>
          {children}
        </a>
      ),
    })

    expect(touchHold(screen.getByText('Endereço'))).toBe(false)
    expect(linkClick).not.toHaveBeenCalled()
    expect(screen.getByText('Endereço')).toHaveAttribute(
      'data-touch-mode',
      'long-press',
    )
  })

  it('cancela o menu de contexto do segurar', () => {
    renderButton()
    const el = screen.getByText('Abrir')

    fireEvent.pointerDown(el, { pointerType: 'touch' })
    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(fireEvent.contextMenu(el)).toBe(false)
  })

  it('clique que nunca chega não engole o próximo', () => {
    renderButton()

    touchHold(screen.getByText('Abrir'), { emitClick: false })
    act(() => {
      vi.advanceTimersByTime(CLICK_SUPPRESSION_WINDOW_MS)
    })
    expect(fireEvent.click(screen.getByText('Abrir'))).toBe(true)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('bloqueia seleção só com ponteiro grosso', () => {
    mockPointer(true)
    renderButton()

    expect(screen.getByText('Abrir')).toHaveStyle({ userSelect: 'none' })
  })

  it('não muda o estilo com ponteiro fino', () => {
    mockPointer(false)
    renderButton()

    expect(screen.getByText('Abrir').getAttribute('style')).toBeNull()
  })
})
