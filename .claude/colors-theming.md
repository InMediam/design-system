# Proposta de Migração: Sistema de Cores para Dark Theming

## Sumário Executivo

Este documento apresenta uma proposta de migração do sistema de cores primitivas para **tokens semânticos**, permitindo suporte adequado a dark theming seguindo as convenções do shadcn/ui.

Os tokens foram **importados diretamente da collection "Colors" do Figma (InMediam Design System)**, com modos `Light mode` e `Dark mode`. Esta é a fonte de verdade — qualquer alteração futura deve partir do Figma.

### Problema Atual
- Uso extensivo de cores primitivas com escalas numéricas (`--gray-500`, `--brand-600`, etc.)
- Se mantivéssemos escalas com valores invertidos no dark mode, a semântica seria perdida:
  - Light: `--gray-50` = claro, `--gray-900` = escuro
  - Dark: `--gray-50` = escuro, `--gray-900` = claro (invertido - **ERRADO**)
- Uso de prefixos `dark:` em vez de tokens que mudam automaticamente
- Inconsistência entre projetos

### Solução Proposta
1. Adotar os **tokens semânticos** definidos em Figma (`Text`, `Foreground`, `Background`, `Border`)
2. Cada token tem valor diferente em `:root` e `.dark`, eliminando prefixos `dark:`
3. A escala numérica (50, 100, 500...) permanece igual em ambos os temas a nível de primitivas
4. O que muda é o **valor HSL** que cada token semântico recebe

---

## 1. Análise de Uso Atual

### 1.1 Estatísticas por Projeto

| Projeto | gray-* | brand-* | error-* | warning-* | success-* | Primitivas diretas |
|---------|--------|---------|---------|-----------|-----------|-------------------|
| design-system | 28 | 22 | 4 | 3 | 3 | 0 |
| inmediam_front | ~2659 | ~199 | ~49 | ~18 | ~47 | 14 (red, orange) |
| inmediam_clientes | 844 | 33 | 10 | 3 | 24 | 6 (red, orange) |
| vistoriador | ~975 | ~100 | 0 | 0 | 0 | 62 (red, yellow, green, blue, amber, indigo) |
| **TOTAL** | ~4506 | ~354 | ~63 | ~24 | ~74 | 82 |

### 1.2 Prefixos `dark:` a Remover

| Padrão | Ocorrências Estimadas |
|--------|----------------------|
| `dark:text-gray-*` | ~1300 |
| `dark:bg-gray-*` | ~180 |
| `dark:border-gray-*` | ~310 |
| `dark:hover:*-gray-*` | ~25 |
| `dark:*-brand-*` | ~50 |
| `dark:*-error/red-*` | ~20 |
| `dark:*-warning/orange-*` | ~5 |
| `dark:*-success/green-*` | ~10 |
| **TOTAL** | **~1960** |

---

## 2. Análise Semântica por Cor

### 2.1 Gray - Análise de Uso

| Tonalidade | Uso Background | Uso Border | Uso Text/Icon |
|------------|----------------|------------|---------------|
| **gray-25** | Ultra-sutil (brand-adjacent) | - | - |
| **gray-50** | Page backgrounds, table headers, disabled states, badge hover | - | - |
| **gray-100** | Hover states, icon backgrounds, avatar backgrounds, inactive states | Timeline borders | Dark mode carousel text |
| **gray-200** | Separators, progress tracks, skeleton | Table/card borders, input hover, badge borders, dividers | Dark mode input text |
| **gray-300** | Carousel dots inactive, stepper inactive | Checkbox/radio borders, hover borders, dashed borders | Tooltip muted text, dark mode labels |
| **gray-400** | Dot indicators secondary | Focus borders | Icons, disabled text, action icons |
| **gray-500** | Dot neutral, disabled radio checked | Dark mode toggle borders | Placeholder text, menu icons, muted labels, metadata |
| **gray-600** | Carousel hover | Dark mode focus/tab borders | Table headers, body text, descriptions, menu text |
| **gray-700** | Dark mode cards, summary bars | Dark mode primary borders (muito comum) | Label text, button tertiary, badge text |
| **gray-800** | Dark mode cards, dark mode icons | Dark mode layout borders, dark mode focus rings | - |
| **gray-900** | Carousel active dots, chart labels, avatar fallback | - | Primary headings, names, titles, form values |
| **gray-950** | Tooltip backgrounds (inverted) | - | Emphasized user names |

### 2.2 Brand (Yellow) - Análise de Uso

| Tonalidade | Uso Background | Uso Border | Uso Text/Icon |
|------------|----------------|------------|---------------|
| **brand-25** | Selected row, menu hover, gradient start, list selected | - | - |
| **brand-50** | Badge default, tertiary button, checkbox card selected, radio selected, icon wrappers | Selected state borders | - |
| **brand-100** | Badge hover, icon containers, radio selected, confirmation dialogs | Selector checked borders | - |
| **brand-200** | - | Badge borders, hover borders | - |
| **brand-400** | **Primary button default**, avatar fallback, day selector | - | Icon hover (stars) |
| **brand-500** | Navigation indicators, progress bars, stepper, status dots | Tertiary button, checkbox selected, toggle selected, chart strokes | Loader spinners |
| **brand-600** | Checkbox/radio/switch checked, progress, slider, notification badges | Slider thumb, chart strokes | Required asterisk, detail icons, helper icons |
| **brand-700** | - | - | Badge text, tertiary buttons, encargo info, card titles |
| **brand-800** | - | - | Logo buttons, hover links, info headers |
| **brand-900** | - | - | Selected item labels, radio selected text, toggle selected text |

### 2.3 Error (Red) - Análise de Uso

| Tonalidade | Uso Background | Uso Border | Uso Text/Icon |
|------------|----------------|------------|---------------|
| **error-50** | Badge destructive, hover delete actions | - | - |
| **error-100** | Confirmation dialog icons, destructive dialog wrappers | - | - |
| **error-200** | - | Badge destructive borders | - |
| **error-500** | Inactive status dots, badge dot destructive, auth failed | Form input error, ring focus error | Wifi off icon |
| **error-600** | Discount/encargo bars | - | Hint text (form errors), destructive button, dialog icons, discount values |
| **error-700** | - | - | Badge destructive text, dropdown delete, cancel actions, discount labels |

### 2.4 Warning (Orange) - Análise de Uso

