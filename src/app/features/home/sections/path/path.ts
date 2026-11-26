import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, inject, input, signal, viewChild } from '@angular/core';
import { Path as PathContent, Stage } from '../../../../core/data/event.model';
import { hasTakenPlace } from '../../../../core/data/event.rules';
import { Icon } from '../../../../shared/ui/icon/icon';
import { ImageSlot } from '../../../../shared/ui/image-slot/image-slot';
import { Reveal } from '../../../../shared/ui/reveal';
import { StatusBadge } from '../../../../shared/ui/status-badge/status-badge';

@Component({
  selector: 'app-path',
  imports: [Icon, ImageSlot, Reveal, StatusBadge],
  templateUrl: './path.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Path {
  readonly path = input.required<PathContent>();

  /** A stage shows its photo (or the slot waiting for it) only after it has taken place. */
  protected showPhoto(stage: Stage): boolean {
    return !!stage.photo?.src && hasTakenPlace(stage);
  }

  /** How many stages the reader has reached. Once reached, a stage stays reached. */
  protected readonly reached = signal(0);

  private readonly list = viewChild.required<ElementRef<HTMLOListElement>>('list');

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const items = Array.from(this.list().nativeElement.children);
      if (matchMedia('(prefers-reduced-motion: reduce)').matches || this.list().nativeElement.closest('.ec-still')) {
        this.reached.set(items.length);
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            // A stage counts as reached when it enters the lower 70% of the screen, or is already above it.
            if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
              this.reached.update((n) => Math.max(n, items.indexOf(entry.target) + 1));
            }
          }
        },
        { rootMargin: '0px 0px -30% 0px' },
      );
      items.forEach((item) => observer.observe(item));
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
