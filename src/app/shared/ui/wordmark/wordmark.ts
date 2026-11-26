import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Provisional typographic logo. Replace it with the official file when it exists. */
@Component({
  selector: 'app-wordmark',
  imports: [RouterLink],
  templateUrl: './wordmark.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Wordmark {
  readonly onDark = input(false);
}
