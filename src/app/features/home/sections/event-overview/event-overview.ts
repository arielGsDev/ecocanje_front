import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from 'primeng/button';
import { EventInfo } from '../../../../core/data/event.model';
import { Icon } from '../../../../shared/ui/icon/icon';
import { ImageSlot } from '../../../../shared/ui/image-slot/image-slot';
import { Reveal } from '../../../../shared/ui/reveal';
import { StatusBadge } from '../../../../shared/ui/status-badge/status-badge';

const TONES = ['bg-accent-soft', 'bg-highlight-soft', 'bg-primary-tint'];

@Component({
  selector: 'app-event-overview',
  imports: [RouterLink, ButtonDirective, Icon, ImageSlot, Reveal, StatusBadge],
  templateUrl: './event-overview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventOverview {
  readonly event = input.required<EventInfo>();

  /** First stages float over the photo as a preview of the path. */
  protected readonly floats = computed(() =>
    (this.event().path?.stages ?? []).slice(0, 3).map((stage, index) => ({ ...stage, tone: TONES[index] })),
  );
}
