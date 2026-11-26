import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooter } from './site-footer/site-footer';
import { SiteHeader } from './site-header/site-header';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="sr-only focus:not-sr-only" href="#contenido">Ir al contenido</a>
    <app-site-header />
    <main id="contenido" class="bg-surface">
      <router-outlet />
    </main>
    <app-site-footer />
  `,
})
export class ShellComponent {}
