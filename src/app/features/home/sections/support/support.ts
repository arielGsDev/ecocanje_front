import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Photo } from '../../../../core/data/event.model';

@Component({
  selector: 'app-support',
  templateUrl: './support.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Support {
  readonly text = input('');
  /** Logo strip shown under the text. Nothing is rendered without an image file. */
  readonly logos = input<Photo | undefined>(undefined);
}
