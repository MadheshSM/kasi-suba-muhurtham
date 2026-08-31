import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BUSINESS, MAP_LINK, SERVICES } from '../core/business';
import { Icon } from './icon';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly business = BUSINESS;
  protected readonly services = SERVICES;
  protected readonly mapLink = MAP_LINK;
  protected readonly year = new Date().getFullYear();

  protected readonly quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Our Services' },
    { path: '/events', label: 'Events We Handle' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
  ];
}
