import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Status } from '../../../core/data/event.model';
import { Icon } from '../icon/icon';

const LABELS: Record<Status, string> = {
  live: 'En marcha',
  soon: 'Próximamente',
  prep: 'En preparación',
  done: 'Realizada',
  ongoing: 'Durante todo el proyecto',
};

/** Real status of a stage or activity. It always carries text, never color alone. */
@Component({
  selector: 'app-status-badge',
  imports: [Icon],
  templateUrl: './status-badge.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusBadge {
  readonly status = input<Status>('soon');
  readonly label = input('');

  protected readonly text = computed(() => this.label() || LABELS[this.status()]);
}
