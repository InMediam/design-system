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

| Projeto           | gray-* | brand-* | error-* | warning-* | success-* | Primitivas diretas                           |
| ----------------- | ------ | ------- | ------- | --------- | --------- | -------------------------------------------- |
| design-system     | 28     | 22      | 4       | 3         | 3         | 0                                            |
| inmediam_front    | ~2659  | ~199    | ~49     | ~18       | ~47       | 14 (red, orange)                             |
| inmediam_clientes | 844    | 33      | 10      | 3         | 24        | 6 (red, orange)                              |
| vistoriador       | ~975   | ~100    | 0       | 0         | 0         | 62 (red, yellow, green, blue, amber, indigo) |
| **TOTAL**         | ~4506  | ~354    | ~63     | ~24       | ~74       | 82                                           |

### 1.2 Prefixos `dark:` a Remover

| Padrão                    | Ocorrências Estimadas |
| ------------------------- | --------------------- |
| `dark:text-gray-*`        | ~1300                 |
| `dark:bg-gray-*`          | ~180                  |
| `dark:border-gray-*`      | ~310                  |
| `dark:hover:*-gray-*`     | ~25                   |
| `dark:*-brand-*`          | ~50                   |
| `dark:*-error/red-*`      | ~20                   |
| `dark:*-warning/orange-*` | ~5                    |
| `dark:*-success/green-*`  | ~10                   |
| **TOTAL**                 | **~1960**             |

---

## 2. Análise Semântica por Cor

### 2.1 Gray - Análise de Uso

| Tonalidade   | Uso Background                                                      | Uso Border                                               | Uso Text/Icon                                        |
| ------------ | ------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------- |
| **gray-25**  | Ultra-sutil (brand-adjacent)                                        | -                                                        | -                                                    |
| **gray-50**  | Page backgrounds, table headers, disabled states, badge hover       | -                                                        | -                                                    |
| **gray-100** | Hover states, icon backgrounds, avatar backgrounds, inactive states | Timeline borders                                         | Dark mode carousel text                              |
| **gray-200** | Separators, progress tracks, skeleton                               | Table/card borders, input hover, badge borders, dividers | Dark mode input text                                 |
| **gray-300** | Carousel dots inactive, stepper inactive                            | Checkbox/radio borders, hover borders, dashed borders    | Tooltip muted text, dark mode labels                 |
| **gray-400** | Dot indicators secondary                                            | Focus borders                                            | Icons, disabled text, action icons                   |
| **gray-500** | Dot neutral, disabled radio checked                                 | Dark mode toggle borders                                 | Placeholder text, menu icons, muted labels, metadata |
| **gray-600** | Carousel hover                                                      | Dark mode focus/tab borders                              | Table headers, body text, descriptions, menu text    |
| **gray-700** | Dark mode cards, summary bars                                       | Dark mode primary borders (muito comum)                  | Label text, button tertiary, badge text              |
| **gray-800** | Dark mode cards, dark mode icons                                    | Dark mode layout borders, dark mode focus rings          | -                                                    |
| **gray-900** | Carousel active dots, chart labels, avatar fallback                 | -                                                        | Primary headings, names, titles, form values         |
| **gray-950** | Tooltip backgrounds (inverted)                                      | -                                                        | Emphasized user names                                |

### 2.2 Brand (Yellow) - Análise de Uso

| Tonalidade    | Uso Background                                                                        | Uso Border                                                         | Uso Text/Icon                                                   |
| ------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------- |
| **brand-25**  | Selected row, menu hover, gradient start, list selected                               | -                                                                  | -                                                               |
| **brand-50**  | Badge default, tertiary button, checkbox card selected, radio selected, icon wrappers | Selected state borders                                             | -                                                               |
| **brand-100** | Badge hover, icon containers, radio selected, confirmation dialogs                    | Selector checked borders                                           | -                                                               |
| **brand-200** | -                                                                                     | Badge borders, hover borders                                       | -                                                               |
| **brand-400** | **Primary button default**, avatar fallback, day selector                             | -                                                                  | Icon hover (stars)                                              |
| **brand-500** | Navigation indicators, progress bars, stepper, status dots                            | Tertiary button, checkbox selected, toggle selected, chart strokes | Loader spinners                                                 |
| **brand-600** | Checkbox/radio/switch checked, progress, slider, notification badges                  | Slider thumb, chart strokes                                        | Required asterisk, detail icons, helper icons                   |
| **brand-700** | -                                                                                     | -                                                                  | Badge text, tertiary buttons, encargo info, card titles         |
| **brand-800** | -                                                                                     | -                                                                  | Logo buttons, hover links, info headers                         |
| **brand-900** | -                                                                                     | -                                                                  | Selected item labels, radio selected text, toggle selected text |

