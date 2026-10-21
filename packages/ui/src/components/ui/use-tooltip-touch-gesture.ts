import * as React from 'react'

import {
  CLICK_SUPPRESSION_WINDOW_MS,
  LONG_PRESS_DELAY_MS,
  type TooltipTouchMode,
  TOUCH_MOVE_TOLERANCE_PX,
} from './tooltip-touch-mode'

export interface TooltipTouchGestureHandlers {
  onPointerDown: React.PointerEventHandler
  onPointerMove: React.PointerEventHandler
  onPointerUp: React.PointerEventHandler
  onPointerCancel: React.PointerEventHandler
  onPointerLeave: React.PointerEventHandler
  onClickCapture: React.MouseEventHandler
  onContextMenu: React.MouseEventHandler
}

type Gesture = {
  startX: number
  startY: number
  wasOpen: boolean
  held: boolean
}

export function useTooltipTouchGesture({
  mode,
  open,
  setOpen,
}: {
  mode: TooltipTouchMode | null
  open: boolean
  setOpen: (open: boolean) => void
}): TooltipTouchGestureHandlers {
  const gestureRef = React.useRef<Gesture | null>(null)
  const holdTimerRef = React.useRef<ReturnType<typeof setTimeout>>(undefined)
  const suppressTimerRef =
    React.useRef<ReturnType<typeof setTimeout>>(undefined)
  const isSuppressingClickRef = React.useRef(false)

  const endGesture = React.useCallback(() => {
    clearTimeout(holdTimerRef.current)
    gestureRef.current = null
  }, [])

  const disarmClickSuppression = React.useCallback(() => {
    clearTimeout(suppressTimerRef.current)
    isSuppressingClickRef.current = false
  }, [])

  const armClickSuppression = React.useCallback(() => {
    disarmClickSuppression()
    isSuppressingClickRef.current = true
    suppressTimerRef.current = setTimeout(
      disarmClickSuppression,
      CLICK_SUPPRESSION_WINDOW_MS,
    )
  }, [disarmClickSuppression])

  React.useEffect(
    () => () => {
      endGesture()
      disarmClickSuppression()
    },
    [endGesture, disarmClickSuppression],
  )

  const isTouch = (event: React.PointerEvent) =>
    mode !== null && event.pointerType === 'touch'

  return {
    onPointerDown: (event) => {
      if (!isTouch(event)) return
      disarmClickSuppression()
      endGesture()
      // O Radix fecha a dica no próprio pointerdown do gatilho, então o estado
      // que decide o toggle precisa ser lido antes dele.
      gestureRef.current = {
        startX: event.clientX,
        startY: event.clientY,
        wasOpen: open,
        held: false,
      }
      holdTimerRef.current = setTimeout(() => {
        if (!gestureRef.current) return
        gestureRef.current.held = true
        if (mode === 'long-press') setOpen(true)
      }, LONG_PRESS_DELAY_MS)
    },
    onPointerMove: (event) => {
      const gesture = gestureRef.current
      // Depois que a dica abriu, mexer o dedo não pode cancelar o gesto: o
      // soltar seguinte ainda precisa ser absorvido.
      if (!isTouch(event) || !gesture || gesture.held) return
      const distance = Math.hypot(
        event.clientX - gesture.startX,
        event.clientY - gesture.startY,
      )
      if (distance > TOUCH_MOVE_TOLERANCE_PX) endGesture()
    },
    onPointerCancel: (event) => {
      if (isTouch(event)) endGesture()
    },
    // No tap, o toggle fica no pointerup, e não no click, porque o click não
    // dispara em botão desabilitado — justamente o caso em que a dica explica
    // o motivo.
    onPointerUp: (event) => {
      if (!isTouch(event)) return
      const gesture = gestureRef.current
      endGesture()
      if (!gesture) return

      if (mode === 'long-press') {
        // Toque rápido segue para a ação; só o soltar depois de segurar é
        // absorvido.
        if (gesture.held) armClickSuppression()
        return
      }

      // Segurar num gatilho passivo é seleção de texto nativa, não pedido de
      // dica.
      if (gesture.held) return
      setOpen(!gesture.wasOpen)
      armClickSuppression()
    },
    // O navegador dispara pointerleave logo depois de o dedo sair da tela, e
    // com `disableHoverableContent` o Radix fecharia a dica que acabou de abrir.
    onPointerLeave: (event) => {
      if (isTouch(event)) event.preventDefault()
    },
    // Captura porque o Slot do Radix executa o onClick do filho antes do
    // onClick do Trigger: na fase de bolha a ação já teria rodado.
    onClickCapture: (event) => {
      if (!isSuppressingClickRef.current) return
      disarmClickSuppression()
      event.preventDefault()
      event.stopPropagation()
    },
    // O Android abre o menu de contexto ao segurar; no tap ele continua
    // nativo para não atrapalhar a seleção de texto.
    onContextMenu: (event) => {
      if (mode !== 'long-press') return
      if (gestureRef.current || isSuppressingClickRef.current) {
        event.preventDefault()
      }
    },
  }
}

const COARSE_POINTER_QUERY = '(pointer: coarse)'

const subscribeToCoarsePointer = (onChange: () => void) => {
  const query = window.matchMedia(COARSE_POINTER_QUERY)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

export function usePrefersCoarsePointer() {
  return React.useSyncExternalStore(
    subscribeToCoarsePointer,
    () => window.matchMedia(COARSE_POINTER_QUERY).matches,
    () => false,
  )
}
