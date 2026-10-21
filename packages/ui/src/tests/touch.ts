import { act, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

import { LONG_PRESS_DELAY_MS } from '../components/ui/tooltip-touch-mode'

const touch = { pointerType: 'touch', clientX: 0, clientY: 0 }

// Mesma ordem de um toque real: o navegador dispara o pointerleave do dedo
// logo depois do pointerup, e só então o click.
export function touchTap(element: Element) {
  fireEvent.pointerDown(element, touch)
  fireEvent.pointerUp(element, touch)
  fireEvent.pointerLeave(element, touch)
  return fireEvent.click(element)
}

export function touchHold(element: Element, { emitClick = true } = {}) {
  fireEvent.pointerDown(element, touch)
  act(() => {
    vi.advanceTimersByTime(LONG_PRESS_DELAY_MS)
  })
  fireEvent.pointerUp(element, touch)
  fireEvent.pointerLeave(element, touch)
  return emitClick ? fireEvent.click(element) : undefined
}

export function touchDrag(element: Element) {
  fireEvent.pointerDown(element, touch)
  fireEvent.pointerMove(element, { ...touch, clientY: 20 })
  fireEvent.pointerCancel(element, touch)
}
