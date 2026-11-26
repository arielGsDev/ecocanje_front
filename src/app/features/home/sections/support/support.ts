import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ImageSlot } from '../../../../shared/ui/image-slot/image-slot';

@Component({
  selector: 'app-support',
  imports: [ImageSlot],
  templateUrl: './support.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Support {
  readonly text = input('');
  readonly logos = input('');
}
