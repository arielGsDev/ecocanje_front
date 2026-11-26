import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SAMPLE_EVENTS } from '../../../../core/data/sample-events';

import { Team } from './team';

describe('Team', () => {
  let component: Team;
  let fixture: ComponentFixture<Team>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Team],
    }).compileComponents();

    fixture = TestBed.createComponent(Team);
    fixture.componentRef.setInput('team', SAMPLE_EVENTS[0].team!);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