### 2.3 Error (Red) - Análise de Uso

| Tonalidade    | Uso Background                                           | Uso Border                         | Uso Text/Icon                                                              |
| ------------- | -------------------------------------------------------- | ---------------------------------- | -------------------------------------------------------------------------- |
| **error-50**  | Badge destructive, hover delete actions                  | -                                  | -                                                                          |
| **error-100** | Confirmation dialog icons, destructive dialog wrappers   | -                                  | -                                                                          |
| **error-200** | -                                                        | Badge destructive borders          | -                                                                          |
| **error-500** | Inactive status dots, badge dot destructive, auth failed | Form input error, ring focus error | Wifi off icon                                                              |
| **error-600** | Discount/encargo bars                                    | -                                  | Hint text (form errors), destructive button, dialog icons, discount values |
| **error-700** | -                                                        | -                                  | Badge destructive text, dropdown delete, cancel actions, discount labels   |

### 2.4 Warning (Orange) - Análise de Uso

| Tonalidade      | Uso Background                                               | Uso Border                                   | Uso Text/Icon                               |
| --------------- | ------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------- |
| **warning-25**  | Alert card backgrounds, contestacao cards                    | -                                            | -                                           |
| **warning-50**  | Badge warning, alert icon inner, button hover                | Contestacao icon wrapper                     | -                                           |
| **warning-100** | Badge hover, confirmation dialog icons                       | -                                            | -                                           |
| **warning-200** | -                                                            | Badge warning, alert outer, contestacao card | -                                           |
| **warning-300** | -                                                            | Alert icon inner, contestacao button         | -                                           |
| **warning-500** | Badge dot warning, status indicators, cancellation requested | Button warning default                       | -                                           |
| **warning-600** | Status step pending                                          | Button warning hover                         | Alert icons, contestacao icons              |
| **warning-700** | -                                                            | -                                            | Badge warning text, contestacao button text |

### 2.5 Success (Emerald) - Análise de Uso

| Tonalidade      | Uso Background                                                 | Uso Border                 | Uso Text/Icon                                                     |
| --------------- | -------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------------- |
| **success-25**  | Alert card success                                             | -                          | -                                                                 |
| **success-50**  | Badge success                                                  | -                          | -                                                                 |
| **success-100** | Badge hover                                                    | -                          | -                                                                 |
| **success-200** | -                                                              | Badge success, alert outer | -                                                                 |
| **success-300** | -                                                              | Alert icon inner           | -                                                                 |
| **success-500** | Badge dot success, active status, auth success, button success | -                          | -                                                                 |
| **success-600** | Completed steps, progress, check icons, seguradora active      | Step borders, timeline     | Alert icons, email success, positive values, check icons          |
| **success-700** | -                                                              | -                          | Badge success text, expense labels, encargo values, discount text |

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
  --text-primary: 0 0% 9%;  /* gray-900 */
  --text-primary-on-brand: 0 0% 98%;  /* gray-50 */
  --text-primary-solid: 0 0% 9%;  /* gray-900 */
  --text-secondary: 0 0% 25.1%;  /* gray-700 */
  --text-secondary-hover: 0 0% 14.9%;  /* gray-800 */
  --text-tertiary: 0 0% 32.2%;  /* gray-600 */
  --text-quaternary: 0 0% 45.1%;  /* gray-500 */
  --text-quinary: 0 0% 63.9%;  /* gray-400 */
  --text-placeholder: 0 0% 45.1%;  /* gray-500 */
  --text-white: 0 0% 100%;  /* white */
  --text-brand-primary: 28.4 72.5% 25.7%;  /* yellow-900 */
  --text-brand-secondary: 35.5 91.7% 32.9%;  /* yellow-700 */
  --text-brand-tertiary: 40.6 96.1% 40.4%;  /* yellow-600 */
  --text-error-primary: 0 72.2% 50.6%;  /* red-600 */
  --text-warning-primary: 20.5 90.2% 48.2%;  /* orange-600 */
  --text-success-primary: 142.1 76.2% 36.3%;  /* green-600 */
}

