import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="text-[length:var(--display-lg-size)] leading-[var(--display-lg-line)] tracking-[var(--display-lg-tracking)]">Inscripción</h1>
    <p class="text-ink-muted mt-4">Esta pantalla se implementará después de la landing.</p>
  `,
})
export class SignupPage {}
