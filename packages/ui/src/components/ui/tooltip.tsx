import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'

import { cn } from '../../lib/utils'
import {
  hasInteractiveAncestor,
  isEnabledInteractiveElement,
  resolveTouchMode,
  type TooltipTouchMode,
} from './tooltip-touch-mode'
import {
  usePrefersCoarsePointer,
  useTooltipTouchGesture,
} from './use-tooltip-touch-gesture'

export type { TooltipTouchMode } from './tooltip-touch-mode'

// No toque, o DismissableLayer do Radix só fecha a dica de fora no click, e o
// click absorvido pelo gatilho não chega ao document. Este evento garante uma
// dica aberta por vez quando a abertura vem do toque.
const TOUCH_OPEN_EVENT = 'inmediam-ui:tooltip-touch-open'

type TooltipTouchContextValue = {
  open: boolean
  setTouchOpen: (open: boolean) => void
  touchEnabled: boolean
  touchModeOverride?: TooltipTouchMode
  setHasContent: (hasContent: boolean) => void
}

const TooltipTouchContext =
  React.createContext<TooltipTouchContextValue | null>(null)

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = ({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  touchMode,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root> & {
  touchMode?: TooltipTouchMode
}) => {
  const id = React.useId()
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)
  const [hasContent, setHasContent] = React.useState(false)
  const isControlled = openProp !== undefined
  const open = isControlled ? openProp : uncontrolledOpen

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next)
      onOpenChange?.(next)
    },
    [isControlled, onOpenChange],
  )

  const setTouchOpen = React.useCallback(
    (next: boolean) => {
      if (next) {
        document.dispatchEvent(
          new CustomEvent(TOUCH_OPEN_EVENT, { detail: id }),
        )
      }
      setOpen(next)
    },
    [id, setOpen],
  )

  React.useEffect(() => {
    if (!open) return
    const handleTouchOpen = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== id) setOpen(false)
    }
    document.addEventListener(TOUCH_OPEN_EVENT, handleTouchOpen)
    return () => document.removeEventListener(TOUCH_OPEN_EVENT, handleTouchOpen)
  }, [open, id, setOpen])

  // Sem dica a mostrar — consumidor forçando `open={false}`, conteúdo ausente
  // ou escondido — o gatilho não pode interceptar nada: é o caso do composer
  // do chat com o chamado aberto.
  const touchEnabled =
    hasContent && (!isControlled || onOpenChange !== undefined)

  const context = React.useMemo(
    () => ({
      open,
      setTouchOpen,
      touchEnabled,
      touchModeOverride: touchMode,
      setHasContent,
    }),
    [open, setTouchOpen, touchEnabled, touchMode],
  )

  return (
    <TooltipTouchContext.Provider value={context}>
      <TooltipPrimitive.Root open={open} onOpenChange={setOpen} {...props} />
    </TooltipTouchContext.Provider>
  )
}
Tooltip.displayName = TooltipPrimitive.Root.displayName

// Inline, e não classe Tailwind: os consumidores geram as classes do
// design-system a partir do `dist`, e `-webkit-touch-callout` não tem
// utilitário. Sem isso, segurar abre a seleção de texto ou a prévia de link do
// iOS por cima da dica.
const LONG_PRESS_STYLE: React.CSSProperties = {
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  userSelect: 'none',
}

const composeHandlers =
  <E,>(theirs: ((event: E) => void) | undefined, ours: (event: E) => void) =>
  (event: E) => {
    theirs?.(event)
    ours(event)
  }

