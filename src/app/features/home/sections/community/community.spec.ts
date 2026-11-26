import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EVENTS } from '../../../../core/data/events.data';

import { Community } from './community';

describe('Community', () => {
  let component: Community;
  let fixture: ComponentFixture<Community>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Community],
    }).compileComponents();

    fixture = TestBed.createComponent(Community);
    fixture.componentRef.setInput('community', EVENTS[0].community!);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
