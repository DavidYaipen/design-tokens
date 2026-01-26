#!/usr/bin/env node
/**
 * Add Icon CLI
 * ============
 * Script para agregar nuevos iconos al design system
 *
 * Uso:
 *   npm run add:icon                           # Wizard interactivo
 *   npm run add:icon -- --file ./my-icon.svg   # Desde archivo
 *   npm run add:icon -- --url https://...      # Desde URL
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';
import https from 'https';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS_DIR = path.resolve(__dirname, '../src/icons/svg');

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

// Descargar archivo desde URL
function downloadFile(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    protocol
      .get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            downloadFile(redirectUrl).then(resolve).catch(reject);
            return;
          }
        }

        if (response.statusCode !== 200) {
          reject(new Error(`HTTP ${response.statusCode}`));
          return;
        }

        let data = '';
        response.on('data', (chunk) => (data += chunk));
        response.on('end', () => resolve(data));
      })
      .on('error', reject);
  });
}

// Convertir nombre a kebab-case
function toKebabCase(name: string): string {
  return name
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Validar SVG
function validateSVG(content: string): boolean {
  return content.includes('<svg') && content.includes('</svg>');
}

// Optimizar SVG básico
function optimizeSVG(content: string): string {
  // Extraer solo el SVG
  const svgMatch = content.match(/<svg[\s\S]*<\/svg>/i);
  if (!svgMatch) {
    throw new Error('No se encontró elemento SVG válido');
  }

  let svg = svgMatch[0];

  // Agregar viewBox si no existe
  if (!svg.includes('viewBox')) {
    const widthMatch = svg.match(/width="(\d+)"/);
    const heightMatch = svg.match(/height="(\d+)"/);
    const width = widthMatch ? widthMatch[1] : '24';
    const height = heightMatch ? heightMatch[1] : '24';
    svg = svg.replace('<svg', `<svg viewBox="0 0 ${width} ${height}"`);
  }

  // Reemplazar colores con currentColor
  svg = svg
    .replace(/fill="(?!none|currentColor)[^"]*"/g, 'fill="currentColor"')
    .replace(/stroke="(?!none|currentColor)[^"]*"/g, 'stroke="currentColor"')
    .replace(/fill:#[0-9a-fA-F]{3,6}/g, 'fill:currentColor')
    .replace(/stroke:#[0-9a-fA-F]{3,6}/g, 'stroke:currentColor');

  // Limpiar atributos innecesarios
  svg = svg
    .replace(/\s+xmlns:[\w]+="[^"]*"/g, '')
    .replace(/\s+id="[^"]*"/g, '')
    .replace(/\s+class="[^"]*"/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  return svg;
}

// Listar iconos existentes
async function listExistingIcons(): Promise<string[]> {
  try {
    const files = await fs.readdir(ICONS_DIR);
    return files.filter((f) => f.endsWith('.svg')).map((f) => f.replace('.svg', ''));
  } catch {
    return [];
  }
}

// Agregar icono
async function addIcon(name: string, content: string): Promise<void> {
  // Crear directorio si no existe
  await fs.mkdir(ICONS_DIR, { recursive: true });

  // Optimizar SVG
  const optimized = optimizeSVG(content);

  // Guardar archivo
  const filePath = path.join(ICONS_DIR, `${name}.svg`);
  await fs.writeFile(filePath, optimized);
}

// Main
async function main() {
  console.log('\n🎯 Add Icon to Design System\n');

  // Parsear argumentos
  const args = process.argv.slice(2);
  let filePath = '';
  let url = '';
  let name = '';

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--file' && args[i + 1]) {
      filePath = args[i + 1];
      i++;
    } else if (args[i] === '--url' && args[i + 1]) {
      url = args[i + 1];
      i++;
    } else if (args[i] === '--name' && args[i + 1]) {
      name = args[i + 1];
      i++;
    }
  }

  const rl = createInterface();

  try {
    // Mostrar iconos existentes
    const existingIcons = await listExistingIcons();
    if (existingIcons.length > 0) {
      console.log('Iconos existentes:', existingIcons.join(', '));
      console.log('');
    }

    let svgContent = '';

    // Si se proporcionó archivo
    if (filePath) {
      console.log(`📁 Leyendo desde archivo: ${filePath}`);
      svgContent = await fs.readFile(filePath, 'utf-8');

      if (!name) {
        name = path.basename(filePath, '.svg');
      }
    }
    // Si se proporcionó URL
    else if (url) {
      console.log(`🌐 Descargando desde: ${url}`);
      svgContent = await downloadFile(url);

      if (!name) {
        const urlName = url.split('/').pop()?.replace('.svg', '') || 'icon';
        name = urlName;
      }
    }
    // Modo interactivo
    else {
      console.log('¿Cómo quieres agregar el icono?\n');
      console.log('  1. Desde archivo local');
      console.log('  2. Desde URL');
      console.log('  3. Pegar SVG directamente');
      console.log('');

      const option = await ask(rl, 'Selecciona una opción (1-3): ');

      switch (option) {
        case '1': {
          filePath = await ask(rl, 'Ruta al archivo SVG: ');
          svgContent = await fs.readFile(filePath, 'utf-8');
          name = path.basename(filePath, '.svg');
          break;
        }
        case '2': {
          url = await ask(rl, 'URL del SVG: ');
          console.log('Descargando...');
          svgContent = await downloadFile(url);
          const urlName = url.split('/').pop()?.replace('.svg', '') || 'icon';
          name = urlName;
          break;
        }
        case '3': {
          console.log('Pega el contenido SVG (termina con línea vacía):');
          const lines: string[] = [];
          let line = await ask(rl, '');
          while (line.trim() !== '' || lines.length === 0) {
            lines.push(line);
            if (line.includes('</svg>')) break;
            line = await ask(rl, '');
          }
          svgContent = lines.join('\n');
          break;
        }
        default:
          console.error('Opción inválida');
          process.exit(1);
      }
    }

    // Validar SVG
    if (!validateSVG(svgContent)) {
      console.error('❌ El contenido no es un SVG válido');
      process.exit(1);
    }

    // Solicitar nombre si no se proporcionó
    if (!name) {
      name = await ask(rl, '📝 Nombre del icono (kebab-case): ');
    }

    // Convertir a kebab-case
    name = toKebabCase(name);

    // Verificar si existe
    if (existingIcons.includes(name)) {
      const overwrite = await ask(rl, `⚠️ El icono "${name}" ya existe. ¿Sobrescribir? (s/n): `);
      if (overwrite.toLowerCase() !== 's' && overwrite.toLowerCase() !== 'y') {
        console.log('❌ Operación cancelada');
        process.exit(0);
      }
    }

    // Agregar icono
    await addIcon(name, svgContent);

    console.log(`\n✅ Icono "${name}" agregado exitosamente!`);
    console.log(`   Ubicación: src/icons/svg/${name}.svg`);
    console.log('\nPróximos pasos:');
    console.log('  1. Ejecuta: npm run generate');
    console.log('  2. Usa el icono como:');

    const componentName = name
      .split('-')
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join('');

    console.log(`     - React: import { ${componentName} } from '@oyaipen/design-tokens/react'`);
    console.log(`     - Vue: import { ${componentName} } from '@oyaipen/design-tokens/vue'`);
  } finally {
    rl.close();
  }
}

main().catch((error) => {
  console.error('Error:', error.message || error);
  process.exit(1);
});
