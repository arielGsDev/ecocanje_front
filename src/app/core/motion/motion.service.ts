import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

/**
 * Follows the system setting `prefers-reduced-motion`: it puts the `ec-still` class on <html>,
 * so every animation resolves to its final state. There is no manual control.
 */
@Injectable({ providedIn: 'root' })
export class MotionService {
  static readonly STILL_CLASS = 'ec-still';
  private readonly doc = inject(DOCUMENT);

  readonly still = signal(false);

  constructor() {
    if (typeof matchMedia !== 'function') return;
    const query = matchMedia('(prefers-reduced-motion: reduce)');
    this.set(query.matches);
    query.addEventListener('change', (event) => this.set(event.matches));
  }

  private set(still: boolean): void {
    this.still.set(still);
    this.doc.documentElement.classList.toggle(MotionService.STILL_CLASS, still);
  }
}