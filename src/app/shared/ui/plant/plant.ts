import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SPROUT } from '../brand-loop/brand-art';

/** Brand sprout. `progress` (0 to 1) scales it; `grow` plays the growing entrance. */
@Component({
  selector: 'app-plant',
  templateUrl: './plant.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-block' },
})
export class Plant {
  private readonly sanitizer = inject(DomSanitizer);

  readonly grow = input(false);
  readonly progress = input<number | null>(null);

  protected readonly scale = computed(() => {
    const p = this.progress();
    return p === null ? 1 : 0.35 + Math.min(1, Math.max(0, p)) * 0.65;
  });
  protected readonly markup = computed(() => this.sanitizer.bypassSecurityTrustHtml(SPROUT));
}
