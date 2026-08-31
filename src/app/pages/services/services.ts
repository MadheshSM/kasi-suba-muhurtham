import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BUSINESS, SERVICES } from '../../core/business';
import { Icon } from '../../shared/icon';
import { PageHero } from '../../shared/page-hero';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-services-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, PageHero, Reveal],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class ServicesPage {
  protected readonly business = BUSINESS;
  protected readonly services = SERVICES;

  /** Pre-fills the WhatsApp message for a specific service. */
  protected encodeEnquiry(serviceName: string): string {
    return encodeURIComponent(
      `Hello Kasi Suba Muhurtham, I would like to know more about "${serviceName}" for my function.`,
    );
  }
}
