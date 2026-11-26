import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { EcoPreset } from './core/theme/eco-preset';
import { MotionService } from './core/motion/motion.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
      withViewTransitions({
        onViewTransitionCreated: ({ transition }) => {
          if (document.documentElement.classList.contains(MotionService.STILL_CLASS)) transition.skipTransition();
        },
      }),
    ),
    providePrimeNG({
      theme: {
        preset: EcoPreset,
        options: {
          darkModeSelector: false,
          cssLayer: { name: 'primeng', order: 'theme, base, primeng, components, utilities' },
        },
      },
    }),
  ],
};