| Tonalidade | Uso Background | Uso Border | Uso Text/Icon |
|------------|----------------|------------|---------------|
| **warning-25** | Alert card backgrounds, contestacao cards | - | - |
| **warning-50** | Badge warning, alert icon inner, button hover | Contestacao icon wrapper | - |
| **warning-100** | Badge hover, confirmation dialog icons | - | - |
| **warning-200** | - | Badge warning, alert outer, contestacao card | - |
| **warning-300** | - | Alert icon inner, contestacao button | - |
| **warning-500** | Badge dot warning, status indicators, cancellation requested | Button warning default | - |
| **warning-600** | Status step pending | Button warning hover | Alert icons, contestacao icons |
| **warning-700** | - | - | Badge warning text, contestacao button text |

### 2.5 Success (Emerald) - Análise de Uso

| Tonalidade | Uso Background | Uso Border | Uso Text/Icon |
|------------|----------------|------------|---------------|
| **success-25** | Alert card success | - | - |
| **success-50** | Badge success | - | - |
| **success-100** | Badge hover | - | - |
| **success-200** | - | Badge success, alert outer | - |
| **success-300** | - | Alert icon inner | - |
| **success-500** | Badge dot success, active status, auth success, button success | - | - |
| **success-600** | Completed steps, progress, check icons, seguradora active | Step borders, timeline | Alert icons, email success, positive values, check icons |
| **success-700** | - | - | Badge success text, expense labels, encargo values, discount text |

---

## 3. Tokens Semânticos (Importados de Figma)

Os tokens abaixo foram exportados da collection **Colors** no Figma — modos `Light mode` e `Dark mode`. Os valores estão em formato HSL (`H S% L%`), prontos para uso com `hsl(var(--token))`.

### Convenções de nomenclatura
- Underscores do Figma (`_hover`, `_alt`, `_solid`, `_on-brand`, `_subtle`) foram convertidos para hifens.
- Anotações de escala primitiva entre parênteses (ex: `(900)`) foram removidas — tokens semânticos não devem expor a escala primitiva ao consumidor.
- Sufixos com `*` no Figma (`text-primary_solid*`, `text-quinary (400)*`) indicam tokens que **não invertem no dark mode** (mantêm o valor light em ambos os temas).

### 3.1 Text

```css
:root {
  /* Hierarquia neutra */
  --text-primary: 0 0% 9%;                     /* gray-900 */
  --text-primary-on-brand: 0 0% 100%;          /* white — sobre fundos brand-solid */
  --text-primary-solid: 0 0% 9%;               /* fixo (não inverte) */
  --text-secondary: 0 0% 25.1%;                /* gray-700 */
  --text-secondary-hover: 0 0% 14.9%;          /* gray-800 */
  --text-secondary-on-brand: 52.8 98.3% 76.9%; /* yellow-200 */
  --text-tertiary: 0 0% 32.2%;                 /* gray-600 */
  --text-tertiary-hover: 0 0% 25.1%;           /* gray-700 */
  --text-tertiary-on-brand: 52.8 98.3% 76.9%;
  --text-quaternary: 0 0% 45.1%;               /* gray-500 */
  --text-quaternary-on-brand: 50.4 97.8% 63.5%;
  --text-quinary: 0 0% 63.9%;                  /* gray-400 — fixo */
  --text-placeholder: 0 0% 45.1%;
  --text-white: 0 0% 100%;

  /* Brand */
  --text-brand-primary: 28.4 72.5% 25.7%;      /* yellow-900 */
  --text-brand-secondary: 35.5 91.7% 32.9%;    /* yellow-700 */
  --text-brand-secondary-hover: 31.8 81% 28.8%;
  --text-brand-tertiary: 40.6 96.1% 40.4%;     /* yellow-600 */
  --text-brand-tertiary-alt: 40.6 96.1% 40.4%;

  /* Status */
  --text-error-primary: 0 72.2% 50.6%;         /* red-600 */
  --text-error-primary-hover: 0 73.7% 41.8%;   /* red-700 */
  --text-warning-primary: 20.5 90.2% 48.2%;    /* orange-600 */
  --text-success-primary: 142.1 76.2% 36.3%;   /* green-600 */
}

.dark {
  --text-primary: 0 0% 98%;
  --text-primary-on-brand: 0 0% 98%;
  --text-primary-solid: 0 0% 9%;               /* mantém: alguns contextos exigem texto escuro mesmo no dark */
  --text-secondary: 0 0% 83.1%;
  --text-secondary-hover: 0 0% 89.8%;
  --text-secondary-on-brand: 0 0% 83.1%;
  --text-tertiary: 0 0% 63.9%;
  --text-tertiary-hover: 0 0% 83.1%;
  --text-tertiary-on-brand: 0 0% 63.9%;
  --text-quaternary: 0 0% 63.9%;
  --text-quaternary-on-brand: 0 0% 63.9%;
  --text-quinary: 0 0% 63.9%;
  --text-placeholder: 0 0% 45.1%;
  --text-white: 0 0% 100%;

  --text-brand-primary: 0 0% 98%;
  --text-brand-secondary: 0 0% 83.1%;
  --text-brand-secondary-hover: 0 0% 89.8%;
  --text-brand-tertiary: 0 0% 63.9%;
  --text-brand-tertiary-alt: 0 0% 98%;

  --text-error-primary: 0 90.6% 70.8%;
  --text-error-primary-hover: 0 93.5% 81.8%;
  --text-warning-primary: 27 96% 61%;
  --text-success-primary: 141.9 69.2% 58%;
}
```

### 3.2 Foreground (icones, controles, glifos)

