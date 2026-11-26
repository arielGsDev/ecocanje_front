import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, inject, signal, viewChild } from '@angular/core';
import { CYCLE_STEPS, HOW_IT_WORKS } from '../../../../core/data/site.content';
import { ExchangeScene } from '../../../../shared/ui/exchange-scene/exchange-scene';
import { Icon } from '../../../../shared/ui/icon/icon';
import { Faq } from '../faq/faq';

@Component({
  selector: 'app-how-it-works',
  imports: [Icon, ExchangeScene, Faq],
  templateUrl: './how-it-works.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowItWorks {
  protected readonly content = HOW_IT_WORKS;
  protected readonly steps = CYCLE_STEPS;
  /** Step that is closest to the reading line; it drives the scene. */
  protected readonly active = signal(0);

  private readonly list = viewChild.required<ElementRef<HTMLOListElement>>('list');

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const items = Array.from(this.list().nativeElement.children);
      // On narrow screens the scene is pinned at the top, so the reading line sits lower.
      const narrow = matchMedia('(max-width: 47.99rem)').matches;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.active.set(items.indexOf(entry.target));
          }
        },
        { rootMargin: narrow ? '-65% 0px -25% 0px' : '-45% 0px -45% 0px' },
      );
      items.forEach((item) => observer.observe(item));
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
