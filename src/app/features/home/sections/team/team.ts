import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TeamInfo } from '../../../../core/data/event.model';
import { ImageSlot } from '../../../../shared/ui/image-slot/image-slot';

@Component({
  selector: 'app-team',
  imports: [ImageSlot],
  templateUrl: './team.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Team {
  readonly team = input.required<TeamInfo>();
}
