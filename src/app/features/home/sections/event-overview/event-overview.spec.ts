import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { EVENTS } from '../../../../core/data/events.data';

import { EventOverview } from './event-overview';

describe('EventOverview', () => {
  let component: EventOverview;
  let fixture: ComponentFixture<EventOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventOverview],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(EventOverview);
    fixture.componentRef.setInput('event', EVENTS[0]);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