```css
:root {
  /* Hierarquia neutra */
  --fg-primary: 0 0% 9%;                       /* gray-900 */
  --fg-primary-solid: 0 0% 9%;                 /* fixo */
  --fg-secondary: 0 0% 25.1%;                  /* gray-700 */
  --fg-secondary-hover: 0 0% 14.9%;
  --fg-secondary-solid: 0 0% 25.1%;            /* fixo */
  --fg-tertiary: 0 0% 32.2%;
  --fg-tertiary-hover: 0 0% 25.1%;
  --fg-quaternary: 0 0% 63.9%;                 /* gray-400 */
  --fg-quaternary-hover: 0 0% 45.1%;
  --fg-white: 0 0% 100%;

  /* Brand */
  --fg-brand-primary: 40.6 96.1% 40.4%;        /* yellow-600 */
  --fg-brand-primary-alt: 40.6 96.1% 40.4%;
  --fg-brand-secondary: 45.4 93.4% 47.5%;      /* yellow-500 */
  --fg-brand-secondary-alt: 45.4 93.4% 47.5%;
  --fg-brand-secondary-hover: 40.6 96.1% 40.4%;

  /* Status */
  --fg-error-primary: 0 72.2% 50.6%;           /* red-600 */
  --fg-error-secondary: 0 84.2% 60.2%;         /* red-500 */
  --fg-warning-primary: 20.5 90.2% 48.2%;      /* orange-600 */
  --fg-warning-secondary: 24.6 95% 53.1%;      /* orange-500 */
  --fg-success-primary: 142.1 76.2% 36.3%;     /* green-600 */
  --fg-success-secondary: 142.1 70.6% 45.3%;   /* green-500 */
}

.dark {
  --fg-primary: 0 0% 100%;
  --fg-primary-solid: 0 0% 9%;
  --fg-secondary: 0 0% 83.1%;
  --fg-secondary-hover: 0 0% 89.8%;
  --fg-secondary-solid: 0 0% 25.1%;
  --fg-tertiary: 0 0% 63.9%;
  --fg-tertiary-hover: 0 0% 83.1%;
  --fg-quaternary: 0 0% 45.1%;
  --fg-quaternary-hover: 0 0% 63.9%;
  --fg-white: 0 0% 100%;

  --fg-brand-primary: 45.4 93.4% 47.5%;
  --fg-brand-primary-alt: 0 0% 83.1%;
  --fg-brand-secondary: 45.4 93.4% 47.5%;
  --fg-brand-secondary-alt: 0 0% 32.2%;
  --fg-brand-secondary-hover: 0 0% 45.1%;

  --fg-error-primary: 0 84.2% 60.2%;
  --fg-error-secondary: 0 90.6% 70.8%;
  --fg-warning-primary: 24.6 95% 53.1%;
  --fg-warning-secondary: 27 96% 61%;
  --fg-success-primary: 142.1 70.6% 45.3%;
  --fg-success-secondary: 141.9 69.2% 58%;
}
```

### 3.3 Background

```css
:root {
  /* Hierarquia neutra */
  --bg-primary: 0 0% 100%;                     /* white */
  --bg-primary-alt: 0 0% 100%;
  --bg-primary-hover: 0 0% 98%;                /* gray-50 */
  --bg-primary-solid: 0 0% 3.9%;               /* gray-950 — usado em tooltips/overlays invertidos */
  --bg-secondary: 0 0% 98%;
  --bg-secondary-alt: 0 0% 98%;
  --bg-secondary-hover: 0 0% 96.1%;            /* gray-100 */
  --bg-secondary-solid: 0 0% 32.2%;            /* gray-600 — fixo */
  --bg-tertiary: 0 0% 96.1%;                   /* gray-100 */
  --bg-quaternary: 0 0% 89.8%;                 /* gray-200 */
  --bg-overlay: 0 0% 3.9%;                     /* gray-950 */

  /* Brand */
  --bg-brand-primary: 54.5 91.7% 95.3%;        /* yellow-50 */
  --bg-brand-primary-alt: 54.5 91.7% 95.3%;
  --bg-brand-secondary: 54.9 96.7% 88%;        /* yellow-100 */
  --bg-brand-tertiary-solid: 47.9 95.8% 53.1%; /* yellow-400 — fixo */
  --bg-brand-quaterary-solid: 45.4 93.4% 47.5%;/* yellow-500 — fixo */
  --bg-brand-solid: 40.6 96.1% 40.4%;          /* yellow-600 — botão primary */
  --bg-brand-solid-hover: 35.5 91.7% 32.9%;
  --bg-brand-section: 31.8 81% 28.8%;
  --bg-brand-section-subtle: 35.5 91.7% 32.9%;

  /* Status */
  --bg-error-primary: 0 85.7% 97.3%;           /* red-50 */
  --bg-error-secondary: 0 93.3% 94.1%;         /* red-100 */
  --bg-error-solid: 0 72.2% 50.6%;             /* red-600 — fixo */
  --bg-error-solid-hover: 0 73.7% 41.8%;
  --bg-warning-primary: 33.3 100% 96.5%;       /* orange-50 */
  --bg-warning-secondary: 34.3 100% 91.8%;     /* orange-100 */
  --bg-warning-solid: 20.5 90.2% 48.2%;        /* orange-600 — fixo */
  --bg-success-primary: 138.5 76.5% 96.7%;     /* green-50 */
  --bg-success-secondary: 140.6 84.2% 92.5%;   /* green-100 */
  --bg-success-solid: 142.1 76.2% 36.3%;       /* green-600 — fixo */
}

.dark {
  --bg-primary: 0 0% 3.9%;
  --bg-primary-alt: 0 0% 9%;
  --bg-primary-hover: 0 0% 9%;
  --bg-primary-solid: 0 0% 14.9%;
  --bg-secondary: 0 0% 9%;
  --bg-secondary-alt: 0 0% 3.9%;
  --bg-secondary-hover: 0 0% 14.9%;
  --bg-secondary-solid: 0 0% 32.2%;
  --bg-tertiary: 0 0% 14.9%;
  --bg-quaternary: 0 0% 25.1%;
  --bg-overlay: 0 0% 14.9%;

  --bg-brand-primary: 45.4 93.4% 47.5%;
  --bg-brand-primary-alt: 0 0% 9%;
  --bg-brand-secondary: 0 0% 14.9%;
  --bg-brand-tertiary-solid: 47.9 95.8% 53.1%;
  --bg-brand-quaterary-solid: 45.4 93.4% 47.5%;
  --bg-brand-solid: 40.6 96.1% 40.4%;
  --bg-brand-solid-hover: 45.4 93.4% 47.5%;
  --bg-brand-section: 0 0% 9%;
  --bg-brand-section-subtle: 0 0% 3.9%;

  --bg-error-primary: 0 74.7% 15.5%;
  --bg-error-secondary: 0 72.2% 50.6%;
  --bg-error-solid: 0 72.2% 50.6%;
  --bg-error-solid-hover: 0 84.2% 60.2%;
  --bg-warning-primary: 0 74.7% 15.5%;
  --bg-warning-secondary: 20.5 90.2% 48.2%;
  --bg-warning-solid: 20.5 90.2% 48.2%;
  --bg-success-primary: 144.9 80.4% 10%;
  --bg-success-secondary: 142.1 76.2% 36.3%;
  --bg-success-solid: 142.1 76.2% 36.3%;
}
```

### 3.4 Border

