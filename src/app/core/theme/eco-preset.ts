import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

/** Preset de PrimeNG: lee las variables de tokens.css, sin valores propios. */
export const EcoPreset = definePreset(Aura, {
  components: {
    button: {
      colorScheme: {
        light: {
          outlined: {
            primary: {
              hoverBackground: 'var(--primary-tint)',
              activeBackground: 'var(--primary-tint)',
              borderColor: 'var(--control-border)',
              color: 'var(--primary)',
            },
          },
        },
      },
    },
  },
  semantic: {
    colorScheme: {
      light: {
        primary: {
          color: 'var(--primary)',
          contrastColor: 'var(--on-primary)',
          hoverColor: 'var(--primary-hover)',
          activeColor: 'var(--primary-deep)',
        },
      },
    },
  },
});
