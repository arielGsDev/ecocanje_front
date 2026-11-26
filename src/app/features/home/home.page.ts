import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EventsService } from '../../core/data/events.service';
import { Activities } from './sections/activities/activities';
import { Community } from './sections/community/community';
import { EventOverview } from './sections/event-overview/event-overview';
import { Hero } from './sections/hero/hero';
import { HowItWorks } from './sections/how-it-works/how-it-works';
import { Path } from './sections/path/path';
import { Story } from './sections/story/story';
import { Support } from './sections/support/support';
import { Team } from './sections/team/team';

/** Landing page. Event blocks appear only when the featured event has that data. */
@Component({
  selector: 'app-home-page',
  imports: [Hero, EventOverview, Story, Path, Activities, HowItWorks, Team, Community, Support],
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  protected readonly event = inject(EventsService).featured;
}
