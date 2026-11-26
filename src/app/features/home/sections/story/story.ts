import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Story as StoryContent } from '../../../../core/data/event.model';
import { Icon } from '../../../../shared/ui/icon/icon';
import { ImageSlot } from '../../../../shared/ui/image-slot/image-slot';

@Component({
  selector: 'app-story',
  imports: [Icon, ImageSlot],
  templateUrl: './story.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Story {
  readonly story = input.required<StoryContent>();
}
