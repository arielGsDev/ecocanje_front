import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FOOTER } from '../../core/data/site.content';
import { Icon } from '../../shared/ui/icon/icon';
import { Wordmark } from '../../shared/ui/wordmark/wordmark';

@Component({
  selector: 'app-site-footer',
  imports: [Icon, Wordmark],
  templateUrl: './site-footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  protected readonly footer = FOOTER;
  protected readonly year = new Date().getFullYear();
}
