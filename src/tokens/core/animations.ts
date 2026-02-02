/**
 * Animation & Transition Tokens
 * Auto-generated from design.config.ts
 */

/**
 * Transition durations
 */
export const durations = {
  instant: '0ms',
  fast: '100ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
  slowest: '1000ms',
} as const;

/**
 * Easing functions
 */
export const easings = {
  linear: 'linear',
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
  easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  easeInOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.1)',
} as const;

/**
 * Keyframe definitions
 */
export const keyframes = {
  fadeIn: {
    'from': {
      opacity: '0',
    },
    'to': {
      opacity: '1',
    },
  },
  fadeOut: {
    'from': {
      opacity: '1',
    },
    'to': {
      opacity: '0',
    },
  },
  slideInUp: {
    'from': {
      transform: 'translateY(10px)',
      opacity: '0',
    },
    'to': {
      transform: 'translateY(0)',
      opacity: '1',
    },
  },
  slideInDown: {
    'from': {
      transform: 'translateY(-10px)',
      opacity: '0',
    },
    'to': {
      transform: 'translateY(0)',
      opacity: '1',
    },
  },
  slideInLeft: {
    'from': {
      transform: 'translateX(-10px)',
      opacity: '0',
    },
    'to': {
      transform: 'translateX(0)',
      opacity: '1',
    },
  },
  slideInRight: {
    'from': {
      transform: 'translateX(10px)',
      opacity: '0',
    },
    'to': {
      transform: 'translateX(0)',
      opacity: '1',
    },
  },
  scaleIn: {
    'from': {
      transform: 'scale(0.95)',
      opacity: '0',
    },
    'to': {
      transform: 'scale(1)',
      opacity: '1',
    },
  },
  scaleOut: {
    'from': {
      transform: 'scale(1)',
      opacity: '1',
    },
    'to': {
      transform: 'scale(0.95)',
      opacity: '0',
    },
  },
  spin: {
    'from': {
      transform: 'rotate(0deg)',
    },
    'to': {
      transform: 'rotate(360deg)',
    },
  },
  ping: {
    '0%': {
      transform: 'scale(1)',
      opacity: '1',
    },
    '75%, 100%': {
      transform: 'scale(2)',
      opacity: '0',
    },
  },
  pulse: {
    '0%, 100%': {
      opacity: '1',
    },
    '50%': {
      opacity: '0.5',
    },
  },
  bounce: {
    '0%, 100%': {
      transform: 'translateY(-25%)',
      animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
    },
    '50%': {
      transform: 'translateY(0)',
      animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
    },
  },
  shake: {
    '0%, 100%': {
      transform: 'translateX(0)',
    },
    '10%, 30%, 50%, 70%, 90%': {
      transform: 'translateX(-4px)',
    },
    '20%, 40%, 60%, 80%': {
      transform: 'translateX(4px)',
    },
  },
} as const;

/**
 * Animation presets (ready to use)
 */
export const animationPresets = {
  fadeIn: 'fadeIn 200ms ease-out',
  fadeOut: 'fadeOut 200ms ease-in',
  slideInUp: 'slideInUp 300ms ease-out',
  slideInDown: 'slideInDown 300ms ease-out',
  slideInLeft: 'slideInLeft 300ms ease-out',
  slideInRight: 'slideInRight 300ms ease-out',
  scaleIn: 'scaleIn 200ms ease-out',
  scaleOut: 'scaleOut 200ms ease-in',
  spin: 'spin 1s linear infinite',
  ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
  pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  bounce: 'bounce 1s infinite',
  shake: 'shake 500ms ease-in-out',
} as const;

export type Duration = keyof typeof durations;
export type Easing = keyof typeof easings;
export type KeyframeName = keyof typeof keyframes;
export type AnimationPreset = keyof typeof animationPresets;

/**
 * Helper to create a transition string
 */
export function createTransition(
  property: string | string[] = 'all',
  duration: Duration = 'normal',
  easing: Easing = 'ease'
): string {
  const props = Array.isArray(property) ? property : [property];
  return props.map(p => `${p} ${durations[duration]} ${easings[easing]}`).join(', ');
}

export const animations = {
  durations,
  easings,
  keyframes,
  presets: animationPresets,
  createTransition,
} as const;
