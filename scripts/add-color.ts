#!/usr/bin/env node
/**
 * Add Color CLI
 * =============
 * Script interactivo para agregar nuevas paletas de colores
 *
 * Uso:
 *   npm run add:color
 *   npm run add:color -- --name green --base "#22C55E"
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ColorInput {
  name: string;
  baseColor: string;
}

// Crear interfaz de readline
function createInterface(): readline.Interface {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

// Preguntar al usuario
function ask(rl: readline.Interface, question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

// Convertir hex a HSL
function hexToHSL(hex: string): { h: number; s: number; l: number } {
  hex = hex.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

// Convertir HSL a Hex
function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (h < 60) {
    r = c;
    g = x;
  } else if (h < 120) {
    r = x;
    g = c;
  } else if (h < 180) {
    g = c;
    b = x;
  } else if (h < 240) {
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }

  const toHex = (n: number) =>
    Math.round((n + m) * 255)
      .toString(16)
      .padStart(2, '0');

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

// Generar escala de colores (5-180)
function generateColorScale(baseColor: string): Record<number, string> {
  const { h, s } = hexToHSL(baseColor);

  // Escala de luminosidad para 18 tonos (5, 10, 20, ... 180)
  const lightnessScale: Record<number, number> = {
    5: 97,
    10: 94,
    20: 90,
    30: 85,
    40: 78,
    50: 70,
    60: 60,
    70: 50,
    80: 42,
    90: 35,
    100: 30,
    110: 26,
    120: 22,
    130: 18,
    140: 14,
    150: 11,
    160: 8,
    170: 5,
    180: 3,
  };

  const scale: Record<number, string> = {};

  for (const [shade, lightness] of Object.entries(lightnessScale)) {
    // Ajustar saturación según luminosidad
    let adjustedSat = s;
    if (lightness > 85) {
      adjustedSat = Math.max(s * 0.4, 10);
    } else if (lightness < 20) {
      adjustedSat = Math.max(s * 0.6, 20);
    }

    scale[Number(shade)] = hslToHex(h, adjustedSat, lightness);
  }

  return scale;
}

// Validar nombre de color
function validateColorName(name: string): boolean {
  return /^[a-z][a-z0-9]*$/i.test(name);
}

// Validar formato hexadecimal
function validateHex(hex: string): boolean {
  return /^#?[0-9A-Fa-f]{6}$/.test(hex);
}

// Actualizar design.config.ts con el nuevo color
async function updateConfig(input: ColorInput): Promise<void> {
  const configPath = path.resolve(__dirname, '../design.config.ts');
  let content = await fs.readFile(configPath, 'utf-8');

  // Generar escala de colores
  const scale = generateColorScale(input.baseColor);

  // Formatear la nueva paleta
  const paletteEntry = `      ${input.name}: {
${Object.entries(scale)
  .map(([shade, color]) => `        ${shade}: '${color}',`)
  .join('\n')}
      },`;

  // Buscar el lugar para insertar (antes del comentario de agregar nuevas paletas)
  const insertMarker = '// AGREGAR NUEVAS PALETAS AQUÍ';
  const insertIndex = content.indexOf(insertMarker);

  if (insertIndex === -1) {
    // Si no hay marcador, insertar después de yellow
    const yellowEndIndex = content.indexOf('},', content.indexOf('yellow:'));
    if (yellowEndIndex !== -1) {
      content =
        content.slice(0, yellowEndIndex + 2) +
        '\n' +
        paletteEntry +
        content.slice(yellowEndIndex + 2);
    }
  } else {
    // Insertar antes del comentario
    const lineStart = content.lastIndexOf('\n', insertMarker.length > 0 ? insertIndex : 0) + 1;
    content =
      content.slice(0, lineStart) +
      paletteEntry +
      '\n      // =============================================\n      ' +
      content.slice(insertIndex);
  }

  await fs.writeFile(configPath, content);
}

// Main
async function main() {
  console.log('\n🎨 Add Color to Design System\n');
  console.log('Este wizard te ayudará a agregar una nueva paleta de colores.\n');

  // Parsear argumentos
  const args = process.argv.slice(2);
  let name = '';
  let baseColor = '';

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--name' && args[i + 1]) {
      name = args[i + 1];
      i++;
    } else if (args[i] === '--base' && args[i + 1]) {
      baseColor = args[i + 1];
      i++;
    }
  }

  const rl = createInterface();

  try {
    // Obtener nombre si no se proporcionó
    if (!name) {
      name = await ask(rl, '📝 Nombre del color (ej: green, orange, pink): ');
    }

    // Validar nombre
    if (!validateColorName(name)) {
      console.error('❌ El nombre debe empezar con letra y contener solo letras y números');
      process.exit(1);
    }

    // Convertir a minúsculas
    name = name.toLowerCase();

    // Obtener color base si no se proporcionó
    if (!baseColor) {
      baseColor = await ask(rl, '🎨 Color base en formato hex (ej: #22C55E): ');
    }

    // Validar y normalizar hex
    if (!validateHex(baseColor)) {
      console.error('❌ Formato hex inválido. Usa formato #RRGGBB');
      process.exit(1);
    }

    if (!baseColor.startsWith('#')) {
      baseColor = '#' + baseColor;
    }

    baseColor = baseColor.toUpperCase();

    console.log(`\n📊 Generando paleta "${name}" a partir de ${baseColor}...`);

    // Generar y mostrar preview
    const scale = generateColorScale(baseColor);

    console.log('\nPreview de la paleta:');
    for (const [shade, color] of Object.entries(scale)) {
      console.log(`  ${shade.padStart(3)}: ${color}`);
    }

    // Confirmar
    const confirm = await ask(rl, '\n¿Agregar esta paleta? (s/n): ');

    if (confirm.toLowerCase() !== 's' && confirm.toLowerCase() !== 'y') {
      console.log('❌ Operación cancelada');
      process.exit(0);
    }

    // Actualizar configuración
    await updateConfig({ name, baseColor });

    console.log(`\n✅ Paleta "${name}" agregada exitosamente!`);
    console.log('\nPróximos pasos:');
    console.log('  1. Ejecuta: npm run generate');
    console.log('  2. Usa el color como:');
    console.log(`     - CSS: var(--color-${name}-100)`);
    console.log(`     - Tailwind: bg-${name}-100`);
    console.log(`     - React/Vue: colorPalettes.${name}[100]`);
  } finally {
    rl.close();
  }
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
