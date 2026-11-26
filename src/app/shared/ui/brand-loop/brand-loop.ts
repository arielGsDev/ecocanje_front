import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LOOP_ART } from './brand-art';

/** Hero illustration: materials that loop around a sprout. `play` runs the entrance animation. */
@Component({
  selector: 'app-brand-loop',
  templateUrl: './brand-loop.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class BrandLoop {
  private readonly sanitizer = inject(DomSanitizer);

  readonly play = input(true);
  readonly label = input('Materiales reciclables que giran alrededor de un brote');

  protected readonly markup = computed(() => this.sanitizer.bypassSecurityTrustHtml(LOOP_ART));
}
