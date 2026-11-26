import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, computed, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { EventsService } from '../../core/data/events.service';
import { MotionService } from '../../core/motion/motion.service';
import { Wordmark } from '../../shared/ui/wordmark/wordmark';

interface NavLink {
  fragment: string;
  label: string;
}

@Component({
  selector: 'app-site-header',
  imports: [FormsModule, RouterLink, ToggleSwitch, Wordmark],
  templateUrl: './site-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  protected readonly motion = inject(MotionService);
  private readonly events = inject(EventsService);
  private readonly header = viewChild.required<ElementRef<HTMLElement>>('header');

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      // Sticky blocks and anchor jumps read the header height from --header-h (in rem).
      const root = document.documentElement;
      const publish = () => root.style.setProperty('--header-h', `${this.header().nativeElement.offsetHeight / 16}rem`);
      publish();
      const observer = new ResizeObserver(publish);
      observer.observe(this.header().nativeElement);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  /** Anchors only for the blocks that exist: the page works without any event. */
  protected readonly links = computed<NavLink[]>(() => {
    const event = this.events.featured();
    const links: NavLink[] = [];
    if (event) links.push({ fragment: 'proyecto', label: 'El proyecto' });
    if (event?.story) links.push({ fragment: 'historia', label: 'La historia' });
    if (event?.path) links.push({ fragment: 'camino', label: 'El camino' });
    if (event?.activities.length) links.push({ fragment: 'actividades', label: 'Actividades' });
    links.push({ fragment: 'como', label: 'Cómo funciona' });
    if (event?.team) links.push({ fragment: 'equipo', label: 'Equipo' });
    return links;
  });
}
