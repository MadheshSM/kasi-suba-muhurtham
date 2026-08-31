import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BUSINESS } from '../core/business';
import { Icon } from './icon';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly business = BUSINESS;
  protected readonly primaryPhone = BUSINESS.phones[0];

  protected readonly links = [
    { path: '/', label: 'Home', exact: true },
    { path: '/services', label: 'Our Services', exact: false },
    { path: '/events', label: 'Events', exact: false },
    { path: '/about', label: 'About Us', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