.dark {
  --text-primary: 0 0% 98%;  /* gray-50 */
  --text-primary-on-brand: 0 0% 98%;  /* gray-50 */
  --text-primary-solid: 0 0% 9%;  /* gray-900 */
  --text-secondary: 0 0% 83.1%;  /* gray-300 */
  --text-secondary-hover: 0 0% 89.8%;  /* gray-200 */
  --text-tertiary: 0 0% 63.9%;  /* gray-400 */
  --text-quaternary: 0 0% 63.9%;  /* gray-400 */
  --text-quinary: 0 0% 63.9%;  /* gray-400 */
  --text-placeholder: 0 0% 45.1%;  /* gray-500 */
  --text-white: 0 0% 100%;  /* white */
  --text-brand-primary: 0 0% 98%;  /* gray-50 */
  --text-brand-secondary: 47.9 75.8% 40.1%;  /* custom */
  --text-brand-tertiary: 0 0% 63.9%;  /* gray-400 */
  --text-error-primary: 4 82% 58%;  /* custom */
  --text-warning-primary: 27 96% 61%;  /* orange-400 */
  --text-success-primary: 141.9 69.2% 58%;  /* green-400 */
}
```

### 3.2 Foreground (ícones, controles, glifos)

```css
:root {
  --fg-primary: 0 0% 9%;  /* gray-900 */
  --fg-primary-solid: 0 0% 9%;  /* gray-900 */
  --fg-secondary: 0 0% 25.1%;  /* gray-700 */
  --fg-secondary-hover: 0 0% 14.9%;  /* gray-800 */
  --fg-secondary-solid: 0 0% 25.1%;  /* gray-700 */
  --fg-tertiary: 0 0% 32.2%;  /* gray-600 */
  --fg-tertiary-hover: 0 0% 25.1%;  /* gray-700 */
  --fg-quaternary: 0 0% 63.9%;  /* gray-400 */
  --fg-quaternary-hover: 0 0% 45.1%;  /* gray-500 */
  --fg-white: 0 0% 100%;  /* white */
  --fg-brand-primary: 40.6 96.1% 40.4%;  /* yellow-600 */
  --fg-brand-primary-alt: 40.6 96.1% 40.4%;  /* yellow-600 */
  --fg-brand-secondary: 45.4 93.4% 47.5%;  /* yellow-500 */
  --fg-brand-secondary-alt: 45.4 93.4% 47.5%;  /* yellow-500 */
  --fg-brand-secondary-hover: 40.6 96.1% 40.4%;  /* yellow-600 */
  --fg-error-primary: 0 72.2% 50.6%;  /* red-600 */
  --fg-error-secondary: 0 84.2% 60.2%;  /* red-500 */
  --fg-warning-primary: 20.5 90.2% 48.2%;  /* orange-600 */
  --fg-warning-secondary: 24.6 95% 53.1%;  /* orange-500 */
  --fg-success-primary: 142.1 76.2% 36.3%;  /* green-600 */
  --fg-success-secondary: 142.1 70.6% 45.3%;  /* green-500 */
}

.dark {
  --fg-primary: 0 0% 100%;  /* white */
  --fg-primary-solid: 0 0% 9%;  /* gray-900 */
  --fg-secondary: 0 0% 83.1%;  /* gray-300 */
  --fg-secondary-hover: 0 0% 89.8%;  /* gray-200 */
  --fg-secondary-solid: 0 0% 25.1%;  /* gray-700 */
  --fg-tertiary: 0 0% 63.9%;  /* gray-400 */
  --fg-tertiary-hover: 0 0% 83.1%;  /* gray-300 */
  --fg-quaternary: 0 0% 45.1%;  /* gray-500 */
  --fg-quaternary-hover: 0 0% 63.9%;  /* gray-400 */
  --fg-white: 0 0% 100%;  /* white */
  --fg-brand-primary: 45.4 93.4% 47.5%;  /* yellow-500 */
  --fg-brand-primary-alt: 0 0% 83.1%;  /* gray-300 */
  --fg-brand-secondary: 45.4 93.4% 47.5%;  /* yellow-500 */
  --fg-brand-secondary-alt: 0 0% 32.2%;  /* gray-600 */
  --fg-brand-secondary-hover: 0 0% 45.1%;  /* gray-500 */
  --fg-error-primary: 0 90.6% 70.8%;  /* red-400 */
  --fg-error-secondary: 0 93.5% 81.8%;  /* red-300 */
  --fg-warning-primary: 27 96% 61%;  /* orange-400 */
  --fg-warning-secondary: 30.7 97.2% 72.4%;  /* orange-300 */
  --fg-success-primary: 141.9 69.2% 58%;  /* green-400 */
  --fg-success-secondary: 141.7 76.6% 73.1%;  /* green-300 */
}
```

### 3.3 Background

```css
:root {
  --bg-primary: 0 0% 100%;  /* white */
  --bg-primary-solid: 0 0% 3.9%;  /* gray-950 */
  --bg-secondary: 0 0% 98%;  /* gray-50 */
  --bg-secondary-hover: 0 0% 96.1%;  /* gray-100 */
  --bg-tertiary: 0 0% 96.1%;  /* gray-100 */
  --bg-quaternary: 0 0% 89.8%;  /* gray-200 */
  --bg-quinary: 0 0% 62.2%;  /* custom */
  --bg-overlay: 0 0% 3.9%;  /* gray-950 */
  --bg-brand-primary: 54.5 91.7% 95.3%;  /* yellow-50 */
  --bg-brand-secondary: 54.9 96.7% 88%;  /* yellow-100 */
  --bg-brand-tertiary: 47.9 95.8% 53.1%;  /* yellow-400 */
  --bg-brand-quaterary: 45.4 93.4% 47.5%;  /* yellow-500 */
  --bg-brand-quinary: 40.6 96.1% 40.4%;  /* yellow-600 */
  --bg-error-secondary: 0 93.3% 94.1%;  /* red-100 */
  --bg-error: 0 72.2% 50.6%;  /* red-600 */
  --bg-warning-secondary: 34.3 100% 91.8%;  /* orange-100 */
  --bg-warning: 20.5 90.2% 48.2%;  /* orange-600 */
  --bg-success-secondary: 140.6 84.2% 92.5%;  /* green-100 */
  --bg-success: 142.1 76.2% 36.3%;  /* green-600 */
}

