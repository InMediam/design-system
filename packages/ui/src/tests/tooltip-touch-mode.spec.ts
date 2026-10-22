import { describe, expect, it } from 'vitest'

import {
  hasInteractiveAncestor,
  resolveTouchMode,
} from '../components/ui/tooltip-touch-mode'

const base = {
  disabled: false,
  hasOwnAction: false,
  hasInteractiveAncestor: false,
}

describe('resolveTouchMode', () => {
  it('usa o override quando informado', () => {
    expect(
      resolveTouchMode({ ...base, hasOwnAction: true, override: 'tap' }),
    ).toBe('tap')
    expect(resolveTouchMode({ ...base, override: 'long-press' })).toBe(
      'long-press',
    )
  })

  it('usa long-press quando o gatilho tem ação própria', () => {
    expect(resolveTouchMode({ ...base, hasOwnAction: true })).toBe('long-press')
  })

  it('trata gatilho desabilitado como sem ação', () => {
    expect(
      resolveTouchMode({ ...base, hasOwnAction: true, disabled: true }),
    ).toBe('tap')
  })

  it('mantém long-press quando o ancestral é interativo, mesmo desabilitado', () => {
    expect(
      resolveTouchMode({
        ...base,
        disabled: true,
        hasInteractiveAncestor: true,
      }),
    ).toBe('long-press')
  })

  it('usa tap quando nada indica ação', () => {
    expect(resolveTouchMode(base)).toBe('tap')
  })
})

describe('hasInteractiveAncestor', () => {
  const mount = (html: string) => {
    document.body.innerHTML = html
    return document.querySelector<HTMLElement>('[data-testid="trigger"]')!
  }
  const trigger = '<span data-testid="trigger"></span>'

  it.each([
    [`<a href="/x">${trigger}</a>`, true],
    [`<a>${trigger}</a>`, false],
    [`<button>${trigger}</button>`, true],
    [`<div role="button">${trigger}</div>`, true],
    [`<div role="link">${trigger}</div>`, true],
    [`<label><input type="checkbox">${trigger}</label>`, true],
    [
      `<label for="r">${trigger}</label><button id="r" role="radio"></button>`,
      true,
    ],
    [`<label for="nome">${trigger}</label><input id="nome">`, false],
    ['<button data-testid="trigger"></button>', false],
    [`<div>${trigger}</div>`, false],
  ])('%s → %s', (html, expected) => {
    expect(hasInteractiveAncestor(mount(html))).toBe(expected)
  })
})