const TooltipTrigger = ({
  ref,
  asChild,
  children,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
  onPointerLeave,
  onClickCapture,
  onContextMenu,
  onFocus,
  style,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) => {
  const context = React.useContext(TooltipTouchContext)
  const prefersCoarsePointer = usePrefersCoarsePointer()
  const elementRef = React.useRef<HTMLButtonElement | null>(null)
  const [interactiveAncestor, setInteractiveAncestor] = React.useState(false)
  const [interactiveSelf, setInteractiveSelf] = React.useState(false)

  // O DOM é quem diz se o elemento renderizado e os ancestrais têm ação
  // (Switch, submit, triggers aninhados do Radix não passam `onClick`), e isso
  // muda junto com o filho e com `disabled`.
  React.useLayoutEffect(() => {
    const element = elementRef.current
    if (!element) return
    setInteractiveAncestor(hasInteractiveAncestor(element))
    // Sem `asChild`, o elemento é o `<button>` gerado pelo próprio Trigger.
    setInteractiveSelf(Boolean(asChild) && isEnabledInteractiveElement(element))
  }, [asChild, children, props.disabled])

  const mergedRef = React.useCallback(
    (node: HTMLButtonElement | null) => {
      elementRef.current = node
      if (typeof ref === 'function') ref(node)
      else if (ref) ref.current = node
    },
    [ref],
  )

  const childProps: Record<string, unknown> =
    asChild && React.isValidElement<Record<string, unknown>>(children)
      ? children.props
      : {}
  const disabled = Boolean(props.disabled ?? childProps.disabled)
  const hasOwnAction = Boolean(
    props.onClick ?? childProps.onClick ?? childProps.href ?? childProps.to,
  )

  const mode = context?.touchEnabled
    ? resolveTouchMode({
        override: context.touchModeOverride,
        disabled,
        hasOwnAction: hasOwnAction || interactiveSelf,
        hasInteractiveAncestor: interactiveAncestor,
      })
    : null

  // Só com ponteiro grosso, para o desktop continuar idêntico.
  const triggerStyle =
    mode === 'long-press' && prefersCoarsePointer
      ? { ...LONG_PRESS_STYLE, ...style }
      : style

  const gesture = useTooltipTouchGesture({
    mode,
    open: context?.open ?? false,
    setOpen: context?.setTouchOpen ?? (() => {}),
  })

  return (
    <TooltipPrimitive.Trigger
      ref={mergedRef}
      asChild={asChild}
      data-touch-mode={mode ?? undefined}
      style={triggerStyle}
      {...props}
      onPointerDown={composeHandlers(onPointerDown, gesture.onPointerDown)}
      onPointerMove={composeHandlers(onPointerMove, gesture.onPointerMove)}
      onPointerUp={composeHandlers(onPointerUp, gesture.onPointerUp)}
      onPointerCancel={composeHandlers(
        onPointerCancel,
        gesture.onPointerCancel,
      )}
      onPointerLeave={composeHandlers(onPointerLeave, gesture.onPointerLeave)}
      onClickCapture={composeHandlers(onClickCapture, gesture.onClickCapture)}
      onContextMenu={composeHandlers(onContextMenu, gesture.onContextMenu)}
      onFocus={composeHandlers(onFocus, gesture.onFocus)}
    >
      {children}
    </TooltipPrimitive.Trigger>
  )
}
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName

const TooltipArrow = ({
  className,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.TooltipArrow>) => (
  <TooltipPrimitive.TooltipArrow
    className={cn('fill-overlay fill-fg-primary', className)}
    {...props}
  />
)
TooltipArrow.displayName = TooltipPrimitive.TooltipArrow.displayName

const TooltipContent = ({
  className,
  sideOffset = 4,
  hidden,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) => {
  const setHasContent = React.useContext(TooltipTouchContext)?.setHasContent

  React.useLayoutEffect(() => {
    if (!setHasContent) return
    setHasContent(!hidden)
    return () => setHasContent(false)
  }, [hidden, setHasContent])

  return (
    <TooltipPrimitive.Content
      sideOffset={sideOffset}
      hidden={hidden}
      className={cn(
        'z-50 overflow-hidden rounded-md border-none text-background',
        'bg-foreground px-3 py-1.5 text-xs shadow-md animate-in fade-in-0',
        'zoom-in-95 data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  )
}
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
}
