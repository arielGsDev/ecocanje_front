import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EVENTS } from '../../../../core/data/events.data';

import { Path } from './path';

describe('Path', () => {
  let component: Path;
  let fixture: ComponentFixture<Path>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Path],
    }).compileComponents();

    fixture = TestBed.createComponent(Path);
    fixture.componentRef.setInput('path', EVENTS[0].path!);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
