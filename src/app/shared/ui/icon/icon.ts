import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ICON_PATHS } from './icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex shrink-0 align-middle' },
})
export class Icon {
  private readonly sanitizer = inject(DomSanitizer);

  readonly name = input('leaf');
  /** Size on the 24px design grid; rendered in rem. */
  readonly size = input(24);
  readonly strokeWidth = input(1.75);
  /** When empty the icon is decorative and hidden from assistive technology. */
  readonly label = input('');

  protected readonly markup = computed(() => this.sanitizer.bypassSecurityTrustHtml(ICON_PATHS[this.name()] ?? ''));
}
