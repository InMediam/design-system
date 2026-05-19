/** @type {import('tailwindcss').Config} */
module.exports = function (app, options) {
  // ---------------------------------------------------------------
  // Semantic token maps. Each utility (text-, bg-, border-, ring-,
  // fill-, stroke-) gets its own scoped set so `text-primary` and
  // `bg-primary` can resolve to DIFFERENT CSS variables without
  // colliding on the same flat key.
  // ---------------------------------------------------------------
  const textTokens = {
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

    // Foreground tokens are exposed through `text-fg-*` so icons keep
    // the natural `text-{color}` Tailwind utility for `currentColor`.
    "fg-primary": "hsl(var(--fg-primary))",
    "fg-primary-solid": "hsl(var(--fg-primary-solid))",
    "fg-secondary": "hsl(var(--fg-secondary))",
    "fg-secondary-hover": "hsl(var(--fg-secondary-hover))",
    "fg-secondary-solid": "hsl(var(--fg-secondary-solid))",
    "fg-tertiary": "hsl(var(--fg-tertiary))",
    "fg-tertiary-hover": "hsl(var(--fg-tertiary-hover))",
    "fg-quaternary": "hsl(var(--fg-quaternary))",
    "fg-quaternary-hover": "hsl(var(--fg-quaternary-hover))",
    "fg-white": "hsl(var(--fg-white))",
    "fg-brand-primary": "hsl(var(--fg-brand-primary))",
    "fg-brand-primary-alt": "hsl(var(--fg-brand-primary-alt))",
    "fg-brand-secondary": "hsl(var(--fg-brand-secondary))",
    "fg-brand-secondary-alt": "hsl(var(--fg-brand-secondary-alt))",
    "fg-brand-secondary-hover": "hsl(var(--fg-brand-secondary-hover))",
    "fg-error-primary": "hsl(var(--fg-error-primary))",
    "fg-error-secondary": "hsl(var(--fg-error-secondary))",
    "fg-warning-primary": "hsl(var(--fg-warning-primary))",
    "fg-warning-secondary": "hsl(var(--fg-warning-secondary))",
    "fg-success-primary": "hsl(var(--fg-success-primary))",
    "fg-success-secondary": "hsl(var(--fg-success-secondary))",
  }

  const bgTokens = {
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
    "brand-tertiary": "hsl(var(--bg-brand-tertiary))",
    "brand-quaterary": "hsl(var(--bg-brand-quaterary))",
    "brand": "hsl(var(--bg-brand))",
    "brand-hover": "hsl(var(--bg-brand-hover))",
    "brand-section": "hsl(var(--bg-brand-section))",
    "brand-section-subtle": "hsl(var(--bg-brand-section-subtle))",
    "error-primary": "hsl(var(--bg-error-primary))",
    "error-secondary": "hsl(var(--bg-error-secondary))",
    "error": "hsl(var(--bg-error))",
    "error-hover": "hsl(var(--bg-error-hover))",
    "warning-primary": "hsl(var(--bg-warning-primary))",
    "warning-secondary": "hsl(var(--bg-warning-secondary))",
    "warning": "hsl(var(--bg-warning))",
    "success-primary": "hsl(var(--bg-success-primary))",
    "success-secondary": "hsl(var(--bg-success-secondary))",
    "success": "hsl(var(--bg-success))",
  }

  const borderTokens = {
    primary: "hsl(var(--border-primary))",
    secondary: "hsl(var(--border-secondary))",
    "secondary-alt": "hsl(var(--border-secondary-alt) / 0.1)",
    tertiary: "hsl(var(--border-tertiary))",
    brand: "hsl(var(--border-brand))",
    "brand-alt": "hsl(var(--border-brand-alt))",
    error: "hsl(var(--border-error))",
    "error-subtle": "hsl(var(--border-error-subtle))",
    warning: "hsl(var(--border-warning))",
  }

  // Shadcn alias colors. These still flow through `colors` so legacy
  // shadcn primitives that reference `bg-card`, `text-muted-foreground`,
  // `border`, `ring-ring` etc. keep working. The new semantic tokens
  // above take precedence in each per-utility scope.
  const shadcnAliases = {
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    destructive: {
      DEFAULT: "hsl(var(--destructive))",
      foreground: "hsl(var(--destructive-foreground))",
    },
    muted: {
      DEFAULT: "hsl(var(--muted))",
      foreground: "hsl(var(--muted-foreground))",
    },
    accent: {
      DEFAULT: "hsl(var(--accent))",
      foreground: "hsl(var(--accent-foreground))",
    },
    popover: {
      DEFAULT: "hsl(var(--popover))",
      foreground: "hsl(var(--popover-foreground))",
    },
    card: {
      DEFAULT: "hsl(var(--card))",
      foreground: "hsl(var(--card-foreground))",
    },
    "primary-foreground": "hsl(var(--primary-foreground))",
    "secondary-foreground": "hsl(var(--secondary-foreground))",
    "destructive-foreground": "hsl(var(--destructive-foreground))",
  }

  const sidebarColors = {
    sidebar: "hsl(var(--sidebar))",
    "sidebar-background": "hsl(var(--sidebar-background))",
    "sidebar-foreground": "hsl(var(--sidebar-foreground))",
    "sidebar-border": "hsl(var(--sidebar-border))",
    "sidebar-ring": "hsl(var(--sidebar-ring))",
    "sidebar-primary": "hsl(var(--sidebar-primary))",
    "sidebar-primary-foreground": "hsl(var(--sidebar-primary-foreground))",
    "sidebar-accent": "hsl(var(--sidebar-accent))",
    "sidebar-accent-foreground": "hsl(var(--sidebar-accent-foreground))",
  }

  const chartColors = {
    "chart-1": "hsl(var(--chart-1))",
    "chart-2": "hsl(var(--chart-2))",
    "chart-3": "hsl(var(--chart-3))",
    "chart-4": "hsl(var(--chart-4))",
    "chart-5": "hsl(var(--chart-5))",
  }

  let config = {
    content: [
      `../../apps/${app}/src/index.html`,
      `../../apps/${app}/src/**/*.{ts,tsx,html,stories.tsx}`,
      '../../packages/*/src/**/*.{ts,tsx,html,stories.tsx}',
      '../../interface/**/*.{ts,tsx,html,stories.tsx}',

      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',

      '../../pages/**/*.{ts,tsx}',
      '../../components/**/*.{ts,tsx}',
      '../../app/**/*.{ts,tsx}',
      '../../src/**/*.{ts,tsx}',

      'node_modules/@inmediam/ui/dist/**/*.js'
    ],
    darkMode: ['class'],
    theme: {
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontSize: {
        'tiny': '.65rem',
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem'
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif']
        },
        lineHeight: {
          '4.5': '18px',
        },
        colors: {
          ...shadcnAliases,
          ...sidebarColors,
          ...chartColors,
        },
        textColor: textTokens,
        backgroundColor: bgTokens,
        borderColor: borderTokens,
        ringColor: borderTokens,
        fill: textTokens,
        stroke: textTokens,
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [require("tailwindcss-animate")]
  };
  return config;
};
