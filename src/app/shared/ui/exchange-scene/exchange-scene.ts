import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SCENE_ART, SCENE_LABELS } from '../brand-loop/brand-art';

/** Illustrated scene of the exchange. `step` (0 to 3) decides what is visible. */
@Component({
  selector: 'app-exchange-scene',
  templateUrl: './exchange-scene.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class ExchangeScene {
  private readonly sanitizer = inject(DomSanitizer);

  readonly step = input(0);

  protected readonly current = computed(() => Math.min(3, Math.max(0, this.step())));
  protected readonly label = computed(() => SCENE_LABELS[this.current()]);
  protected readonly markup = computed(() => this.sanitizer.bypassSecurityTrustHtml(SCENE_ART));
}
