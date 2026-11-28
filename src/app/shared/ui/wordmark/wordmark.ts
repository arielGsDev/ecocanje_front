import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/** EcoCanje brand logo. It is generic: it never names a place or an event. */
@Component({
  selector: 'app-wordmark',
  imports: [RouterLink],
  templateUrl: './wordmark.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Wordmark {
  /** Use the light variant over dark backgrounds. */
  readonly onDark = input(false);

  protected readonly src = computed(() => (this.onDark() ? 'images/ecocanje-logo-claro.png' : 'images/ecocanje-logo.png'));
}
