import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Kasi Suba Muhurtham | Wedding & Event Management in Kancheepuram',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'services',
    title: 'Our Services | Kasi Suba Muhurtham, Kancheepuram',
    loadComponent: () => import('./pages/services/services').then((m) => m.ServicesPage),
  },
  {
    path: 'events',
    title: 'Events We Handle | Kasi Suba Muhurtham, Kancheepuram',
    loadComponent: () => import('./pages/events/events').then((m) => m.EventsPage),
  },
  {
    path: 'about',
    title: 'About Us | Kasi Suba Muhurtham, Kancheepuram',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'contact',
    title: 'Contact Us | Kasi Suba Muhurtham, Kancheepuram',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
