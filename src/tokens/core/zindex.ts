/**
 * Z-Index Scale
 * Auto-generated from design.config.ts
 */

export const zIndex = {
  behind: -1,
  base: 0,
  raised: 1,
  dropdown: 10,
  sticky: 20,
  header: 30,
  overlay: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  toast: 80,
  max: 9999,
} as const;

export type ZIndexKey = keyof typeof zIndex;
export type ZIndexValue = (typeof zIndex)[ZIndexKey];

/**
 * Get z-index value by key
 */
export function getZIndex(key: ZIndexKey): number {
  return zIndex[key];
}