.dark {
  --bg-primary: 0 0% 3.9%;  /* gray-950 */
  --bg-primary-solid: 0 0% 3.9%;  /* gray-950 */
  --bg-secondary: 0 0% 9%;  /* gray-900 */
  --bg-secondary-hover: 0 0% 14.9%;  /* gray-800 */
  --bg-tertiary: 0 0% 10%;  /* custom */
  --bg-quaternary: 0 0% 25.1%;  /* gray-700 */
  --bg-quinary: 0 0% 32.2%;  /* gray-600 */
  --bg-overlay: 0 0% 14.9%;  /* gray-800 */
  --bg-brand-primary: 45 8% 8%;  /* custom */
  --bg-brand-secondary: 0 0% 14.9%;  /* gray-800 */
  --bg-brand-tertiary: 47.9 95.8% 53.1%;  /* yellow-400 */
  --bg-brand-quaterary: 45.4 93.4% 47.5%;  /* yellow-500 */
  --bg-brand-quinary: 40.6 96.1% 40.4%;  /* yellow-600 */
  --bg-error-secondary: 0 70% 10%;  /* custom */
  --bg-error: 0 72.2% 50.6%;  /* red-600 */
  --bg-warning-secondary: 20.5 90.2% 16%;  /* custom */
  --bg-warning: 20.5 90.2% 48.2%;  /* orange-600 */
  --bg-success-secondary: 142.1 76.2% 16.3%;  /* custom */
  --bg-success: 142.1 76.2% 36.3%;  /* green-600 */
}
```

### 3.4 Border

```css
:root {
  --border-primary: 0 0% 83.1%;  /* gray-300 */
  --border-secondary: 0 0% 89.8%;  /* gray-200 */
  --border-tertiary: 0 0% 96.1%;  /* gray-100 */
  --border-brand: 45.4 93.4% 47.5%;  /* yellow-500 */
  --border-brand-solid: var(--border-brand);
  --border-error: 0 84.2% 60.2%;  /* red-500 */
  --border-warning: 24.6 95% 53.1%;  /* orange-500 */
  --border-success: 142.1 76.2% 36.3%;  /* green-600 */
}

.dark {
  --border-primary: 0 0% 25.1%;  /* gray-700 */
  --border-secondary: 0 0% 14.9%;  /* gray-800 */
  --border-tertiary: 0 0% 14.9%;  /* gray-800 */
  --border-brand: 45.4 93.4% 20.5%;  /* custom */
  --border-brand-solid: 45.4 93.4% 47.5%;  /* yellow-500 */
  --border-error: 0 90.6% 70.8%;  /* red-400 */
  --border-warning: 24.6 95% 30.1%;  /* custom */
  --border-success: 142.1 76.2% 36.3%;  /* green-600 */
}
```

### 3.5 Aliases shadcn (Compatibilidade)

Aliases que apontam para os tokens semânticos. **Não há overrides no `.dark`** — eles herdam automaticamente.

```css
:root {
  --border-brand-solid: var(--border-brand);
  --background: var(--bg-primary);
  --foreground: var(--text-primary);
  --card: var(--bg-primary);
  --card-foreground: var(--text-primary);
  --popover: var(--bg-primary);
  --popover-foreground: var(--text-primary);
  --primary: var(--bg-brand-quinary);
  --primary-foreground: var(--text-primary-on-brand);
  --secondary: var(--bg-secondary);
  --secondary-foreground: var(--text-secondary);
  --muted: var(--bg-tertiary);
  --muted-foreground: var(--text-tertiary);
  --accent: var(--bg-secondary-hover);
  --accent-foreground: var(--text-primary);
  --destructive: var(--bg-error);
  --destructive-foreground: var(--text-white);
  --border: var(--border-secondary);
  --input: var(--border-primary);
  --ring: var(--border-primary);
  --radius: 0.5rem;
  --sidebar-foreground: 240 5.3% 26.1%;
  --sidebar-primary-foreground: 0 0% 98%;
  --sidebar-accent-foreground: 240 5.9% 10%;
}

