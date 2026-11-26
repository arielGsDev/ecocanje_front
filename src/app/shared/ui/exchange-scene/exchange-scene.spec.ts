import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeScene } from './exchange-scene';

describe('ExchangeScene', () => {
  let component: ExchangeScene;
  let fixture: ComponentFixture<ExchangeScene>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeScene],
    }).compileComponents();

    fixture = TestBed.createComponent(ExchangeScene);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