```css
:root {
  --border-primary: 0 0% 83.1%;                /* gray-300 */
  --border-secondary: 0 0% 89.8%;              /* gray-200 */
  --border-secondary-alt: 0 0% 0% / 0.1;       /* black @ 10% — usar com hsl(var(--border-secondary-alt)) */
  --border-tertiary: 0 0% 96.1%;               /* gray-100 */

  --border-brand: 45.4 93.4% 47.5%;            /* yellow-500 */
  --border-brand-alt: 40.6 96.1% 40.4%;        /* yellow-600 */

  --border-error: 0 84.2% 60.2%;               /* red-500 */
  --border-error-subtle: 0 93.5% 81.8%;        /* red-300 */
}

.dark {
  --border-primary: 0 0% 25.1%;
  --border-secondary: 0 0% 14.9%;
  --border-secondary-alt: 0 0% 14.9%;
  --border-tertiary: 0 0% 14.9%;

  --border-brand: 47.9 95.8% 53.1%;
  --border-brand-alt: 0 0% 25.1%;

  --border-error: 0 90.6% 70.8%;
  --border-error-subtle: 0 84.2% 60.2%;
}
```

### 3.5 Aliases shadcn (Compatibilidade)

Para manter compatibilidade com componentes shadcn existentes, criamos aliases que apontam para os tokens semânticos importados de Figma:

```css
:root {
  /* Background base + texto base */
  --background: var(--bg-primary);
  --foreground: var(--text-primary);

  /* Card */
  --card: var(--bg-primary);
  --card-foreground: var(--text-primary);

  /* Popover */
  --popover: var(--bg-primary);
  --popover-foreground: var(--text-primary);

  /* Primary = Brand sólido (yellow-600) */
  --primary: var(--bg-brand-solid);
  --primary-foreground: var(--text-primary-on-brand);

  /* Secondary = Hierarquia neutra secundária */
  --secondary: var(--bg-secondary);
  --secondary-foreground: var(--text-secondary);

  /* Muted = Backgrounds suaves */
  --muted: var(--bg-tertiary);
  --muted-foreground: var(--text-tertiary);

  /* Accent = Hover states */
  --accent: var(--bg-secondary-hover);
  --accent-foreground: var(--text-primary);

  /* Destructive = Error sólido (red-600) */
  --destructive: var(--bg-error-solid);
  --destructive-foreground: var(--text-white);

  /* Bordas e ring */
  --border: var(--border-secondary);
  --input: var(--border-primary);
  --ring: var(--border-brand);
}

.dark {
  /* Os aliases herdam automaticamente os valores dark dos tokens originais.
     Nenhuma sobrescrita adicional é necessária. */
}
```

**Mapeamento:**

| Alias shadcn | Token Figma | Cor base (light) |
|--------------|-------------|------------------|
| `--background` | `--bg-primary` | white |
| `--foreground` | `--text-primary` | gray-900 |
| `--card` | `--bg-primary` | white |
| `--popover` | `--bg-primary` | white |
| `--primary` | `--bg-brand-solid` | yellow-600 |
| `--primary-foreground` | `--text-primary-on-brand` | white |
| `--secondary` | `--bg-secondary` | gray-50 |
| `--secondary-foreground` | `--text-secondary` | gray-700 |
| `--muted` | `--bg-tertiary` | gray-100 |
| `--muted-foreground` | `--text-tertiary` | gray-600 |
| `--accent` | `--bg-secondary-hover` | gray-100 |
| `--accent-foreground` | `--text-primary` | gray-900 |
| `--destructive` | `--bg-error-solid` | red-600 |
| `--destructive-foreground` | `--text-white` | white |
| `--border` | `--border-secondary` | gray-200 |
| `--input` | `--border-primary` | gray-300 |
| `--ring` | `--border-brand` | yellow-500 |

---

## 4. Estratégia de Migração Incremental

### 4.1 Remoção dos tokens primitivos

O uso dos tokens primitivos será removido. Todas as cores primitivas utilizadas devem ser substituídas pelos tokens semânticos importados de Figma.

### 4.2 Ordem de Migração Recomendada

```
1. Design System (global.css + tailwind.config.js)
   ↓
2. Design System Components (16 componentes)
   ↓
3. Projetos (inmediam_front, inmediam_clientes, vistoriador)
   ↓
4. Remover tokens primitivos antigos
   ↓
5. Validação final e cleanup
```

### 4.3 Migração por Tipo de Token

**Recomendado: Por categoria de token**

1. **Primeira passada:** Migrar todos os `gray-*` para tokens `text-*`, `fg-*`, `bg-*` ou `border-*` neutros
2. **Segunda passada:** Migrar `brand-*` para tokens brand
3. **Terceira passada:** Migrar `error-*`, `warning-*`, `success-*`
4. **Quarta passada:** Migrar primitivas diretas (`red-*`, `blue-*`, etc.)
5. **Quinta passada:** Remover todos os `dark:*` de cores

Isso permite validar incrementalmente e reverter se necessário.

### 4.4 Ferramentas de Migração

```bash
# Encontrar todas as ocorrências de gray-* em arquivos TSX/TS
rg "(text|bg|border|ring|fill)-gray-\d+" --type tsx --type ts -l

# Verificar prefixos dark: restantes
rg "dark:(text|bg|border|ring)-" --type tsx --type ts -c
```

---

## 4.5 Regras de Migração por Primitiva

Tabelas de substituição **validadas por HSL** contra a collection `Colors` do Figma. Para cada classe Tailwind primitiva, há uma classe semântica equivalente por contexto (text, foreground, background, border).

> Quando uma primitiva mapeia para múltiplos tokens semânticos, a coluna **"Quando usar"** indica o contexto de uso baseado na análise da seção 2.

### 4.5.1 Gray (neutros)

