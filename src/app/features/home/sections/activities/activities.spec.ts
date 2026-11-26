import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SAMPLE_EVENTS } from '../../../../core/data/sample-events';

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
    fixture.componentRef.setInput('event', SAMPLE_EVENTS[0]);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