.dark {
  /* Nenhuma sobrescrita: os aliases herdam os valores dark dos tokens acima. */
}
```

| Alias shadcn | Token semântico |
| --- | --- |
| `--border-brand-solid` | `--border-brand` |
| `--background` | `--bg-primary` |
| `--foreground` | `--text-primary` |
| `--card` | `--bg-primary` |
| `--card-foreground` | `--text-primary` |
| `--popover` | `--bg-primary` |
| `--popover-foreground` | `--text-primary` |
| `--primary` | `--bg-brand-quinary` |
| `--primary-foreground` | `--text-primary-on-brand` |
| `--secondary` | `--bg-secondary` |
| `--secondary-foreground` | `--text-secondary` |
| `--muted` | `--bg-tertiary` |
| `--muted-foreground` | `--text-tertiary` |
| `--accent` | `--bg-secondary-hover` |
| `--accent-foreground` | `--text-primary` |
| `--destructive` | `--bg-error` |
| `--destructive-foreground` | `--text-white` |
| `--border` | `--border-secondary` |
| `--input` | `--border-primary` |
| `--ring` | `--border-primary` |

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

| Primitiva         | Contexto                | → Semântico                                      | Quando usar                                         |
| ----------------- | ----------------------- | ------------------------------------------------ | --------------------------------------------------- |
| `text-gray-400`   | text                    | `text-quinary`                                   | Texto desativado, ícones decorativos                |
| `text-gray-400`   | icon (svg/glyph)        | `text-fg-quaternary`                             | Ícones em estado padrão                             |
| `text-gray-500`   | text                    | `text-quaternary`                                | Labels muted, metadata                              |
| `text-gray-500`   | placeholder             | `text-placeholder`                               | Placeholder de inputs                               |
| `text-gray-500`   | icon                    | `text-fg-quaternary-hover`                       | Ícones em hover                                     |
| `text-gray-600`   | text                    | `text-tertiary`                                  | Body text, descrições, table headers                |
| `text-gray-600`   | icon                    | `text-fg-tertiary`                               | Ícones secundários                                  |
| `text-gray-700`   | text                    | `text-secondary`                                 | Labels, button tertiary, badge text                 |
| `text-gray-700`   | icon                    | `text-fg-secondary` ou `text-fg-secondary-solid` | Ícones primários (use `-solid` para nunca inverter) |
| `text-gray-700`   | icon hover              | `text-fg-tertiary-hover`                         | Hover de ícone tertiary                             |
| `text-gray-800`   | text                    | `text-secondary-hover`                           | Hover de texto secondary                            |
| `text-gray-800`   | icon                    | `text-fg-secondary-hover`                        | Hover de ícone secondary                            |
| `text-gray-900`   | text                    | `text-primary`                                   | Headings, names, titles, form values                |
| `text-gray-900`   | text fixo (não inverte) | `text-primary-solid`                             | Texto que deve permanecer escuro mesmo no dark      |
| `text-gray-900`   | icon                    | `text-fg-primary` ou `text-fg-primary-solid`     | Ícones de destaque                                  |
| `bg-gray-100`     | bg                      | `bg-tertiary` ou `bg-secondary-hover`            | Hover de itens, icon bg, avatar bg                  |
| `bg-gray-200`     | bg                      | `bg-quaternary`                                  | Skeleton, progress tracks, separators               |
| `bg-gray-200`     | border                  | `border-secondary`                               | Bordas de cards/tables/inputs                       |
| `bg-gray-300`     | border                  | `border-primary`                                 | Bordas de checkbox/radio/inputs                     |
| `bg-gray-950`     | bg invertido            | `bg-overlay` ou `bg-primary-solid`               | Tooltips, overlays                                  |
| `border-gray-100` | border                  | `border-tertiary`                                | Bordas mais suaves                                  |
| `border-gray-200` | border                  | `border-secondary`                               | Bordas padrão                                       |
| `border-gray-300` | border                  | `border-primary`                                 | Bordas de inputs em foco                            |

> **Atenção `dark:` no original:** todas as utilidades `dark:*-gray-*` devem ser **removidas**. Os tokens semânticos já fazem a inversão automaticamente. Exemplo: `text-gray-900 dark:text-gray-100` → apenas `text-primary`.

### 4.5.2 Brand (yellow)

| Primitiva                       | Contexto | → Semântico                                                | Quando usar                                 |
| ------------------------------- | -------- | ---------------------------------------------------------- | ------------------------------------------- |
| `bg-yellow-50` (`brand-50`)     | bg       | `bg-brand-primary`                                         | Badge default, icon wrappers, selected rows |
| `bg-yellow-100` (`brand-100`)   | bg       | `bg-brand-secondary`                                       | Badge hover, icon containers                |
| `bg-yellow-400` (`brand-400`)   | bg fixo  | `bg-brand-tertiary`                                        | Botão primary default (não inverte)         |
| `bg-yellow-500` (`brand-500`)   | bg fixo  | `bg-brand-quaterary`                                       | Status dots, progress bars                  |
| `text-yellow-500` (`brand-500`) | icon     | `text-fg-brand-secondary` ou `text-fg-brand-secondary-alt` | Loaders, ícones brand secundários           |
| `border-yellow-500`             | border   | `border-brand`                                             | Tertiary button, checkbox selected          |
| `bg-yellow-600` (`brand-600`)   | bg fixo  | `bg-brand-quinary`                                         | Checkbox/radio/switch checked, slider       |
| `text-yellow-600` (`brand-600`) | text     | `text-brand-tertiary`                                      | Required asterisk, helper icons             |
| `text-yellow-600` (`brand-600`) | icon     | `text-fg-brand-primary` ou `text-fg-brand-primary-alt`     | Ícones brand primários                      |
| `border-yellow-600`             | border   | `border-brand` (ou `border-brand-solid`)                   | Slider thumb, chart strokes                 |
| `bg-yellow-700` (`brand-700`)   | bg       | `bg-brand-quinary`                                         | Não há passo de hover; reusar o sólido      |
| `text-yellow-700` (`brand-700`) | text     | `text-brand-secondary`                                     | Badge text, tertiary buttons, card titles   |
| `text-yellow-800` (`brand-800`) | text     | `text-brand-secondary`                                     | Não há passo `-hover`                       |
| `text-yellow-900` (`brand-900`) | text     | `text-brand-primary`                                       | Selected item labels, radio selected text   |

### 4.5.3 Error (red)

| Primitiva                    | Contexto | → Semântico               | Quando usar                                |
| ---------------------------- | -------- | ------------------------- | ------------------------------------------ |
| `bg-red-50` (`error-50`)     | bg       | `bg-error-secondary`      | Badge destructive, hover de delete         |
| `bg-red-100` (`error-100`)   | bg       | `bg-error-secondary`      | Confirmation dialogs, destructive wrappers |
| `border-red-300`             | border   | `border-error`            | Não há `border-error-subtle`                |
| `text-red-500` (`error-500`) | icon     | `text-fg-error-secondary` | Ícones error secundários                   |
| `border-red-500`             | border   | `border-error`            | Form input error, ring focus error         |
| `bg-red-600` (`error-600`)   | bg fixo  | `bg-error`                | Botão destructive                          |
| `text-red-600` (`error-600`) | text     | `text-error-primary`      | Hint text de erro, dialog icons            |
| `text-red-600` (`error-600`) | icon     | `text-fg-error-primary`   | Ícones destructive                         |
| `bg-red-700` (`error-700`)   | bg fixo  | `bg-error`                | Não há passo de hover; reusar o sólido      |

### 4.5.4 Warning (orange)

| Primitiva                         | Contexto | → Semântico                 | Quando usar                              |
| --------------------------------- | -------- | --------------------------- | ---------------------------------------- |
| `bg-orange-100` (`warning-100`)   | bg       | `bg-warning-secondary`      | Badge hover, confirmation dialog icons   |
| `text-orange-500` (`warning-500`) | icon     | `text-fg-warning-secondary` | Ícones warning secundários               |
| `bg-orange-600` (`warning-600`)   | bg fixo  | `bg-warning`                | Botão warning hover, status step pending |
| `text-orange-600` (`warning-600`) | text     | `text-warning-primary`      | Badge warning text, contestacao text     |
| `text-orange-600` (`warning-600`) | icon     | `text-fg-warning-primary`   | Alert icons, contestacao icons           |

> **Bordas warning:** `border-warning` existe nos **dois** temas. Mapear `border-orange-*` / `border-amber-*` / `border-warning-*` direto para `border-warning` — o workaround antigo de `border-secondary` neutro ou arbitrary value está obsoleto.

> **Sem mapeamento direto para `warning-25`, `-200`, `-300`, `-500` (bg) e `-700` (text):** se houver uso, mapear contextualmente:
> - `bg-warning-25/50` → `bg-warning-secondary` (única surface sutil da família)
> - `bg-warning-500` → `bg-warning` (sólido)
> - `text-warning-700` → `text-warning-primary` (não há passo mais escuro)

### 4.5.5 Success (emerald/green)

| Primitiva                        | Contexto | → Semântico                 | Quando usar                            |
| -------------------------------- | -------- | --------------------------- | -------------------------------------- |
| `bg-green-100` (`success-100`)   | bg       | `bg-success-secondary`      | Badge hover                            |
| `text-green-500` (`success-500`) | icon     | `text-fg-success-secondary` | Status dots, button success            |
| `bg-green-600` (`success-600`)   | bg fixo  | `bg-success`                | Completed steps, progress, check icons |
| `text-green-600` (`success-600`) | text     | `text-success-primary`      | Email success, positive values         |
| `text-green-600` (`success-600`) | icon     | `text-fg-success-primary`   | Alert icons, check icons               |

> **Bordas success:** `border-success` existe nos **dois** temas. Mapear `border-green-*` / `border-emerald-*` / `border-success-*` direto para `border-success` — o workaround antigo de `border-secondary` neutro ou arbitrary value está obsoleto.

> **Sem mapeamento direto para `success-25`, `-200`, `-300`, `-700`:** se houver uso, mapear contextualmente:
> - `bg-success-25/50` → `bg-success-secondary` (única surface sutil da família)
> - `text-success-700` → `text-success-primary` (não há passo mais escuro)

### 4.5.6 Primitivas diretas no `vistoriador`

O projeto `vistoriador` usa primitivas Tailwind diretas (`red-*`, `yellow-*`, `green-*`, `blue-*`, `amber-*`, `indigo-*`). Aplicar as mesmas regras das tabelas acima:

| Primitiva direta        | Mapeamento                                                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `red-*`                 | Usar tabela 4.5.3                                                                                                                           |
| `orange-*` / `amber-*`  | Usar tabela 4.5.4                                                                                                                           |
| `yellow-*`              | Usar tabela 4.5.2 (brand)                                                                                                                   |
| `green-*` / `emerald-*` | Usar tabela 4.5.5                                                                                                                           |
| `blue-*` / `indigo-*`   | **Sem token correspondente no Figma.** Decidir caso a caso: status info pode reusar `text-tertiary` (neutro) ou exigir extensão da palette. |

### 4.5.7 Diretrizes de escolha entre `text-*`, `fg-*`, `bg-*`, `border-*`

Quando uma primitiva pode mapear para múltiplas categorias, decida pelo **propósito**:

- **`text-*`** → texto literal (parágrafos, headings, labels, valores)
- **`fg-*`** → ícones SVG, glifos, controles dentro de inputs (caret, chevron de select), seletores de toggle/checkbox/radio
- **`bg-*`** → preenchimento de containers (cards, badges, buttons)
- **`border-*`** → contornos visíveis (1px-2px stroke)

**Exemplo decisivo:** um chevron `<ChevronDown />` dentro de um botão era `text-gray-700`. Como é um SVG (ícone), use `text-fg-secondary`, **não** `text-secondary`.

### 4.5.8 Tokens com sufixo `-solid` (não invertem)

Usados em casos onde o valor light deve persistir mesmo no dark mode:

- `text-primary-solid`, `text-fg-primary-solid` → texto/ícone que precisa ser sempre escuro (ex: rótulo sobre fundo amarelo fixo)
- `text-fg-secondary-solid` → ícone secundário fixo
- `bg-primary-solid` → fundo escuro fixo (tooltip/overlay invertido)
- `border-brand-solid` → borda brand que permanece âmbar vivo no dark (o `border-brand` puro é sutil lá)

**Atenção:** o sufixo `-solid` **não** existe nas surfaces de brand e status. As que não invertem já têm nome próprio e são fixas por definição:

| Não inverte | Valor | Papel |
| --- | --- | --- |
| `bg-brand-tertiary` | `yellow-400` | amarelo fixo |
| `bg-brand-quaterary` | `yellow-500` | amarelo fixo |
| `bg-brand-quinary` | `yellow-600` | brand sólido (botão primário) |
| `bg-error` | `red-600` | error sólido |
| `bg-warning` | `orange-600` | warning sólido |
| `bg-success` | `green-600` | success sólido |

Não existem `bg-brand-solid`, `bg-error-solid`, `bg-warning-solid`, `bg-success-solid`, `bg-brand-tertiary-solid` nem `bg-brand-quaterary-solid`.

### 4.5.9 Variantes `-on-brand`

Usar quando o texto/ícone está sobre um fundo `bg-brand-*`:

- `text-primary-on-brand` → texto principal sobre brand-solid (geralmente branco)

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
<button className="bg-brand-quinary text-primary-on-brand">
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
<button className="bg-error text-white">
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

**Depois:**
```tsx
<span className="bg-success-secondary text-success-primary border border-success">
  Ativo
