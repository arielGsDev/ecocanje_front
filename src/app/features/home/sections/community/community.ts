import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommunityInfo } from '../../../../core/data/event.model';
import { Plant } from '../../../../shared/ui/plant/plant';
import { StatusBadge } from '../../../../shared/ui/status-badge/status-badge';

@Component({
  selector: 'app-community',
  imports: [Plant, StatusBadge],
  templateUrl: './community.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Community {
  readonly community = input.required<CommunityInfo>();
}
