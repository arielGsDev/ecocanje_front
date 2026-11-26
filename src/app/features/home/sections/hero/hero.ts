import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from 'primeng/button';
import { HERO } from '../../../../core/data/site.content';
import { BrandLoop } from '../../../../shared/ui/brand-loop/brand-loop';
import { Reveal } from '../../../../shared/ui/reveal';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, ButtonDirective, BrandLoop, Reveal],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly hero = HERO;
}