| Primitiva | Contexto | → Semântico | Quando usar |
|-----------|----------|-------------|-------------|
| `text-gray-400` | text | `text-quinary` | Texto desativado, ícones decorativos |
| `text-gray-400` | icon (svg/glyph) | `text-fg-quaternary` | Ícones em estado padrão |
| `text-gray-500` | text | `text-quaternary` | Labels muted, metadata |
| `text-gray-500` | placeholder | `text-placeholder` | Placeholder de inputs |
| `text-gray-500` | icon | `text-fg-quaternary-hover` | Ícones em hover |
| `text-gray-600` | text | `text-tertiary` | Body text, descrições, table headers |
| `text-gray-600` | icon | `text-fg-tertiary` | Ícones secundários |
| `text-gray-700` | text | `text-secondary` | Labels, button tertiary, badge text |
| `text-gray-700` | text hover | `text-tertiary-hover` | Hover de texto tertiary |
| `text-gray-700` | icon | `text-fg-secondary` ou `text-fg-secondary-solid` | Ícones primários (use `-solid` para nunca inverter) |
| `text-gray-700` | icon hover | `text-fg-tertiary-hover` | Hover de ícone tertiary |
| `text-gray-800` | text | `text-secondary-hover` | Hover de texto secondary |
| `text-gray-800` | icon | `text-fg-secondary-hover` | Hover de ícone secondary |
| `text-gray-900` | text | `text-primary` | Headings, names, titles, form values |
| `text-gray-900` | text fixo (não inverte) | `text-primary-solid` | Texto que deve permanecer escuro mesmo no dark |
| `text-gray-900` | icon | `text-fg-primary` ou `text-fg-primary-solid` | Ícones de destaque |
| `bg-gray-50` | bg | `bg-secondary` ou `bg-primary-hover` | Page bg, table headers, hover de bg-primary |
| `bg-gray-100` | bg | `bg-tertiary` ou `bg-secondary-hover` | Hover de itens, icon bg, avatar bg |
| `bg-gray-200` | bg | `bg-quaternary` | Skeleton, progress tracks, separators |
| `bg-gray-200` | border | `border-secondary` | Bordas de cards/tables/inputs |
| `bg-gray-300` | border | `border-primary` | Bordas de checkbox/radio/inputs |
| `bg-gray-600` | bg fixo | `bg-secondary-solid` | Fundos que não invertem |
| `bg-gray-950` | bg invertido | `bg-overlay` ou `bg-primary-solid` | Tooltips, overlays |
| `border-gray-100` | border | `border-tertiary` | Bordas mais suaves |
| `border-gray-200` | border | `border-secondary` | Bordas padrão |
| `border-gray-300` | border | `border-primary` | Bordas de inputs em foco |

> **Atenção `dark:` no original:** todas as utilidades `dark:*-gray-*` devem ser **removidas**. Os tokens semânticos já fazem a inversão automaticamente. Exemplo: `text-gray-900 dark:text-gray-100` → apenas `text-primary`.

### 4.5.2 Brand (yellow)

| Primitiva | Contexto | → Semântico | Quando usar |
|-----------|----------|-------------|-------------|
| `bg-yellow-50` (`brand-50`) | bg | `bg-brand-primary` ou `bg-brand-primary-alt` | Badge default, icon wrappers, selected rows |
| `bg-yellow-100` (`brand-100`) | bg | `bg-brand-secondary` | Badge hover, icon containers |
| `text-yellow-200` (`brand-200`) | text on brand | `text-secondary-on-brand` ou `text-tertiary-on-brand` | Texto sobre fundos brand-solid |
| `text-yellow-300` (`brand-300`) | text on brand | `text-quaternary-on-brand` | Texto muted sobre fundos brand |
| `bg-yellow-400` (`brand-400`) | bg fixo | `bg-brand-tertiary-solid` | Botão primary default (não inverte) |
| `bg-yellow-500` (`brand-500`) | bg fixo | `bg-brand-quaterary-solid` | Status dots, progress bars |
| `text-yellow-500` (`brand-500`) | icon | `text-fg-brand-secondary` ou `text-fg-brand-secondary-alt` | Loaders, ícones brand secundários |
| `border-yellow-500` | border | `border-brand` | Tertiary button, checkbox selected |
| `bg-yellow-600` (`brand-600`) | bg | `bg-brand-solid` | Checkbox/radio/switch checked, slider |
| `text-yellow-600` (`brand-600`) | text | `text-brand-tertiary` ou `text-brand-tertiary-alt` | Required asterisk, helper icons |
| `text-yellow-600` (`brand-600`) | icon | `text-fg-brand-primary` ou `text-fg-brand-primary-alt` | Ícones brand primários |
| `border-yellow-600` | border | `border-brand-alt` | Slider thumb, chart strokes |
| `bg-yellow-700` (`brand-700`) | bg | `bg-brand-solid-hover` ou `bg-brand-section-subtle` | Hover do botão primary |
| `text-yellow-700` (`brand-700`) | text | `text-brand-secondary` | Badge text, tertiary buttons, card titles |
| `bg-yellow-800` (`brand-800`) | bg | `bg-brand-section` | Seções de destaque brand |
| `text-yellow-800` (`brand-800`) | text | `text-brand-secondary-hover` | Hover de links, info headers |
| `text-yellow-900` (`brand-900`) | text | `text-brand-primary` | Selected item labels, radio selected text |

### 4.5.3 Error (red)

| Primitiva | Contexto | → Semântico | Quando usar |
|-----------|----------|-------------|-------------|
| `bg-red-50` (`error-50`) | bg | `bg-error-primary` | Badge destructive, hover de delete |
| `bg-red-100` (`error-100`) | bg | `bg-error-secondary` | Confirmation dialogs, destructive wrappers |
| `border-red-300` | border | `border-error-subtle` | Bordas suaves de error |
| `text-red-500` (`error-500`) | icon | `text-fg-error-secondary` | Ícones error secundários |
| `border-red-500` | border | `border-error` | Form input error, ring focus error |
| `bg-red-600` (`error-600`) | bg | `bg-error-solid` | Botão destructive |
| `text-red-600` (`error-600`) | text | `text-error-primary` | Hint text de erro, dialog icons |
| `text-red-600` (`error-600`) | icon | `text-fg-error-primary` | Ícones destructive |
| `bg-red-700` (`error-700`) | bg | `bg-error-solid-hover` | Hover do botão destructive |
| `text-red-700` (`error-700`) | text | `text-error-primary-hover` | Badge destructive text, dropdown delete |

### 4.5.4 Warning (orange)

| Primitiva | Contexto | → Semântico | Quando usar |
|-----------|----------|-------------|-------------|
| `bg-orange-50` (`warning-50`) | bg | `bg-warning-primary` | Badge warning, alert icon inner, button hover |
| `bg-orange-100` (`warning-100`) | bg | `bg-warning-secondary` | Badge hover, confirmation dialog icons |
| `text-orange-500` (`warning-500`) | icon | `text-fg-warning-secondary` | Ícones warning secundários |
| `bg-orange-600` (`warning-600`) | bg | `bg-warning-solid` | Botão warning hover, status step pending |
| `text-orange-600` (`warning-600`) | text | `text-warning-primary` | Badge warning text, contestacao text |
| `text-orange-600` (`warning-600`) | icon | `text-fg-warning-primary` | Alert icons, contestacao icons |

