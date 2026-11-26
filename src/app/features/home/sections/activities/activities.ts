import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Activity, EventInfo } from '../../../../core/data/event.model';
import { hasTakenPlace } from '../../../../core/data/event.rules';
import { Icon } from '../../../../shared/ui/icon/icon';
import { ImageSlot } from '../../../../shared/ui/image-slot/image-slot';
import { Reveal } from '../../../../shared/ui/reveal';
import { StatusBadge } from '../../../../shared/ui/status-badge/status-badge';

@Component({
  selector: 'app-activities',
  imports: [Icon, ImageSlot, Reveal, StatusBadge],
  templateUrl: './activities.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Activities {
  readonly event = input.required<EventInfo>();

  /** An activity shows its photo (or the slot waiting for it) only after it has taken place. */
  protected showPhoto(activity: Activity): boolean {
    return !!activity.photo?.src && hasTakenPlace(activity);
  }
}
