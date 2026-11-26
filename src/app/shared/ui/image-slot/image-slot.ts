import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Photo frame. Without an image file it renders nothing, so no placeholder reaches production. */
@Component({
  selector: 'app-image-slot',
  templateUrl: './image-slot.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex', '[class.hidden]': '!src()' },
})
export class ImageSlot {
  /** Alt text describing the photo. */
  readonly label = input('');
  readonly src = input('');
  /** Minimum height as a CSS length in rem. Leave empty to size it with classes on the host. */
  readonly minHeight = input('12rem');
  /** Kept for layouts that overlay content on top of the photo. */
  readonly align = input<'center' | 'top'>('center');
  readonly tone = input<'' | 'deep'>('');
}