> **Gap na palette Figma:** a família `warning` **não tem tokens de borda** (`border-warning-*`). Para bordas warning, use `border-secondary` neutro ou `border-[hsl(var(--bg-warning-solid))]` via arbitrary value.

> **Sem mapeamento direto para `warning-25`, `-200`, `-300`, `-500` (bg) e `-700` (text):** se houver uso, mapear contextualmente:
> - `warning-25` → `bg-warning-primary` (mesmo token, light variation aceitável)
> - `border-warning-200` → `border-secondary` (sutil) ou `border-[hsl(var(--bg-warning-solid))]`
> - `bg-warning-500` → `bg-warning-solid` (uso similar)
> - `text-warning-700` → `text-warning-primary` (não há tom mais escuro no Figma)

### 4.5.5 Success (emerald/green)

| Primitiva | Contexto | → Semântico | Quando usar |
|-----------|----------|-------------|-------------|
| `bg-green-50` (`success-50`) | bg | `bg-success-primary` | Badge success, alert card success |
| `bg-green-100` (`success-100`) | bg | `bg-success-secondary` | Badge hover |
| `text-green-500` (`success-500`) | icon | `text-fg-success-secondary` | Status dots, button success |
| `bg-green-600` (`success-600`) | bg | `bg-success-solid` | Completed steps, progress, check icons |
| `text-green-600` (`success-600`) | text | `text-success-primary` | Email success, positive values |
| `text-green-600` (`success-600`) | icon | `text-fg-success-primary` | Alert icons, check icons |

> **Gap na palette Figma:** a família `success` **não tem tokens de borda** (`border-success-*`). Para bordas success, use `border-secondary` neutro ou `border-[hsl(var(--bg-success-solid))]` via arbitrary value.

> **Sem mapeamento direto para `success-25`, `-200`, `-300`, `-700`:** se houver uso, mapear contextualmente:
> - `success-25` → `bg-success-primary` (mesmo token)
> - `border-success-200` → `border-secondary` (sutil) ou `border-[hsl(var(--bg-success-solid))]`
> - `text-success-700` → `text-success-primary` (não há tom mais escuro no Figma)

### 4.5.6 Primitivas diretas no `vistoriador`

O projeto `vistoriador` usa primitivas Tailwind diretas (`red-*`, `yellow-*`, `green-*`, `blue-*`, `amber-*`, `indigo-*`). Aplicar as mesmas regras das tabelas acima:

| Primitiva direta | Mapeamento |
|------------------|------------|
| `red-*` | Usar tabela 4.5.3 |
| `orange-*` / `amber-*` | Usar tabela 4.5.4 |
| `yellow-*` | Usar tabela 4.5.2 (brand) |
| `green-*` / `emerald-*` | Usar tabela 4.5.5 |
| `blue-*` / `indigo-*` | **Sem token correspondente no Figma.** Decidir caso a caso: status info pode reusar `text-tertiary` (neutro) ou exigir extensão da palette. |

### 4.5.7 Diretrizes de escolha entre `text-*`, `fg-*`, `bg-*`, `border-*`

Quando uma primitiva pode mapear para múltiplas categorias, decida pelo **propósito**:

- **`text-*`** → texto literal (parágrafos, headings, labels, valores)
- **`fg-*`** → ícones SVG, glifos, controles dentro de inputs (caret, chevron de select), seletores de toggle/checkbox/radio
- **`bg-*`** → preenchimento de containers (cards, badges, buttons)
- **`border-*`** → contornos visíveis (1px-2px stroke)

**Exemplo decisivo:** um chevron `<ChevronDown />` dentro de um botão era `text-gray-700`. Como é um SVG (ícone), use `text-fg-secondary`, **não** `text-secondary`.

### 4.5.8 Tokens com sufixo `-solid` (não invertem)

Usados em casos onde o valor light deve persistir mesmo no dark mode:

- `text-primary-solid`, `fg-primary-solid` → texto/ícone que precisa ser sempre escuro (ex: rótulo sobre fundo branco fixo)
- `fg-secondary-solid` → ícone secundário fixo
- `bg-primary-solid` → fundo invertido fixo (tooltip claro com texto escuro)
- `bg-secondary-solid` → fundo cinza médio fixo
- `bg-brand-tertiary-solid`, `bg-brand-quaterary-solid` → primary button que mantém amarelo no dark
- `bg-brand-solid`, `bg-error-solid`, `bg-warning-solid`, `bg-success-solid` → status colors que mantêm intensidade no dark

### 4.5.9 Variantes `-on-brand`

Usar quando o texto/ícone está sobre um fundo `bg-brand-*`:

- `text-primary-on-brand` → texto principal sobre brand-solid (geralmente branco)
- `text-secondary-on-brand` → texto secundário sobre brand
- `text-tertiary-on-brand` → texto terciário sobre brand
- `text-quaternary-on-brand` → texto muted sobre brand

### 4.5.10 Workflow recomendado de migração

Para cada arquivo:

1. **Listar todas as cores no arquivo** com `rg "(text|bg|border|ring|fill|stroke)-(gray|yellow|red|orange|amber|green|emerald|blue|indigo)-\d+" arquivo.tsx`
2. **Para cada match**, determinar contexto (text vs ícone vs bg vs border) olhando o elemento (`<p>`, `<svg>`, `<div>`, etc.)
3. **Aplicar a regra** da tabela correspondente (4.5.1 a 4.5.5)
4. **Remover qualquer `dark:*-cor-*` adjacente** — token semântico já inverte
5. **Validar visualmente** em light e dark mode

---

## 5. Exemplos Práticos de Uso

### 5.1 Card Component

**Antes (primitivo + dark:):**
```tsx
<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
  <h3 className="text-gray-900 dark:text-gray-100">Título</h3>
  <p className="text-gray-600 dark:text-gray-400">Descrição</p>
</div>
```

**Depois (semântico, sem dark:):**
```tsx
<div className="bg-primary border border-secondary">
  <h3 className="text-primary">Título</h3>
  <p className="text-tertiary">Descrição</p>
</div>
```

### 5.2 Button Primary

**Antes:**
```tsx
<button className="bg-brand-400 hover:bg-brand-500 text-gray-900">
  Confirmar
</button>
```

**Depois:**
```tsx
<button className="bg-brand-solid hover:bg-brand-solid-hover text-primary-on-brand">
  Confirmar
</button>
```

