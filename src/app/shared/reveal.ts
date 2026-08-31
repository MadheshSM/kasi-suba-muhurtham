import { Directive, ElementRef, OnDestroy, inject, input } from '@angular/core';

/**
 * Fades an element in the first time it scrolls into view.
 * Adds the `.reveal` class up front and `.is-visible` on intersection —
 * both defined in styles.scss, which also disables them under
 * prefers-reduced-motion.
 */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class Reveal implements OnDestroy {
  /** Stagger delay in milliseconds, e.g. [appReveal]="i * 80". */
  readonly appReveal = input<number | string>(0);

  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  constructor() {
    const el = this.host.nativeElement as HTMLElement;

    // No IntersectionObserver (very old browsers, some test runners): show it.
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const delay = Number(this.appReveal()) || 0;
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('is-visible');
          this.observer?.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
