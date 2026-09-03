import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Inline SVG icon set. Everything ships in the bundle so the site has no
 * external icon dependency and renders identically offline.
 *
 * Usage: <app-icon name="catering" />
 */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[attr.aria-hidden]': 'true' },
  styles: [
    `
      :host {
        display: inline-flex;
        line-height: 0;
      }
      svg {
        width: 100%;
        height: 100%;
      }
    `,
  ],
  template: `
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      focusable="false"
    >
      @switch (name()) {
        <!-- ── Services ─────────────────────────────────────────────── -->
        @case ('catering') {
          <!-- banana leaf meal -->
          <path d="M3 14c0-5 4.5-9 10-9h8c0 5.5-4 10-9.5 10H3z" />
          <path d="M21 5 8.5 15" />
          <circle cx="9" cy="10.5" r="1.3" />
          <circle cx="13.5" cy="9" r="1.3" />
          <path d="M3 19h18" />
        }
        @case ('nadaswaram') {
          <!-- nadaswaram: conical wind instrument with a flared bell -->
          <path d="M10.2 3.6h1.6V2.3h-1.6z" />
          <path d="M10.2 3.6 8.2 15.5h5.9L11.8 3.6z" />
          <path d="M8.2 15.5c-1.2 2.3-1.7 3.9-1.4 5h9.6c.3-1.1-.2-2.7-1.4-5" />
          <path d="M6.8 20.5h8.6" />
          <circle cx="11" cy="7.2" r="0.7" />
          <circle cx="11" cy="10" r="0.7" />
          <circle cx="11" cy="12.8" r="0.7" />
        }
        @case ('flower') {
          <circle cx="12" cy="12" r="2.4" />
          <path d="M12 9.6c0-2.6-.9-4.6-2.4-4.6S7 7 9.6 10.8" />
          <path d="M14.4 12c2.6 0 4.6-.9 4.6-2.4S17 7 13.2 9.6" />
          <path d="M12 14.4c0 2.6.9 4.6 2.4 4.6s2.6-2 0-5.8" />
          <path d="M9.6 12c-2.6 0-4.6.9-4.6 2.4s2 2.6 5.8 0" />
        }
        @case ('camera') {
          <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.7l1.3-2h6.9l1.3 2h1.8A2.5 2.5 0 0 1 21 8.5v9A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" />
          <circle cx="12" cy="13" r="3.6" />
        }
        @case ('beauty') {
          <!-- bridal mirror + kumkum -->
          <circle cx="11" cy="9.5" r="5.5" />
          <path d="M11 15v6" />
          <path d="M8 21h6" />
          <path d="M9 8.5s1-1.4 2-1.4 2 1.4 2 1.4" />
        }
        @case ('ritual') {
          <!-- kuthu vilakku lamp -->
          <path d="M12 3c1.6 1.7 1.6 3.3 0 4.6-1.6-1.3-1.6-2.9 0-4.6z" />
          <path d="M7.5 11h9l-1.3 2.6H8.8z" />
          <path d="M12 13.6V19" />
          <path d="M8 21c0-1.4 1.8-2 4-2s4 .6 4 2z" />
          <path d="M9 11a3 3 0 0 1 6 0" />
        }
        @case ('dj') {
          <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
          <rect x="2.5" y="13.5" width="4" height="6" rx="1.6" />
          <rect x="17.5" y="13.5" width="4" height="6" rx="1.6" />
        }
        @case ('gift') {
          <rect x="3" y="9" width="18" height="11.5" rx="1.6" />
          <path d="M2 9h20" />
          <path d="M12 9v11.5" />
          <path d="M12 9S10.6 4 8.3 4a2.2 2.2 0 0 0 0 5z" />
          <path d="M12 9s1.4-5 3.7-5a2.2 2.2 0 0 1 0 5z" />
        }
        @case ('transport') {
          <path d="M4 16V8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5V16" />
          <path d="M4 11.5h16" />
          <path d="M3 16h18v2.5H3z" />
          <circle cx="7.5" cy="20" r="1.4" />
          <circle cx="16.5" cy="20" r="1.4" />
        }
        @case ('fireworks') {
          <path d="M12 2v3.5M12 18.5V22M2 12h3.5M18.5 12H22" />
          <path d="m5 5 2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19" />
          <circle cx="12" cy="12" r="3" />
        }
        @case ('drinks') {
          <path d="M5 4h11l-1.2 14a2.4 2.4 0 0 1-2.4 2.2H8.6A2.4 2.4 0 0 1 6.2 18z" />
          <path d="M15.6 8H18a2.5 2.5 0 0 1 0 5h-2" />
          <path d="M5.6 9h9.8" />
        }

        <!-- ── Event types ──────────────────────────────────────────── -->
        @case ('wedding') {
          <!-- thali / interlocking rings -->
          <circle cx="9" cy="14" r="5" />
          <circle cx="15" cy="14" r="5" />
          <path d="m12 6-2 3h4z" />
        }
        @case ('engagement') {
          <path d="m12 8 3.5-4h-7z" />
          <circle cx="12" cy="15" r="5.5" />
        }
        @case ('reception') {
          <path d="M4 20h16" />
          <path d="M6 20v-6a6 6 0 0 1 12 0v6" />
          <path d="M12 8V4" />
          <path d="m9.5 5.5 2.5-2 2.5 2" />
        }
        @case ('seemantham') {
          <!-- bangles -->
          <circle cx="9.5" cy="12" r="6" />
          <circle cx="15.5" cy="12" r="3.5" />
        }
        @case ('house') {
          <path d="m3 11 9-7 9 7" />
          <path d="M5.5 9.5V20h13V9.5" />
          <path d="M10 20v-5.5h4V20" />
        }
        @case ('cake') {
          <!-- birthday cake with a candle -->
          <path d="M4 20.5h16" />
          <path d="M5.2 20.5v-6a2 2 0 0 1 2-2h9.6a2 2 0 0 1 2 2v6" />
          <path d="M5.2 16.4c1.7 0 1.7 1.4 3.4 1.4s1.7-1.4 3.4-1.4 1.7 1.4 3.4 1.4 1.7-1.4 3.4-1.4" />
          <path d="M12 12.5V9.4" />
          <path d="M12 7.3c1-1.1 1-2 0-3.1-1 1.1-1 2 0 3.1z" />
        }
        @case ('balloon') {
          <!-- party balloons for birthdays and office events -->
          <ellipse cx="9" cy="8.2" rx="4" ry="5" />
          <path d="m9 13.2.9 1.3H8.1z" />
          <path d="M9 14.5c0 1.9 2.4 2.1 2.4 4" />
          <ellipse cx="16.6" cy="11.4" rx="3.2" ry="4" />
          <path d="m16.6 15.4.8 1.1h-1.6z" />
          <path d="M16.6 16.5c0 1.5-1.5 1.7-1.5 3.3" />
        }

        <!-- ── Why us ───────────────────────────────────────────────── -->
        @case ('single-point') {
          <circle cx="12" cy="12" r="3" />
          <path d="M12 9V4M12 20v-5M9 12H4M20 12h-5" />
          <circle cx="12" cy="3" r="1.4" />
          <circle cx="12" cy="21" r="1.4" />
          <circle cx="3" cy="12" r="1.4" />
          <circle cx="21" cy="12" r="1.4" />
        }
        @case ('tradition') {
          <path d="M3 20h18" />
          <path d="M5 20V10l7-6 7 6v10" />
          <path d="M9.5 20v-5a2.5 2.5 0 0 1 5 0v5" />
        }
        @case ('rupee') {
          <circle cx="12" cy="12" r="9" />
          <path d="M9 8h6M9 11h6M9 8c3 0 4 1.4 4 3s-1 3-4 3l4.5 4.5" />
        }
        @case ('attention') {
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="8" r="4" />
        }
        @case ('clock') {
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5.3l3.4 2" />
        }
        @case ('leaf') {
          <path d="M4 20c0-8 5-13 16-13 0 9-5 13-11 13-2.8 0-5-.8-5-.8z" />
          <path d="M4.5 19.5C9 15 13 12 18.5 9.5" />
        }

        <!-- ── UI ───────────────────────────────────────────────────── -->
        @case ('phone') {
          <path
            d="M21 16.9v2.6a1.8 1.8 0 0 1-2 1.8 18.5 18.5 0 0 1-8-2.9 18.2 18.2 0 0 1-5.6-5.6A18.5 18.5 0 0 1 2.5 4.8 1.8 1.8 0 0 1 4.3 3h2.6a1.8 1.8 0 0 1 1.8 1.5c.1.9.3 1.8.7 2.6a1.8 1.8 0 0 1-.4 1.9L8 10.1a15 15 0 0 0 5.9 5.9l1.1-1a1.8 1.8 0 0 1 1.9-.4c.8.4 1.7.6 2.6.7a1.8 1.8 0 0 1 1.5 1.8z"
          />
        }
        @case ('whatsapp') {
          <path
            d="M3.2 20.8 4.5 16A8.4 8.4 0 1 1 8 19.5z"
          />
          <path
            d="M9 8.4c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.5l.7 1.7c.1.2 0 .4-.1.6l-.4.5c-.1.2-.3.3-.1.6a6.6 6.6 0 0 0 2.9 2.5c.3.2.5 0 .6-.1l.6-.7c.2-.2.3-.2.6-.1l1.6.8c.3.1.4.3.4.5a1.9 1.9 0 0 1-1.3 1.6 3 3 0 0 1-2.3-.2 10.6 10.6 0 0 1-4.9-4.4 3.7 3.7 0 0 1-.7-2 2.4 2.4 0 0 1 .7-1.3z"
          />
        }
        @case ('location') {
          <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.6" />
        }
        @case ('mail') {
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3.5 6.5 8.5 6 8.5-6" />
        }
        @case ('arrow-right') {
          <path d="M5 12h14M13 6l6 6-6 6" />
        }
        @case ('menu') {
          <path d="M4 7h16M4 12h16M4 17h16" />
        }
        @case ('close') {
          <path d="M6 6l12 12M18 6 6 18" />
        }
        @case ('check') {
          <path d="m4.5 12.5 5 5 10-11" />
        }
        @case ('star') {
          <path d="m12 3.5 2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L3.5 9.7l5.9-.9z" />
        }
        @case ('monogram') {
          <!-- serif "K" brand mark, matching the favicon -->
          <g stroke-linecap="butt" transform="translate(12 12) scale(1.15) translate(-12 -12)">
            <path d="M8.1 4.5v15" stroke-width="3.2" />
            <path d="M5.3 5.2h5.6" stroke-width="1.4" />
            <path d="M5.3 18.8h5.6" stroke-width="1.4" />
            <path d="M9.1 13.2 16.3 5.6" stroke-width="2.8" />
            <path d="M14.5 5.2h3.9" stroke-width="1.4" />
            <path d="M10.5 11.2 17.3 18.6" stroke-width="3" />
            <path d="M15 18.8h3.7" stroke-width="1.5" />
          </g>
        }
        @default {
          <circle cx="12" cy="12" r="8" />
        }
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<string>();
}