### 5.3 Button Destructive

**Antes:**
```tsx
<button className="bg-error-600 hover:bg-error-700 text-white">
  Excluir
</button>
```

**Depois:**
```tsx
<button className="bg-error-solid hover:bg-error-solid-hover text-white">
  Excluir
</button>
```

### 5.4 Badge Success

**Antes:**
```tsx
<span className="bg-success-50 text-success-700 border border-success-200">
  Ativo
</span>
```

**Depois (sem borda colorida — recomendado):**
```tsx
<span className="bg-success-primary text-success-primary border border-secondary">
  Ativo
</span>
```

**Depois (com borda colorida via arbitrary value):**
```tsx
<span className="bg-success-primary text-success-primary border border-[hsl(var(--bg-success-solid))]">
  Ativo
</span>
```

> ⚠️ **Gap conhecido na palette Figma:** as famílias `success` e `warning` **não definem tokens de borda** (`border-success-*`, `border-warning-*` não existem). Opções: (a) usar `border-secondary` neutro, (b) usar `arbitrary value` reaproveitando o solid `border-[hsl(var(--bg-success-solid))]`, ou (c) solicitar ao time de design a criação de tokens de borda success/warning no Figma.

### 5.5 Input com Error

**Antes:**
```tsx
<input
  className={cn(
    "border-gray-300 focus:border-gray-500 dark:border-gray-600 dark:focus:border-gray-400",
    hasError && "border-error-500 focus:border-error-500 focus:ring-error-500"
  )}
/>
```

**Depois:**
```tsx
<input
  className={cn(
    "border-primary focus:border-secondary",
    hasError && "border-error focus:border-error focus:ring-error"
  )}
/>
```

### 5.6 Table Header

**Antes:**
```tsx
<thead className="bg-gray-50 dark:bg-gray-800">
  <tr>
    <th className="text-gray-600 dark:text-gray-300">Nome</th>
  </tr>
</thead>
```

**Depois:**
```tsx
<thead className="bg-secondary">
  <tr>
    <th className="text-tertiary">Nome</th>
  </tr>
</thead>
```

### 5.7 Tooltip

**Antes:**
```tsx
<div className="bg-gray-950 text-gray-50">
  Tooltip content
</div>
```

**Depois:**
```tsx
<div className="bg-overlay text-white">
  Tooltip content
</div>
```

---

## 6. Configuração Tailwind

