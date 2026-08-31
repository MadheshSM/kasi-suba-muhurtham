import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BUSINESS, MAP_LINK, PROCESS, SERVICES, WHY_US } from '../../core/business';
import { Icon } from '../../shared/icon';
import { PageHero } from '../../shared/page-hero';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, PageHero, Reveal],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly business = BUSINESS;
  protected readonly services = SERVICES;
  protected readonly whyUs = WHY_US;
  protected readonly process = PROCESS;
  protected readonly mapLink = MAP_LINK;

  protected readonly promises = [
    'We quote in writing, itemised, before you commit to anything.',
    'What we quote is what you pay — no additions discovered on the function day.',
    'We visit your hall before the event instead of guessing the layout.',
    'One person from our team stays reachable through the whole function.',
    'If something is outside our capacity, we say so instead of over-promising.',
  ];
}
