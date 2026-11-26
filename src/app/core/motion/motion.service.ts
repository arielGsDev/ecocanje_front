import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

/** Control "Movimiento": pone la clase ec-still en <html>. Respeta prefers-reduced-motion. */
@Injectable({ providedIn: 'root' })
export class MotionService {
  static readonly STILL_CLASS = 'ec-still';
  private readonly doc = inject(DOCUMENT);

  readonly still = signal(
    typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  constructor() {
    this.apply();
  }

  toggle(): void {
    this.still.update((v) => !v);
    this.apply();
  }

  private apply(): void {
    this.doc.documentElement.classList.toggle(MotionService.STILL_CLASS, this.still());
  }
}