### 6.1 tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // ==========================================
        // TEXT
        // ==========================================
        text: {
          primary: "hsl(var(--text-primary))",
          "primary-on-brand": "hsl(var(--text-primary-on-brand))",
          "primary-solid": "hsl(var(--text-primary-solid))",
          secondary: "hsl(var(--text-secondary))",
          "secondary-hover": "hsl(var(--text-secondary-hover))",
          "secondary-on-brand": "hsl(var(--text-secondary-on-brand))",
          tertiary: "hsl(var(--text-tertiary))",
          "tertiary-hover": "hsl(var(--text-tertiary-hover))",
          "tertiary-on-brand": "hsl(var(--text-tertiary-on-brand))",
          quaternary: "hsl(var(--text-quaternary))",
          "quaternary-on-brand": "hsl(var(--text-quaternary-on-brand))",
          quinary: "hsl(var(--text-quinary))",
          placeholder: "hsl(var(--text-placeholder))",
          white: "hsl(var(--text-white))",
          "brand-primary": "hsl(var(--text-brand-primary))",
          "brand-secondary": "hsl(var(--text-brand-secondary))",
          "brand-secondary-hover": "hsl(var(--text-brand-secondary-hover))",
          "brand-tertiary": "hsl(var(--text-brand-tertiary))",
          "brand-tertiary-alt": "hsl(var(--text-brand-tertiary-alt))",
          "error-primary": "hsl(var(--text-error-primary))",
          "error-primary-hover": "hsl(var(--text-error-primary-hover))",
          "warning-primary": "hsl(var(--text-warning-primary))",
          "success-primary": "hsl(var(--text-success-primary))",
        },

        // ==========================================
        // FOREGROUND (icons, controls, glyphs)
        // ==========================================
        fg: {
          primary: "hsl(var(--fg-primary))",
          "primary-solid": "hsl(var(--fg-primary-solid))",
          secondary: "hsl(var(--fg-secondary))",
          "secondary-hover": "hsl(var(--fg-secondary-hover))",
          "secondary-solid": "hsl(var(--fg-secondary-solid))",
          tertiary: "hsl(var(--fg-tertiary))",
          "tertiary-hover": "hsl(var(--fg-tertiary-hover))",
          quaternary: "hsl(var(--fg-quaternary))",
          "quaternary-hover": "hsl(var(--fg-quaternary-hover))",
          white: "hsl(var(--fg-white))",
          "brand-primary": "hsl(var(--fg-brand-primary))",
          "brand-primary-alt": "hsl(var(--fg-brand-primary-alt))",
          "brand-secondary": "hsl(var(--fg-brand-secondary))",
          "brand-secondary-alt": "hsl(var(--fg-brand-secondary-alt))",
          "brand-secondary-hover": "hsl(var(--fg-brand-secondary-hover))",
          "error-primary": "hsl(var(--fg-error-primary))",
          "error-secondary": "hsl(var(--fg-error-secondary))",
          "warning-primary": "hsl(var(--fg-warning-primary))",
          "warning-secondary": "hsl(var(--fg-warning-secondary))",
          "success-primary": "hsl(var(--fg-success-primary))",
          "success-secondary": "hsl(var(--fg-success-secondary))",
        },

        // ==========================================
        // BACKGROUND
        // ==========================================
        bg: {
          primary: "hsl(var(--bg-primary))",
          "primary-alt": "hsl(var(--bg-primary-alt))",
          "primary-hover": "hsl(var(--bg-primary-hover))",
          "primary-solid": "hsl(var(--bg-primary-solid))",
          secondary: "hsl(var(--bg-secondary))",
          "secondary-alt": "hsl(var(--bg-secondary-alt))",
          "secondary-hover": "hsl(var(--bg-secondary-hover))",
          "secondary-solid": "hsl(var(--bg-secondary-solid))",
          tertiary: "hsl(var(--bg-tertiary))",
          quaternary: "hsl(var(--bg-quaternary))",
          overlay: "hsl(var(--bg-overlay))",
          "brand-primary": "hsl(var(--bg-brand-primary))",
          "brand-primary-alt": "hsl(var(--bg-brand-primary-alt))",
          "brand-secondary": "hsl(var(--bg-brand-secondary))",
          "brand-tertiary-solid": "hsl(var(--bg-brand-tertiary-solid))",
          "brand-quaterary-solid": "hsl(var(--bg-brand-quaterary-solid))",
          "brand-solid": "hsl(var(--bg-brand-solid))",
          "brand-solid-hover": "hsl(var(--bg-brand-solid-hover))",
          "brand-section": "hsl(var(--bg-brand-section))",
          "brand-section-subtle": "hsl(var(--bg-brand-section-subtle))",
          "error-primary": "hsl(var(--bg-error-primary))",
          "error-secondary": "hsl(var(--bg-error-secondary))",
          "error-solid": "hsl(var(--bg-error-solid))",
          "error-solid-hover": "hsl(var(--bg-error-solid-hover))",
          "warning-primary": "hsl(var(--bg-warning-primary))",
          "warning-secondary": "hsl(var(--bg-warning-secondary))",
          "warning-solid": "hsl(var(--bg-warning-solid))",
          "success-primary": "hsl(var(--bg-success-primary))",
          "success-secondary": "hsl(var(--bg-success-secondary))",
          "success-solid": "hsl(var(--bg-success-solid))",
        },

        // ==========================================
        // BORDER
        // ==========================================
        border: {
          primary: "hsl(var(--border-primary))",
          secondary: "hsl(var(--border-secondary))",
          "secondary-alt": "hsl(var(--border-secondary-alt))",
          tertiary: "hsl(var(--border-tertiary))",
          brand: "hsl(var(--border-brand))",
          "brand-alt": "hsl(var(--border-brand-alt))",
          error: "hsl(var(--border-error))",
          "error-subtle": "hsl(var(--border-error-subtle))",
        },
      },
    },
  },
}
```

> O namespace `border` no Tailwind se sobrepõe ao utilitário `border-{color}`. Para resolver isso sem ambiguidade, considere registrar os tokens de border também em `borderColor` (que mantém apenas o utilitário de cor de borda).

---

## 7. Plano de Execução

### Fase 1: Design System (Crítico)
1. Adicionar tokens semânticos no `global.css` (seções 3.1 a 3.5)
2. Atualizar `tailwind.config.js` (seção 6.1)
3. Migrar componentes do design-system
4. Remover todos os `dark:*` relacionados a cores
5. Testar visualmente em Storybook
6. Validar dark mode

### Fase 2: Projetos Consumidores (seguir ordem da seção 4.2)
1. **inmediam_front** (maior - ~3000 substituições)
   - Atenção especial ao `visao-geral-rendimentos-chart.tsx`
2. **inmediam_clientes** (menor - ~900 substituições)
   - Executar substituições por categoria
   - Remover todos os prefixos `dark:*-cor-*`
   - Revisar manualmente casos complexos
3. **vistoriador** (~1100 substituições)
   - Atenção especial aos status labels
   - Migrar cores HEX para tokens

### Fase 3: Cleanup e Validação
1. Remover tokens primitivos antigos do global.css
2. Build de todos os projetos
3. Testes visuais light/dark
4. Verificar que NÃO há mais `dark:*-{cor}-*` no código

---

## 8. Checklist Final

### Design System
- [ ] `global.css` com todos os tokens semânticos das seções 3.1 a 3.5
- [ ] `tailwind.config.js` atualizado conforme seção 6.1
- [ ] Todos os componentes migrados para tokens semânticos
- [ ] Zero ocorrências de `dark:*-cor-*`
- [ ] Dark mode funcionando automaticamente
- [ ] Build sem erros

### Projetos - Tokens Semânticos
- [ ] Zero ocorrências de `gray-XXX` (migrado para `text-*` / `fg-*` / `bg-*` / `border-*` neutros)
- [ ] Zero ocorrências de `brand-XXX` (migrado para tokens `*-brand-*`)
- [ ] Zero ocorrências de `error-XXX` (migrado para tokens `*-error-*`)
- [ ] Zero ocorrências de `warning-XXX` (migrado para tokens `*-warning-*`)
- [ ] Zero ocorrências de `success-XXX` (migrado para tokens `*-success-*`)

### Projetos - Primitivas Removidas
- [ ] Zero ocorrências de `red-*`
- [ ] Zero ocorrências de `orange-*`
- [ ] Zero ocorrências de `yellow-*`
- [ ] Zero ocorrências de `amber-*`
- [ ] Zero ocorrências de `green-*`
- [ ] Zero ocorrências de `emerald-*`
- [ ] Zero ocorrências de `blue-*`
- [ ] Zero ocorrências de `indigo-*`

### Validação
- [ ] Contraste adequado em ambos os temas
- [ ] Testes visuais aprovados
- [ ] Build de todos os projetos sem erros

### Verificação Final (comandos)
```bash
# Verificar se ainda existem dark: com cores
rg "dark:[a-z-]*:(text|bg|border|fill)-" --type tsx --type ts -c
# Esperado: 0 resultados para cores primitivas

# Verificar se ainda existem escalas numéricas de gray
rg "(text|bg|border)-gray-\d+" --type tsx --type ts -c
# Esperado: 0 resultados

# Verificar se ainda existem primitivas
rg "(text|bg|border)-(red|orange|yellow|amber|green|emerald|blue|indigo)-\d+" --type tsx --type ts -c
# Esperado: 0 resultados
```

---

## 9. Arquivos a Modificar

### 9.1 Design System (`@design-system/packages/ui/`)

| Arquivo | Mudanças |
|---------|----------|
| `src/global.css` | Adicionar todos os tokens semânticos (seções 3.1 a 3.5) |
| `tailwind.config.js` | Atualizar mapeamentos de cores (seção 6.1) |

#### Componentes a migrar:
- `button.tsx`, `badge.tsx`, `table.tsx`, `tooltip.tsx`, `dialog.tsx`
- `label.tsx`, `input.tsx`, `textarea.tsx`, `select.tsx`
- `checkbox.tsx`, `radio-group.tsx`, `switch.tsx`
- `progress.tsx`, `slider.tsx`, `dot.tsx`, `hint-text.tsx`
- `avatar.tsx`, `carousel.tsx`, `mobile-tab-list.tsx`

### 9.2 Projetos Consumidores

| Projeto | Estimativa de Substituições |
|---------|----------------------------|
| inmediam_front | ~3000 |
| inmediam_clientes | ~900 |
| vistoriador | ~1100 |
