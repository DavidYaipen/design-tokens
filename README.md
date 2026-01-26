# @oyaipen/design-tokens

Sistema de diseño unificado para React, Vue y Tailwind CSS.

## Instalación

```bash
npm install @oyaipen/design-tokens
```

## Uso con React + Tailwind

### 1. Configurar Tailwind

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';
import { tailwindPreset } from '@oyaipen/design-tokens/tailwind';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [tailwindPreset],
} satisfies Config;
```

### 2. Importar CSS del tema

```tsx
// main.tsx
import { ThemeProvider } from '@oyaipen/design-tokens/react';
import '@oyaipen/design-tokens/css/themes';
import './index.css'; // tu archivo con @tailwind directives
```

### 3. Usar clases de Tailwind

```tsx
// Colores semánticos
<div className="bg-background-primary text-text-primary">
  <button className="bg-interactive-primary hover:bg-interactive-primaryHover">
    Click
  </button>
</div>

// Paletas de color
<div className="bg-blue-100 text-gray-150" />

// Alertas
<div className="bg-background-success text-text-success border-border-success" />
```

### 4. Iconos

```tsx
import { Check, Heart, ArrowRight } from '@oyaipen/design-tokens/react';

<Check size={24} className="text-status-success" />
<Heart size={24} />
```

### 5. Tema dinámico

```tsx
import { useTheme } from '@oyaipen/design-tokens/react';

function ThemeToggle() {
  const { themeName, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{themeName}</button>;
}
```

## Uso con Vue

```typescript
// main.ts
import { createApp } from 'vue';
import { ThemePlugin } from '@oyaipen/design-tokens/vue';
import '@oyaipen/design-tokens/css/themes';

const app = createApp(App);
app.use(ThemePlugin);
```

```vue
<script setup>
import { useTheme } from '@oyaipen/design-tokens/vue';
import { Check } from '@oyaipen/design-tokens/vue';

const { toggleTheme } = useTheme();
</script>

<template>
  <Check :size="24" />
  <button @click="toggleTheme">Toggle</button>
</template>
```

## Configuración

Edita `design.config.ts` para personalizar el sistema:

```typescript
const config = {
  colors: {
    palettes: {
      gray: { 5: '#FAFAFA', /* ... */ 180: '#0A0A0A' },
      blue: { /* ... */ },
      // Agregar nuevas paletas
    },
    semantic: {
      light: { text: { primary: { palette: 'gray', shade: 150 } } },
      dark: { /* ... */ }
    }
  },
  // ...
};
```

## Comandos

```bash
npm run add:color          # Agregar paleta de color
npm run add:icon           # Agregar icono SVG
npm run generate           # Regenerar tokens
npm run build              # Compilar librería
```

## Demo

```bash
cd demo
npm install
npm run dev
```

## Estructura

```
design-tokens/
├── design.config.ts       # Configuración central
├── src/
│   ├── tokens/core/       # Tokens (colores, tipografía, etc.)
│   ├── react/             # ThemeProvider, hooks, iconos
│   ├── vue/               # Plugin, composables, iconos
│   ├── tailwind/          # Preset para Tailwind
│   └── css/               # CSS variables
├── scripts/               # Generadores
└── demo/                  # Demo React + Tailwind
```

## Clases Tailwind disponibles

### Colores semánticos

- `text-{primary|secondary|tertiary|inverse|link|success|error|warning|info}`
- `bg-background-{primary|secondary|tertiary|inverse|success|error|warning|info}`
- `border-border-{primary|secondary|focus|success|error|warning|info}`
- `bg-interactive-{primary|primaryHover|primaryActive|secondary|secondaryHover}`
- `bg-status-{success|error|warning|info}`

### Paletas

- `{bg|text|border}-{gray|blue|sky|purple|red|yellow}-{5-180}`

## Licencia

MIT
