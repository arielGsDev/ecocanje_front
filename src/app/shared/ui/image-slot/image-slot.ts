import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../icon/icon';

/** Photo placeholder: it says which photo belongs here until a real image is provided. */
@Component({
  selector: 'app-image-slot',
  imports: [Icon],
  templateUrl: './image-slot.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex' },
})
export class ImageSlot {
  readonly label = input('');
  readonly src = input('');
  /** Minimum height as a CSS length in rem. Leave empty to size it with classes on the host. */
  readonly minHeight = input('12rem');
  /** Where the label sits. Use "top" when something overlaps the photo. */
  readonly align = input<'center' | 'top'>('center');
  readonly tone = input<'' | 'deep'>('');
}
