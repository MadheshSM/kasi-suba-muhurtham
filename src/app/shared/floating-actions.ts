import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BUSINESS } from '../core/business';
import { Icon } from './icon';

/** Persistent call / WhatsApp buttons — the main conversion path on mobile. */
@Component({
  selector: 'app-floating-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  styles: [
    `
      :host {
        position: fixed;
        right: clamp(0.85rem, 2.5vw, 1.5rem);
        bottom: clamp(0.85rem, 2.5vw, 1.5rem);
        z-index: 70;
        display: grid;
        gap: 0.7rem;
      }

      a {
        width: 54px;
        height: 54px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        color: #fff;
        box-shadow: 0 10px 26px rgba(51, 24, 10, 0.32);
        transition:
          transform 0.22s ease,
          box-shadow 0.22s ease;
      }

      a:hover {
        transform: translateY(-3px) scale(1.05);
        color: #fff;
      }

      app-icon {
        width: 26px;
        height: 26px;
      }

      .wa {
        background: #25d366;
      }

      .call {
        background: linear-gradient(135deg, var(--orange), var(--rust));
        position: relative;
      }

      /* Soft pulse to draw the eye to the primary action. */
      .call::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50%;
        border: 2px solid var(--orange);
        animation: ring 2.2s ease-out infinite;
      }

      @keyframes ring {
        0% {
          transform: scale(1);
          opacity: 0.7;
        }
        100% {
          transform: scale(1.65);
          opacity: 0;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .call::after {
          display: none;
        }
      }

      @media (max-width: 520px) {
        a {
          width: 48px;
          height: 48px;
        }
        app-icon {
          width: 23px;
          height: 23px;
        }
      }
    `,
  ],
  template: `
    <a
      class="wa"
      [href]="'https://wa.me/' + phone.whatsapp + '?text=' + enquiry"
      target="_blank"
      rel="noopener"
      aria-label="Message Kasi Suba Muhurtham on WhatsApp"
    >
      <app-icon name="whatsapp" />
    </a>
    <a class="call" [href]="'tel:' + phone.dial" aria-label="Call Kasi Suba Muhurtham">
      <app-icon name="phone" />
    </a>
  `,
})
export class FloatingActions {
  protected readonly phone = BUSINESS.phones[0];
  protected readonly enquiry = encodeURIComponent(
    'Hello Kasi Suba Muhurtham, I would like to enquire about arrangements for a function.',
  );
}
