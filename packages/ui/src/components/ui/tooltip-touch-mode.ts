export type TooltipTouchMode = 'tap' | 'long-press'

export const LONG_PRESS_DELAY_MS = 500

export const TOUCH_MOVE_TOLERANCE_PX = 10

// O iOS às vezes não emite o click depois de segurar; sem prazo, a supressão
// armada engoliria o próximo clique legítimo (ex.: Enter no teclado).
export const CLICK_SUPPRESSION_WINDOW_MS = 400

const INTERACTIVE_ANCESTOR_SELECTOR = [
  'a[href]',
  'button',
  'summary',
  '[role="button"]',
  '[role="link"]',
  '[role="menuitem"]',
  '[role="menuitemradio"]',
  '[role="menuitemcheckbox"]',
  '[role="option"]',
  '[role="tab"]',
  '[role="radio"]',
  '[role="checkbox"]',
  '[role="switch"]',
].join(', ')

const SELECTION_CONTROL_SELECTOR = [
  'input[type="radio"]',
  'input[type="checkbox"]',
  '[role="radio"]',
  '[role="checkbox"]',
].join(', ')

// Só um label de radio/checkbox conta como ação: um label que aponta para um
// campo de texto apenas foca o campo, e esse toque deve ficar com a dica.
const isSelectionLabel = (label: HTMLLabelElement) =>
  label.control?.matches(SELECTION_CONTROL_SELECTOR) ?? false

// A busca começa no pai porque o `TooltipTrigger` sem `asChild` renderiza um
// `<button>` próprio, que não indica ação nenhuma.
export function hasInteractiveAncestor(element: HTMLElement) {
  const parent = element.parentElement
  if (!parent) return false

  if (parent.closest(INTERACTIVE_ANCESTOR_SELECTOR)) return true

  const label = parent.closest('label')
  return label ? isSelectionLabel(label) : false
}

export function resolveTouchMode({
  override,
  disabled,
  hasOwnAction,
  hasInteractiveAncestor,
}: {
  override?: TooltipTouchMode
  disabled: boolean
  hasOwnAction: boolean
  hasInteractiveAncestor: boolean
}): TooltipTouchMode {
  if (override) return override

  // Na dúvida, segurar: errar para esse lado só esconde a dica, enquanto
  // errar para o outro faz o toque abrir a dica e disparar a ação.
  const hasAction = (!disabled && hasOwnAction) || hasInteractiveAncestor
  return hasAction ? 'long-press' : 'tap'
}
