import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { BUSINESS, EVENT_TYPES, PROCESS, SERVICES, WHY_US } from '../../core/business';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';

interface Slide {
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
}

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, Reveal],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  protected readonly business = BUSINESS;
  protected readonly services = SERVICES;
  protected readonly events = EVENT_TYPES;
  protected readonly whyUs = WHY_US;
  protected readonly process = PROCESS;

  /** First six services get the spotlight on the home page. */
  protected readonly featured = SERVICES.slice(0, 6);

  protected readonly slides: Slide[] = [
    {
      eyebrow: 'Weddings & Events',
      title: 'Your Muhurtham,',
      accent: 'Arranged A to Z',
      text: 'From the first nadaswaram note to the last banana leaf cleared — one team in Kancheepuram handling every arrangement of your function.',
    },
    {
      eyebrow: 'Traditional Catering',
      title: 'A Feast Served',
      accent: 'The Way It Should Be',
      text: 'Traditional sadhya on the banana leaf and dum briyani cooked in the pot on site, served hot to every guest in the hall.',
    },
    {
      eyebrow: 'Flowers & Stage',
      title: 'Fresh Flowers,',
      accent: 'Built That Morning',
      text: 'Mandapam work, stage backdrops, entrance arches and car decoration — sourced the same day so nothing wilts before the photos.',
    },
    {
      eyebrow: 'Personal Attention',
      title: 'A Small Team With',
      accent: 'Old-School Standards',
      text: 'We take on a limited number of functions so every family gets our full attention — and the owner on the phone, not a call centre.',
    },
  ];

  protected readonly current = signal(0);
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  protected goTo(index: number): void {
    this.current.set(index);
    this.restart();
  }

  private start(): void {
    // Respect a user's reduced-motion preference by leaving the first slide up.
    const reduced =
      typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    this.timer = setInterval(() => {
      this.current.update((i) => (i + 1) % this.slides.length);
    }, 6000);
  }

  private stop(): void {
    if (this.timer) clearInterval(this.timer);
    this.timer = undefined;
  }

  private restart(): void {
    this.stop();
    this.start();
  }
}
