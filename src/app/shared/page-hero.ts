import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from './icon';

/** Banner used at the top of every inner page. */
@Component({
  selector: 'app-page-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  styles: [
    `
      :host {
        position: relative;
        display: block;
        overflow: hidden;
        padding-block: clamp(2.75rem, 6vw, 4.5rem);
        text-align: center;
        background:
          radial-gradient(ellipse at 50% 0%, rgba(229, 193, 104, 0.32), transparent 62%),
          linear-gradient(160deg, #fdf5e4, #f8e2bf);
        border-bottom: 1px solid var(--gold-pale);
      }

      .inner {
        position: relative;
      }

      h1 {
        font-size: clamp(1.95rem, 5vw, 3.15rem);
        margin-bottom: 0.55rem;
      }

      .lede {
        color: var(--ink-soft);
        max-width: 56ch;
        margin: 0 auto;
        font-size: 1.02rem;
      }

      .crumbs {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.45rem;
        margin-top: 1.4rem;
        font-size: 0.86rem;
        color: var(--ink-mute);
      }

      .crumbs a {
        color: var(--rust);
        font-weight: 500;
      }

      .crumbs app-icon {
        width: 14px;
        height: 14px;
        color: var(--gold);
      }
    `,
  ],
  template: `
    <div class="motif-lattice" aria-hidden="true"></div>
    <div class="shell inner">
      <span class="eyebrow">{{ eyebrow() }}</span>
      <h1>{{ heading() }}</h1>
      <div class="flourish"><span></span></div>
      @if (lede()) {
        <p class="lede">{{ lede() }}</p>
      }
      <nav class="crumbs" aria-label="Breadcrumb">
        <a routerLink="/">Home</a>
        <app-icon name="arrow-right" />
        <span>{{ heading() }}</span>
      </nav>
    </div>
  `,
})
export class PageHero {
  readonly eyebrow = input.required<string>();
  readonly heading = input.required<string>();
  readonly lede = input<string>('');
}
