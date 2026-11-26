import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Reveal } from './reveal';

@Component({
  imports: [Reveal],
  template: '<p appReveal>Hello</p>',
})
class Host {}

describe('Reveal', () => {
  it('should create an instance', async () => {
    await TestBed.configureTestingModule({ imports: [Host] }).compileComponents();
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('p')).toBeTruthy();
  });
});