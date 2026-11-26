import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { FAQ } from '../../../../core/data/site.content';

@Component({
  selector: 'app-faq',
  imports: [Accordion, AccordionPanel, AccordionHeader, AccordionContent],
  templateUrl: './faq.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Faq {
  protected readonly items = FAQ;
}
