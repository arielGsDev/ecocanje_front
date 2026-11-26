import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Wordmark } from './wordmark';

describe('Wordmark', () => {
  let component: Wordmark;
  let fixture: ComponentFixture<Wordmark>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wordmark],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Wordmark);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
