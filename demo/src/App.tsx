import { useState } from 'react';
import { useTheme, colorPalettes } from '@smcore/corex-design/react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  Menu,
  X,
} from '@smcore/corex-design/react';

type Section = 'colors' | 'typography' | 'spacing' | 'shadows' | 'animations' | 'zindex' | 'icons' | 'components' | 'usage';

function App() {
  const { themeName, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<Section>('colors');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const palettes = ['gray', 'blue', 'skyBlue', 'purple', 'red', 'yellow', 'green', 'orange', 'cyan'] as const;
  const shades = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180] as const;

  const icons = [
    { Icon: ArrowRight, name: 'ArrowRight' },
    { Icon: Check, name: 'Check' },
    { Icon: ChevronDown, name: 'ChevronDown' },
    { Icon: Heart, name: 'Heart' },
    { Icon: Menu, name: 'Menu' },
    { Icon: X, name: 'X' },
  ];

  const sections: { id: Section; label: string }[] = [
    { id: 'colors', label: 'Colores' },
    { id: 'typography', label: 'Tipografia' },
    { id: 'spacing', label: 'Espaciado' },
    { id: 'shadows', label: 'Sombras' },
    { id: 'animations', label: 'Animaciones' },
    { id: 'zindex', label: 'Z-Index' },
    { id: 'icons', label: 'Iconos' },
    { id: 'components', label: 'Componentes' },
    { id: 'usage', label: 'Como Usar' },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const CodeBlock = ({ code, title }: { code: string; title?: string }) => (
    <div className="bg-background-secondary border border-border-secondary rounded-xl overflow-hidden">
      {title && (
        <div className="px-4 py-2 border-b border-border-secondary flex justify-between items-center">
          <span className="text-sm font-medium">{title}</span>
          <button
            onClick={() => copyToClipboard(code)}
            className="text-xs px-2 py-1 bg-background-tertiary rounded hover:bg-interactive-secondary transition-colors"
          >
            {copiedText === code ? 'Copiado!' : 'Copiar'}
          </button>
        </div>
      )}
      <pre className="p-4 text-sm overflow-x-auto font-mono bg-background-tertiary">
        {code}
      </pre>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-100 to-purple-100 text-white py-8 px-6 sticky top-0 z-header">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">@smcore/corex-design</h1>
            <p className="text-sm opacity-90">Documentacion Interactiva</p>
          </div>
          <button
            onClick={toggleTheme}
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-colors duration-fast"
          >
            {themeName === 'light' ? '🌙 Oscuro' : '☀️ Claro'}
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <nav className="w-56 bg-background-secondary border-r border-border-primary p-4 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto hidden md:block">
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-fast ${
                    activeSection === section.id
                      ? 'bg-interactive-primary text-white'
                      : 'hover:bg-background-tertiary text-text-secondary'
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-header bg-background-primary border-t border-border-primary p-2 overflow-x-auto">
          <div className="flex gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                  activeSection === section.id
                    ? 'bg-interactive-primary text-white'
                    : 'bg-background-secondary text-text-secondary'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 pb-20 md:pb-6 max-w-5xl">
          {/* Colors Section */}
          {activeSection === 'colors' && (
            <section className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-2">Colores</h2>
                <p className="text-text-secondary">
                  Sistema de colores con paletas de 18 tonos y colores semanticos para UI.
                </p>
              </div>

              {/* Semantic Colors */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Colores Semanticos</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'text-primary', class: 'bg-background-secondary text-text-primary' },
                    { name: 'text-secondary', class: 'bg-background-secondary text-text-secondary' },
                    { name: 'text-link', class: 'bg-background-secondary text-text-link' },
                    { name: 'bg-primary', class: 'bg-background-primary border border-border-primary' },
                    { name: 'bg-secondary', class: 'bg-background-secondary' },
                    { name: 'bg-tertiary', class: 'bg-background-tertiary' },
                    { name: 'interactive-primary', class: 'bg-interactive-primary text-white' },
                    { name: 'status-success', class: 'bg-status-success text-white' },
                    { name: 'status-error', class: 'bg-status-error text-white' },
                    { name: 'status-warning', class: 'bg-status-warning text-white' },
                    { name: 'status-info', class: 'bg-status-info text-white' },
                  ].map((color) => (
                    <div
                      key={color.name}
                      className={`p-4 rounded-lg cursor-pointer hover:scale-105 transition-transform ${color.class}`}
                      onClick={() => copyToClipboard(color.name)}
                      title="Click para copiar"
                    >
                      <span className="text-sm font-medium">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Palettes */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Paletas de Color</h3>
                <div className="space-y-4">
                  {palettes.map((palette) => (
                    <div key={palette}>
                      <div className="flex items-center gap-4 mb-2">
                        <span className="w-16 font-medium capitalize">{palette}</span>
                      </div>
                      <div className="flex gap-0.5">
                        {shades.map((shade) => (
                          <div
                            key={shade}
                            className="flex-1 h-12 rounded cursor-pointer hover:scale-y-125 transition-transform relative group"
                            style={{ backgroundColor: colorPalettes[palette][shade] }}
                            onClick={() => copyToClipboard(`${palette}-${shade}`)}
                            title={`${palette}-${shade}: ${colorPalettes[palette][shade]}`}
                          >
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-xs bg-black/50 text-white px-1 rounded">
                                {shade}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <CodeBlock
                title="Uso de colores"
                code={`// Colores semanticos
<div className="bg-background-primary text-text-primary" />
<div className="bg-interactive-primary hover:bg-interactive-primaryHover" />
<div className="bg-status-success text-white" />

// Paletas directas
<div className="bg-blue-80 text-white" />
<div className="text-gray-100" />`}
              />
            </section>
          )}

          {/* Typography Section */}
          {activeSection === 'typography' && (
            <section className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-2">Tipografia</h2>
                <p className="text-text-secondary">
                  Sistema tipografico con escalas de tamaño, pesos y alturas de linea.
                </p>
              </div>

              {/* Font Sizes */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Tamaños</h3>
                <div className="space-y-4 bg-background-secondary p-6 rounded-xl">
                  {[
                    { class: 'text-xs', label: 'xs (12px)' },
                    { class: 'text-sm', label: 'sm (14px)' },
                    { class: 'text-base', label: 'base (16px)' },
                    { class: 'text-lg', label: 'lg (18px)' },
                    { class: 'text-xl', label: 'xl (20px)' },
                    { class: 'text-2xl', label: '2xl (24px)' },
                    { class: 'text-3xl', label: '3xl (30px)' },
                    { class: 'text-4xl', label: '4xl (36px)' },
                    { class: 'text-5xl', label: '5xl (48px)' },
                  ].map((size) => (
                    <div key={size.class} className="flex items-baseline gap-4">
                      <span className="w-28 text-sm text-text-secondary">{size.label}</span>
                      <span className={size.class}>Design Tokens</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Font Weights */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Pesos</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    { class: 'font-light', label: 'light (300)' },
                    { class: 'font-normal', label: 'normal (400)' },
                    { class: 'font-medium', label: 'medium (500)' },
                    { class: 'font-semibold', label: 'semibold (600)' },
                    { class: 'font-bold', label: 'bold (700)' },
                  ].map((weight) => (
                    <div key={weight.class} className="bg-background-secondary p-4 rounded-lg text-center">
                      <span className={`text-lg ${weight.class}`}>Aa</span>
                      <p className="text-xs text-text-secondary mt-2">{weight.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <CodeBlock
                title="Uso de tipografia"
                code={`<h1 className="text-5xl font-bold">Titulo</h1>
<p className="text-base font-normal">Parrafo normal</p>
<span className="text-sm text-text-secondary">Texto secundario</span>
<code className="font-mono text-sm">codigo</code>`}
              />
            </section>
          )}

          {/* Spacing Section */}
          {activeSection === 'spacing' && (
            <section className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-2">Espaciado</h2>
                <p className="text-text-secondary">
                  Escala de espaciado basada en multiplos de 4px.
                </p>
              </div>

              <div className="bg-background-secondary p-6 rounded-xl">
                <div className="space-y-4">
                  {[
                    { key: '0', value: '0px' },
                    { key: '1', value: '4px' },
                    { key: '2', value: '8px' },
                    { key: '3', value: '12px' },
                    { key: '4', value: '16px' },
                    { key: '5', value: '20px' },
                    { key: '6', value: '24px' },
                    { key: '8', value: '32px' },
                    { key: '10', value: '40px' },
                    { key: '12', value: '48px' },
                    { key: '16', value: '64px' },
                    { key: '20', value: '80px' },
                    { key: '24', value: '96px' },
                  ].map((space) => (
                    <div key={space.key} className="flex items-center gap-4">
                      <span className="w-16 text-sm text-text-secondary">{space.key}</span>
                      <div
                        className="bg-interactive-primary h-6 rounded transition-all duration-slow"
                        style={{ width: space.value }}
                      />
                      <span className="text-sm text-text-tertiary">{space.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <CodeBlock
                title="Uso de espaciado"
                code={`// Padding
<div className="p-4" />      // 16px all sides
<div className="px-6 py-3" /> // 24px horizontal, 12px vertical

// Margin
<div className="m-4" />      // 16px all sides
<div className="mt-8 mb-4" /> // 32px top, 16px bottom

// Gap (flexbox/grid)
<div className="flex gap-4" /> // 16px gap`}
              />
            </section>
          )}

          {/* Shadows Section */}
          {activeSection === 'shadows' && (
            <section className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-2">Sombras</h2>
                <p className="text-text-secondary">
                  Escala de sombras para dar profundidad a los elementos.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-8">
                {[
                  { class: 'shadow-sm', label: 'sm' },
                  { class: 'shadow', label: 'DEFAULT' },
                  { class: 'shadow-md', label: 'md' },
                  { class: 'shadow-lg', label: 'lg' },
                  { class: 'shadow-xl', label: 'xl' },
                  { class: 'shadow-2xl', label: '2xl' },
                ].map((shadow) => (
                  <div
                    key={shadow.class}
                    className={`h-24 bg-background-primary rounded-xl flex items-center justify-center ${shadow.class} hover:scale-105 transition-transform cursor-pointer`}
                    onClick={() => copyToClipboard(shadow.class)}
                  >
                    <span className="text-text-secondary font-medium">{shadow.label}</span>
                  </div>
                ))}
              </div>

              <CodeBlock
                title="Uso de sombras"
                code={`<div className="shadow-sm" />  // Sutil
<div className="shadow" />     // Default
<div className="shadow-md" />  // Media
<div className="shadow-lg" />  // Grande
<div className="shadow-xl" />  // Extra grande
<div className="shadow-2xl" /> // Maxima`}
              />
            </section>
          )}

          {/* Animations Section */}
          {activeSection === 'animations' && (
            <section className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-2">Animaciones</h2>
                <p className="text-text-secondary">
                  Duraciones, easings y animaciones predefinidas para transiciones suaves.
                </p>
              </div>

              {/* Durations */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Duraciones</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: 'instant', value: '0ms' },
                    { name: 'fast', value: '100ms' },
                    { name: 'normal', value: '200ms' },
                    { name: 'slow', value: '300ms' },
                    { name: 'slower', value: '500ms' },
                    { name: 'slowest', value: '1000ms' },
                  ].map((duration) => (
                    <div
                      key={duration.name}
                      className="bg-background-secondary p-4 rounded-lg cursor-pointer group"
                      onClick={() => copyToClipboard(`duration-${duration.name}`)}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium">{duration.name}</span>
                        <span className="text-sm text-text-secondary">{duration.value}</span>
                      </div>
                      <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-interactive-primary rounded-full group-hover:translate-x-full"
                          style={{
                            width: '30%',
                            transition: `transform ${duration.value} ease-out`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Easings */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Easings</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    'linear',
                    'ease',
                    'ease-in',
                    'ease-out',
                    'ease-in-out',
                    'ease-in-quad',
                    'ease-out-quad',
                    'ease-out-back',
                    'spring',
                  ].map((easing) => (
                    <div
                      key={easing}
                      className="bg-background-secondary p-4 rounded-lg cursor-pointer group"
                      onClick={() => copyToClipboard(`ease-${easing}`)}
                    >
                      <span className="text-sm font-medium">{easing}</span>
                      <div className="mt-3 h-2 bg-background-tertiary rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-status-info rounded-full w-1/4 group-hover:translate-x-[200%] transition-transform duration-slow ${
                            easing === 'linear' ? 'ease-linear' :
                            easing === 'ease' ? 'ease' :
                            easing === 'ease-in' ? 'ease-in' :
                            easing === 'ease-out' ? 'ease-out' :
                            easing === 'ease-in-out' ? 'ease-in-out' :
                            'ease-out'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animations */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Animaciones Predefinidas</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'fadeIn', label: 'Fade In' },
                    { name: 'slideInUp', label: 'Slide Up' },
                    { name: 'slideInDown', label: 'Slide Down' },
                    { name: 'scaleIn', label: 'Scale In' },
                    { name: 'spin', label: 'Spin' },
                    { name: 'pulse', label: 'Pulse' },
                    { name: 'bounce', label: 'Bounce' },
                    { name: 'shake', label: 'Shake' },
                  ].map((anim) => {
                    const [playing, setPlaying] = useState(false);
                    return (
                      <button
                        key={anim.name}
                        className="bg-background-secondary p-4 rounded-lg hover:bg-background-tertiary transition-colors"
                        onClick={() => {
                          setPlaying(true);
                          setTimeout(() => setPlaying(false), 1000);
                        }}
                      >
                        <div
                          className={`w-12 h-12 mx-auto bg-interactive-primary rounded-lg mb-3 ${
                            playing ? `animate-${anim.name}` : ''
                          }`}
                        />
                        <span className="text-sm">{anim.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <CodeBlock
                title="Uso de animaciones"
                code={`// Duraciones de transicion
<div className="transition-colors duration-fast" />
<div className="transition-all duration-slow" />

// Easings personalizados
<div className="transition-transform ease-out-back" />
<div className="transition-opacity ease-spring" />

// Animaciones predefinidas
<div className="animate-fadeIn" />
<div className="animate-slideInUp" />
<div className="animate-pulse" />
<div className="animate-bounce" />`}
              />
            </section>
          )}

          {/* Z-Index Section */}
          {activeSection === 'zindex' && (
            <section className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-2">Z-Index</h2>
                <p className="text-text-secondary">
                  Escala semantica de z-index para capas de UI.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { name: 'behind', value: -1, desc: 'Detras del contenido' },
                  { name: 'base', value: 0, desc: 'Nivel base' },
                  { name: 'raised', value: 1, desc: 'Ligeramente elevado' },
                  { name: 'dropdown', value: 10, desc: 'Menus desplegables' },
                  { name: 'sticky', value: 20, desc: 'Elementos sticky' },
                  { name: 'header', value: 30, desc: 'Header/Navegacion' },
                  { name: 'overlay', value: 40, desc: 'Fondos de modales' },
                  { name: 'modal', value: 50, desc: 'Ventanas modales' },
                  { name: 'popover', value: 60, desc: 'Popovers' },
                  { name: 'tooltip', value: 70, desc: 'Tooltips' },
                  { name: 'toast', value: 80, desc: 'Notificaciones toast' },
                  { name: 'max', value: 9999, desc: 'Maximo absoluto' },
                ].map((level, index) => (
                  <div
                    key={level.name}
                    className="flex items-center gap-4 p-4 bg-background-secondary rounded-lg cursor-pointer hover:bg-background-tertiary transition-colors"
                    onClick={() => copyToClipboard(`z-${level.name}`)}
                  >
                    <div
                      className="w-16 h-16 bg-interactive-primary rounded-lg flex items-center justify-center text-white font-bold shadow-lg"
                      style={{
                        transform: `translateX(${index * 8}px)`,
                        zIndex: level.value,
                      }}
                    >
                      {level.value}
                    </div>
                    <div className="flex-1">
                      <span className="font-medium">z-{level.name}</span>
                      <p className="text-sm text-text-secondary">{level.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <CodeBlock
                title="Uso de z-index"
                code={`// Capas semanticas
<header className="z-header" />      // Navegacion (30)
<div className="z-overlay" />        // Overlay (40)
<dialog className="z-modal" />       // Modal (50)
<div className="z-tooltip" />        // Tooltip (70)
<div className="z-toast" />          // Toast (80)

// Casos especiales
<div className="z-behind" />         // Detras (-1)
<div className="z-max" />            // Maximo (9999)`}
              />
            </section>
          )}

          {/* Icons Section */}
          {activeSection === 'icons' && (
            <section className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-2">Iconos</h2>
                <p className="text-text-secondary">
                  Iconos SVG como componentes React/Vue con soporte para tamaño y color.
                </p>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {icons.map(({ Icon, name }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-3 p-4 bg-background-secondary rounded-lg hover:bg-background-tertiary transition-colors cursor-pointer group"
                    onClick={() => copyToClipboard(`<${name} size={24} />`)}
                  >
                    <Icon size={32} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-text-secondary">{name}</span>
                  </div>
                ))}
              </div>

              {/* Icon Sizes */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Tamaños</h3>
                <div className="flex items-end gap-6 p-6 bg-background-secondary rounded-xl">
                  {[16, 20, 24, 32, 40, 48].map((size) => (
                    <div key={size} className="flex flex-col items-center gap-2">
                      <Heart size={size} className="text-status-error" />
                      <span className="text-xs text-text-secondary">{size}px</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Icon Colors */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Colores</h3>
                <div className="flex gap-4 p-6 bg-background-secondary rounded-xl">
                  <Check size={32} className="text-status-success" />
                  <X size={32} className="text-status-error" />
                  <ArrowRight size={32} className="text-interactive-primary" />
                  <Heart size={32} className="text-red-80" />
                  <Menu size={32} className="text-text-secondary" />
                </div>
              </div>

              <CodeBlock
                title="Uso de iconos"
                code={`import { Check, Heart, ArrowRight } from '@smcore/corex-design/react';

// Tamaño personalizado
<Check size={24} />
<Check size={32} />

// Con colores
<Check className="text-status-success" />
<Heart className="text-red-80" />
<ArrowRight className="text-interactive-primary" />`}
              />
            </section>
          )}

          {/* Components Section */}
          {activeSection === 'components' && (
            <section className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-2">Componentes</h2>
                <p className="text-text-secondary">
                  Ejemplos de componentes construidos con los tokens.
                </p>
              </div>

              {/* Buttons */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Botones</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-interactive-primary hover:bg-interactive-primaryHover active:bg-interactive-primaryActive text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors duration-fast">
                    Primary <ArrowRight size={16} />
                  </button>
                  <button className="bg-interactive-secondary hover:bg-interactive-secondaryHover border border-border-primary px-6 py-3 rounded-lg font-medium transition-colors duration-fast">
                    Secondary
                  </button>
                  <button className="bg-status-success hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-opacity duration-fast">
                    <Check size={16} /> Success
                  </button>
                  <button className="bg-status-error hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-opacity duration-fast">
                    <X size={16} /> Danger
                  </button>
                  <button className="bg-interactive-primaryDisabled text-text-tertiary px-6 py-3 rounded-lg font-medium cursor-not-allowed">
                    Disabled
                  </button>
                </div>
              </div>

              {/* Alerts */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Alertas</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-background-success text-text-success border border-border-success animate-slideInLeft">
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
              </div>

              {/* Cards */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Tarjetas</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-background-secondary border border-border-secondary rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-slow">
                    <h4 className="text-lg font-semibold mb-3">Card con sombra</h4>
                    <p className="text-text-secondary">Hover para ver la transicion de sombra.</p>
                  </div>
                  <div className="bg-background-secondary border border-border-secondary rounded-xl p-6 hover:border-interactive-primary transition-colors duration-normal">
                    <h4 className="text-lg font-semibold mb-3">Card con borde</h4>
                    <p className="text-text-secondary">Hover para ver la transicion de borde.</p>
                  </div>
                  <div className="bg-background-secondary border border-border-secondary rounded-xl p-6 hover:scale-105 transition-transform duration-normal">
                    <h4 className="text-lg font-semibold mb-3">Card con escala</h4>
                    <p className="text-text-secondary">Hover para ver la transicion de escala.</p>
                  </div>
                </div>
              </div>

              {/* Form Elements */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Formularios</h3>
                <div className="max-w-md space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Input</label>
                    <input
                      type="text"
                      placeholder="Escribe algo..."
                      className="w-full px-4 py-3 rounded-lg border border-border-primary bg-background-primary focus:border-border-focus focus:outline-none transition-colors duration-fast"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Select</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-border-primary bg-background-primary focus:border-border-focus focus:outline-none transition-colors duration-fast">
                      <option>Opcion 1</option>
                      <option>Opcion 2</option>
                      <option>Opcion 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Usage Section */}
          {activeSection === 'usage' && (
            <section className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-2">Como Usar</h2>
                <p className="text-text-secondary">
                  Guia de instalacion y configuracion para React + Tailwind.
                </p>
              </div>

              <CodeBlock
                title="1. Instalacion"
                code={`npm install @smcore/corex-design`}
              />

              <CodeBlock
                title="2. Configurar Tailwind (tailwind.config.ts)"
                code={`import type { Config } from 'tailwindcss';
import { tailwindPreset } from '@smcore/corex-design/tailwind';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [tailwindPreset],
} satisfies Config;`}
              />

              <CodeBlock
                title="3. Importar CSS y Provider (main.tsx)"
                code={`import { ThemeProvider } from '@smcore/corex-design/react';
import '@smcore/corex-design/css/themes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="light">
    <App />
  </ThemeProvider>
);`}
              />

              <CodeBlock
                title="4. Usar en componentes"
                code={`import { useTheme } from '@smcore/corex-design/react';
import { Check, Heart } from '@smcore/corex-design/react';

function MyComponent() {
  const { themeName, toggleTheme } = useTheme();

  return (
    <div className="bg-background-primary p-6">
      {/* Colores semanticos */}
      <h1 className="text-text-primary text-2xl font-bold">
        Titulo
      </h1>

      {/* Iconos */}
      <Check size={24} className="text-status-success" />

      {/* Botones con animaciones */}
      <button
        onClick={toggleTheme}
        className="bg-interactive-primary hover:bg-interactive-primaryHover
                   transition-colors duration-fast"
      >
        {themeName === 'light' ? 'Oscuro' : 'Claro'}
      </button>

      {/* Z-index para modales */}
      <dialog className="z-modal">Modal content</dialog>
    </div>
  );
}`}
              />

              <CodeBlock
                title="5. Agregar nuevos colores o iconos"
                code={`# Agregar color con wizard interactivo
npm run add:color

# Agregar icono desde archivo
npm run add:icon -- --file ./mi-icono.svg

# Regenerar tokens despues de editar design.config.ts
npm run generate:tokens`}
              />
            </section>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-background-secondary border-t border-border-primary py-4 text-center text-text-secondary text-sm">
        @smcore/corex-design v1.0.0 - Documentacion Interactiva
      </footer>

      {/* Toast notification */}
      {copiedText && (
        <div className="fixed bottom-20 md:bottom-6 right-6 z-toast bg-gray-160 text-white px-4 py-2 rounded-lg shadow-lg animate-slideInUp">
          Copiado: {copiedText.length > 30 ? copiedText.substring(0, 30) + '...' : copiedText}
        </div>
      )}
    </div>
  );
}

export default App;
