import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@inmediam/ui'
import { Button } from '@inmediam/ui'
import { HelpCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default {
  title: 'Tooltip',
}

export const Primary = {
  args: {},
  render: () => {
    return (
      <div className="ml-20 mt-10">
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
              <TooltipArrow fill="white" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    )
  },
}

// O modo resolvido só existe no DOM do gatilho; mostrá-lo ao lado permite
// conferir a detecção num aparelho de toque.
const useTouchModeLabel = <T extends HTMLElement>() => {
  const ref = useRef<T>(null)
  const [mode, setMode] = useState<string | null>(null)

  // O Trigger resolve o modo nos próprios layout effects, depois deste
  // componente montar; observar o atributo acompanha cada mudança.
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const read = () => setMode(element.getAttribute('data-touch-mode'))
    read()
    const observer = new MutationObserver(read)
    observer.observe(element, {
      attributes: true,
      attributeFilter: ['data-touch-mode'],
    })
    return () => observer.disconnect()
  }, [])

  return [ref, mode ?? 'none'] as const
}

const PassiveTrigger = () => {
  const [ref, mode] = useTouchModeLabel<HTMLSpanElement>()

  return (
    <div className="flex items-center gap-3">
      <Tooltip>
        <TooltipTrigger asChild>
          <span ref={ref} className="flex items-center">
            <HelpCircle className="h-4 w-4 text-quinary" />
          </span>
        </TooltipTrigger>
        <TooltipContent>Tap to read the hint</TooltipContent>
      </Tooltip>
      <span className="text-xs text-tertiary">Help icon · {mode}</span>
    </div>
  )
}

const ActionTrigger = () => {
  const [ref, mode] = useTouchModeLabel<HTMLButtonElement>()
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center gap-3">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            onClick={() => setCount((value) => value + 1)}
          >
            Open document
          </Button>
        </TooltipTrigger>
        <TooltipContent>Hold to read the hint</TooltipContent>
      </Tooltip>
      <span className="text-xs text-tertiary">
        Clicked {count}× · {mode}
      </span>
    </div>
  )
}

const ClickableCardTrigger = () => {
  const [ref, mode] = useTouchModeLabel<HTMLSpanElement>()
  const [count, setCount] = useState(0)

  return (
    <div
      className="flex w-72 cursor-pointer flex-col gap-1 rounded-xl border border-secondary p-4"
      onClick={() => setCount((value) => value + 1)}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <span ref={ref} className="truncate text-sm text-primary">
            Rua das Flores, 123, apartamento 45, bloco B
          </span>
        </TooltipTrigger>
        <TooltipContent>
          Rua das Flores, 123, apartamento 45, bloco B
        </TooltipContent>
      </Tooltip>
      <span className="text-xs text-tertiary">
        Card opened {count}× · {mode}
      </span>
    </div>
  )
}

export const TouchModes = {
  args: {},
  render: () => (
    <TooltipProvider delayDuration={0} disableHoverableContent>
      <div className="m-10 flex flex-col gap-6">
        <PassiveTrigger />
        <ActionTrigger />
        <ClickableCardTrigger />
      </div>
    </TooltipProvider>
  ),
}

const OverriddenTrigger = () => {
  const [ref, mode] = useTouchModeLabel<HTMLSpanElement>()

  return (
    <div className="flex items-center gap-3">
      <Tooltip touchMode="long-press">
        <TooltipTrigger asChild>
          <span ref={ref} className="text-sm text-primary">
            Hold this text
          </span>
        </TooltipTrigger>
        <TooltipContent>Forced to long-press</TooltipContent>
      </Tooltip>
      <span className="text-xs text-tertiary">{mode}</span>
    </div>
  )
}

export const TouchModeOverride = {
  args: {},
  render: () => (
    <TooltipProvider delayDuration={0} disableHoverableContent>
      <div className="m-10">
        <OverriddenTrigger />
      </div>
    </TooltipProvider>
  ),
}
