import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Support {
  readonly text = input('');
}
