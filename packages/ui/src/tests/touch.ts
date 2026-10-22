import { act, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

import { LONG_PRESS_DELAY_MS } from '../components/ui/tooltip-touch-mode'

const touch = { pointerType: 'touch', clientX: 0, clientY: 0 }

// Ordem do Chrome no Android: o pointerleave do dedo vem logo depois do
// pointerup, e o foco só chega com os eventos de mouse de compatibilidade,
// antes do click.
const releaseFinger = (element: Element) => {
  fireEvent.pointerUp(element, touch)
  fireEvent.pointerLeave(element, touch)
  fireEvent.mouseDown(element)
  fireEvent.focus(element)
  fireEvent.mouseUp(element)
  return fireEvent.click(element)
}

export function touchTap(element: Element) {
  fireEvent.pointerDown(element, touch)
  return releaseFinger(element)
}

export function touchHold(element: Element, { emitClick = true } = {}) {
  fireEvent.pointerDown(element, touch)
  act(() => {
    vi.advanceTimersByTime(LONG_PRESS_DELAY_MS)
  })
  if (emitClick) return releaseFinger(element)
  fireEvent.pointerUp(element, touch)
  fireEvent.pointerLeave(element, touch)
  return undefined
}

export function touchDrag(element: Element) {
  fireEvent.pointerDown(element, touch)
  fireEvent.pointerMove(element, { ...touch, clientY: 20 })
  fireEvent.pointerCancel(element, touch)
}
