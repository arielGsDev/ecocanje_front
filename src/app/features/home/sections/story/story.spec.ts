import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EVENTS } from '../../../../core/data/events.data';

import { Story } from './story';

describe('Story', () => {
  let component: Story;
  let fixture: ComponentFixture<Story>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Story],
    }).compileComponents();

    fixture = TestBed.createComponent(Story);
    fixture.componentRef.setInput('story', EVENTS[0].story!);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
