import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BUSINESS, EVENT_TYPES, SERVICES } from '../../core/business';
import { Icon } from '../../shared/icon';
import { PageHero } from '../../shared/page-hero';
import { Reveal } from '../../shared/reveal';

/** What we typically arrange for each function type. */
const INCLUSIONS: Record<string, string[]> = {
  wedding: [
    'Nadaswaram & getti melam for the muhurtham',
    'Mandapam, stage and entrance flower decoration',
    'Full banana-leaf sadhya for all sessions',
    'Candid & traditional photo and video coverage',
    'Bridal makeup, hair and saree draping',
    'Complete pooja and homam material',
    'Seer varisai and thamboolam arrangements',
    'Guest transport and oorvalam crackers',
  ],
  engagement: [
    'Thattu and tray decoration for the exchange',
    'Stage and backdrop florals',
    'Tiffin and lunch for both families',
    'Photography and video coverage',
    'Nadaswaram for the auspicious hour',
    'Return gifts and thamboolam bags',
  ],
  reception: [
    'Reception stage with lighting and backdrop',
    'DJ, sound system and live music options',
    'Welcome drink and live food counters',
    'Buffet or leaf dinner service',
    'Couple entry effects and indoor crackers',
    'Candid photography and LED live projection',
  ],
  seemantham: [
    'Valaikaappu bangle ceremony setup',
    'Floral decoration for the seat and stage',
    'Traditional lunch on the leaf',
    'Family and portrait photography',
    'Pooja items and ritual arrangements',
    'Return gifts for the guests',
  ],
  'house-warming': [
    'Homam and paal kaaichal arrangements',
    'Entrance mango-leaf and flower decoration',
    'Purohit coordination and pooja material',
    'Lunch for family and neighbours',
    'Nadaswaram for the entry',
    'Photo coverage of the ceremony',
  ],
  birthday: [
    'Balloon arch, ceiling clusters and themed backdrop',
    'Cake table, name board and photo corner',
    'Briyani, mini-meals or tiffin counters',
    'Live chaat, ice cream and welcome drink stalls',
    'Sound system and music for the games',
    'Photo and video of the cake cutting',
    'Return gifts for the children',
  ],
  'office-event': [
    'Balloon and flower decoration for the entrance and stage',
    'Shop opening ribbon, name board and podium setup',
    'Briyani, buffet or packed lunch for the staff',
    'Sound system, mic, DJ and LED screen',
    'Photography and video of the programme',
    'Momento, return gift and thamboolam packing',
    'Guest transport and parking coordination',
  ],
};

@Component({
  selector: 'app-events-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, PageHero, Reveal],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class EventsPage {
  protected readonly business = BUSINESS;
  protected readonly services = SERVICES;

  protected readonly events = EVENT_TYPES.map((event) => ({
    ...event,
    inclusions: INCLUSIONS[event.id] ?? [],
  }));

  protected encodeEnquiry(eventName: string): string {
    return encodeURIComponent(
      `Hello Kasi Suba Muhurtham, I would like to enquire about arrangements for a ${eventName}.`,
    );
  }
}
