import { Injectable, computed, signal } from '@angular/core';
import { EventInfo } from './event.model';
import { EVENTS } from './events.data';

/**
 * Events source. Today it serves the published events from a local file; it will be replaced by API calls (HttpClient)
 * without touching the views. The app must keep working with an empty list.
 */
@Injectable({ providedIn: 'root' })
export class EventsService {
  private readonly _events = signal<EventInfo[]>(EVENTS);
  private readonly _state = signal<'loading' | 'ready' | 'error'>('ready');

  readonly events = this._events.asReadonly();
  readonly state = this._state.asReadonly();
  readonly featured = computed(() => this._events().find((e) => e.featured) ?? this._events()[0] ?? null);

  byId(id: string): EventInfo | undefined {
    return this._events().find((e) => e.id === id);
  }
}
