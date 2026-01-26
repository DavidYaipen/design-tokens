import { useTheme, colorPalettes } from '@oyaipen/design-tokens/react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  Menu,
  X,
} from '@oyaipen/design-tokens/react';

function App() {
  const { themeName, toggleTheme } = useTheme();

  const palettes = ['gray', 'blue', 'sky', 'purple', 'red', 'yellow'] as const;
  const shades = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180] as const;

  const icons = [
    { Icon: ArrowRight, name: 'ArrowRight' },
    { Icon: Check, name: 'Check' },
    { Icon: ChevronDown, name: 'ChevronDown' },
    { Icon: Heart, name: 'Heart' },
    { Icon: Menu, name: 'Menu' },
    { Icon: X, name: 'X' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-100 to-purple-100 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-2">Design Tokens</h1>
          <p className="text-lg opacity-90 mb-6">
            React + Tailwind CSS usando @oyaipen/design-tokens
          </p>
          <button
            onClick={toggleTheme}
            className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            {themeName === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-12">
        {/* Buttons */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-border-primary">
            Botones
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-interactive-primary hover:bg-interactive-primaryHover text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
              Primary <ArrowRight size={16} />
            </button>
            <button className="bg-interactive-secondary hover:bg-interactive-secondaryHover border border-border-primary px-6 py-3 rounded-lg font-medium transition-colors">
              Secondary
            </button>
            <button className="bg-status-success hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
              <Check size={16} /> Success
            </button>
            <button className="bg-status-error hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
              <X size={16} /> Danger
            </button>
          </div>
        </section>

        {/* Alerts */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-border-primary">
            Alertas
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-background-success text-text-success border border-border-success">
              <Check size={20} />
              <span>Operacion completada exitosamente</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-background-error text-text-error border border-border-error">
              <X size={20} />
              <span>Ha ocurrido un error</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-background-warning text-text-warning border border-border-warning">
              <ChevronDown size={20} />
              <span>Advertencia: revise los datos</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-background-info text-text-info border border-border-info">
              <ArrowRight size={20} />
              <span>Informacion importante</span>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-border-primary">
            Tarjetas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background-secondary border border-border-secondary rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Colores Centralizados</h3>
              <p className="text-text-secondary">
                Todos los colores se definen una vez en{' '}
                <code className="bg-background-tertiary px-2 py-1 rounded text-sm">
                  design.config.ts
                </code>
              </p>
            </div>
            <div className="bg-background-secondary border border-border-secondary rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Iconos Unificados</h3>
              <p className="text-text-secondary mb-4">
                SVG a componentes React/Vue automaticamente
              </p>
              <div className="flex gap-4 text-interactive-primary">
                <Heart size={24} />
                <Menu size={24} />
                <Check size={24} />
              </div>
            </div>
            <div className="bg-background-secondary border border-border-secondary rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Temas Dinamicos</h3>
              <p className="text-text-secondary">
                Modo claro/oscuro con persistencia automatica
              </p>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-border-primary">
            Paleta de Colores
          </h2>
          <div className="space-y-3">
            {palettes.map((palette) => (
              <div key={palette} className="flex items-center gap-4">
                <span className="w-16 font-medium capitalize">{palette}</span>
                <div className="flex flex-1 gap-0.5">
                  {shades.map((shade) => (
                    <div
                      key={shade}
                      className="flex-1 h-10 rounded-sm cursor-pointer hover:scale-y-150 transition-transform"
                      style={{ backgroundColor: colorPalettes[palette][shade] }}
                      title={`${palette}-${shade}: ${colorPalettes[palette][shade]}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Icons */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-border-primary">
            Iconos
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {icons.map(({ Icon, name }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 p-4 bg-background-secondary rounded-lg hover:bg-background-tertiary transition-colors"
              >
                <Icon size={32} />
                <span className="text-sm text-text-secondary">{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-border-primary">
            Tipografia
          </h2>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Heading 1 - Display</h1>
            <h2 className="text-3xl font-semibold">Heading 2 - Title</h2>
            <h3 className="text-xl font-medium">Heading 3 - Subtitle</h3>
            <p>
              Paragraph - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-text-secondary">
              Secondary text - Ut enim ad minim veniam, quis nostrud.
            </p>
            <p className="text-text-link cursor-pointer hover:underline">
              Link text - Click me
            </p>
          </div>
        </section>

        {/* Spacing */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-border-primary">
            Espaciado
          </h2>
          <div className="flex flex-wrap gap-6">
            {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <div
                  className="bg-interactive-primary rounded"
                  style={{ width: `${s * 4}px`, height: `${s * 4}px` }}
                />
                <span className="text-xs text-text-secondary">
                  {s}: {s * 4}px
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-border-primary">
            Sombras
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {['shadow-sm', 'shadow', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl'].map(
              (shadow) => (
                <div
                  key={shadow}
                  className={`h-20 bg-background-primary rounded-lg flex items-center justify-center text-text-secondary ${shadow}`}
                >
                  {shadow.replace('shadow-', '')}
                </div>
              )
            )}
          </div>
        </section>

        {/* Code Examples */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-border-primary">
            Como Usar
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background-secondary border border-border-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">tailwind.config.ts</h3>
              <pre className="bg-background-tertiary p-4 rounded-lg text-sm overflow-x-auto font-mono">
{`import { tailwindPreset } from '@oyaipen/design-tokens/tailwind';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [tailwindPreset],
};`}
              </pre>
            </div>
            <div className="bg-background-secondary border border-border-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Uso en componentes</h3>
              <pre className="bg-background-tertiary p-4 rounded-lg text-sm overflow-x-auto font-mono">
{`<button className="
  bg-interactive-primary
  hover:bg-interactive-primaryHover
  text-white px-6 py-3 rounded-lg
">
  Click me
</button>`}
              </pre>
            </div>
            <div className="bg-background-secondary border border-border-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Iconos</h3>
              <pre className="bg-background-tertiary p-4 rounded-lg text-sm overflow-x-auto font-mono">
{`import { Check, Heart } from '@oyaipen/design-tokens/react';

<Check size={24} className="text-status-success" />
<Heart size={24} className="text-red-80" />`}
              </pre>
            </div>
            <div className="bg-background-secondary border border-border-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Theme Hook</h3>
              <pre className="bg-background-tertiary p-4 rounded-lg text-sm overflow-x-auto font-mono">
{`import { useTheme } from '@oyaipen/design-tokens/react';

const { themeName, toggleTheme } = useTheme();

<button onClick={toggleTheme}>
  {themeName === 'light' ? 'Dark' : 'Light'}
</button>`}
              </pre>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background-secondary border-t border-border-primary py-6 text-center text-text-secondary">
        @oyaipen/design-tokens - React + Tailwind Demo
      </footer>
    </div>
  );
}

export default App;
