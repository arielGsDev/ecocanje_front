import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SAMPLE_EVENTS } from '../../../../core/data/sample-events';

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
    fixture.componentRef.setInput('event', SAMPLE_EVENTS[0]);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