</span>
```

> ✅ **Resolvido:** `border-success` e `border-warning` agora existem nos dois temas. O workaround de `border-secondary` neutro ou de arbitrary value `border-[hsl(var(--bg-success))]` está obsoleto.

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

### 6.1 Escopo por utility

O preset **não** registra um único mapa `colors`. Ele registra um mapa **por utility**, para que
`text-primary` e `bg-primary` possam apontar para CSS vars diferentes sem colidir:

```js
// packages/ui/tailwind.config.js — trecho
theme: {
  extend: {
    colors:          { ...shadcnAliases, ...sidebarColors, ...chartColors },
    textColor:       textTokens,
    backgroundColor: bgTokens,
    borderColor:     borderTokens,
    ringColor:       borderTokens,
    fill:            textTokens,
    stroke:          textTokens,
  },
}
```

Consequências práticas:

- `fill-*` e `stroke-*` usam o mapa de **texto**, então não existe `fill-success` (sólido). Para
  preencher um shape com um sólido de status, use arbitrary value: `fill-[hsl(var(--bg-success))]`.
- `border-*` e `ring-*` compartilham o mesmo mapa — todo token de border serve como ring.
- Não há `bg-fg-*` nem background `text-*`. Errar o escopo gera **classe morta** (nenhum CSS).

> **Não duplique os valores aqui.** A fonte de verdade é `packages/ui/src/global.css` (valores) +
> `packages/ui/tailwind.config.js` (nomes de classe). Este documento já defasou uma vez por copiar
> os dois; as seções 3.x são geradas a partir do `global.css`.

### 6.2 Classes expostas hoje

**`text-*` / `fill-*` / `stroke-*`** (37 nomes):

- `text-brand-primary`
- `text-brand-secondary`
- `text-brand-tertiary`
- `text-error-primary`
- `text-fg-brand-primary`
- `text-fg-brand-primary-alt`
- `text-fg-brand-secondary`
- `text-fg-brand-secondary-alt`
- `text-fg-brand-secondary-hover`
- `text-fg-error-primary`
- `text-fg-error-secondary`
- `text-fg-primary`
- `text-fg-primary-solid`
- `text-fg-quaternary`
- `text-fg-quaternary-hover`
- `text-fg-secondary`
- `text-fg-secondary-hover`
- `text-fg-secondary-solid`
- `text-fg-success-primary`
- `text-fg-success-secondary`
- `text-fg-tertiary`
- `text-fg-tertiary-hover`
- `text-fg-warning-primary`
- `text-fg-warning-secondary`
- `text-fg-white`
- `text-placeholder`
- `text-primary`
- `text-primary-on-brand`
- `text-primary-solid`
- `text-quaternary`
- `text-quinary`
- `text-secondary`
- `text-secondary-hover`
- `text-success-primary`
- `text-tertiary`
- `text-warning-primary`
- `text-white`

**`bg-*`** (19 nomes):

- `bg-brand-primary`
- `bg-brand-quaterary`
- `bg-brand-quinary`
- `bg-brand-secondary`
- `bg-brand-tertiary`
- `bg-error`
- `bg-error-secondary`
- `bg-overlay`
- `bg-primary`
- `bg-primary-solid`
- `bg-quaternary`
- `bg-quinary`
- `bg-secondary`
- `bg-secondary-hover`
- `bg-success`
- `bg-success-secondary`
- `bg-tertiary`
- `bg-warning`
- `bg-warning-secondary`

**`border-*` / `ring-*`** (8 nomes):

- `border-brand`
- `border-brand-solid`
- `border-error`
- `border-primary`
- `border-secondary`
- `border-success`
- `border-tertiary`
- `border-warning`

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

| Arquivo              | Mudanças                                                |
| -------------------- | ------------------------------------------------------- |
| `src/global.css`     | Adicionar todos os tokens semânticos (seções 3.1 a 3.5) |
| `tailwind.config.js` | Atualizar mapeamentos de cores (seção 6.1)              |

#### Componentes a migrar:
- `button.tsx`, `badge.tsx`, `table.tsx`, `tooltip.tsx`, `dialog.tsx`
- `label.tsx`, `input.tsx`, `textarea.tsx`, `select.tsx`
- `checkbox.tsx`, `radio-group.tsx`, `switch.tsx`
- `progress.tsx`, `slider.tsx`, `dot.tsx`, `hint-text.tsx`
- `avatar.tsx`, `carousel.tsx`, `mobile-tab-list.tsx`

### 9.2 Projetos Consumidores

| Projeto           | Estimativa de Substituições |
| ----------------- | --------------------------- |
| inmediam_front    | ~3000                       |
| inmediam_clientes | ~900                        |
| vistoriador       | ~1100                       |
