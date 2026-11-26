import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-events-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="text-[length:var(--display-lg-size)] leading-[var(--display-lg-line)] tracking-[var(--display-lg-tracking)]">Eventos</h1>
    <p class="text-ink-muted mt-4">Todavía no hay eventos publicados.</p>
  `,
})
export class EventsPage {}
