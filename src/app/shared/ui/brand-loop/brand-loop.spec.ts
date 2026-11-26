import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandLoop } from './brand-loop';

describe('BrandLoop', () => {
  let component: BrandLoop;
  let fixture: ComponentFixture<BrandLoop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandLoop],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandLoop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
