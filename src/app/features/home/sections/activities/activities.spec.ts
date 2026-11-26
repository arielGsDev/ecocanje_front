import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { EVENTS } from '../../../../core/data/events.data';

import { Activities } from './activities';

describe('Activities', () => {
  let component: Activities;
  let fixture: ComponentFixture<Activities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Activities],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Activities);
    fixture.componentRef.setInput('event', EVENTS[0]);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
