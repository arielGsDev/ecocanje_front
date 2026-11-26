import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/** Reveals an element once, when it appears. With reduced motion or `.ec-still` it does nothing. */
@Directive({
  selector: '[appReveal]',
})
export class Reveal {
  /** Position inside a group, used to stagger entries. */
  readonly appReveal = input<number | ''>('');

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches || el.closest('.ec-still')) return;
      const index = Number(this.appReveal()) || 0;
      el.style.animationDelay = `calc(${index} * var(--motion-stagger))`;
      el.classList.add('ec-reveal', 'is-armed');
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          el.classList.replace('is-armed', 'is-seen');
          observer.disconnect();
        },
        { rootMargin: '0px 0px -8% 0px' },
      );
      observer.observe(el);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
