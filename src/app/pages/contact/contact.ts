import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BUSINESS, EVENT_TYPES, MAP_EMBED, MAP_LINK, SERVICES } from '../../core/business';
import { Icon } from '../../shared/icon';
import { PageHero } from '../../shared/page-hero';
import { Reveal } from '../../shared/reveal';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, Icon, PageHero, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly business = BUSINESS;
  protected readonly events = EVENT_TYPES;
  protected readonly services = SERVICES;
  protected readonly mapLink = MAP_LINK;

  /** The embed URL is a fixed constant, so this bypass is safe. */
  protected readonly mapEmbed = this.sanitizer.bypassSecurityTrustResourceUrl(MAP_EMBED);

  /**
   * The business has no email address or server, so the enquiry form composes a
   * pre-filled WhatsApp message instead of posting anywhere.
   */
  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s-]{10,15}$/)]],
    eventType: ['Wedding', Validators.required],
    date: [''],
    guests: [''],
    services: [[] as string[]],
    message: [''],
  });

  protected readonly submitted = signal(false);
  protected readonly sent = signal(false);

  protected readonly selectedServices = computed(() => this.form.controls.services.value);

  protected toggleService(name: string, checked: boolean): void {
    const control = this.form.controls.services;
    const next = checked
      ? [...control.value, name]
      : control.value.filter((item) => item !== name);
    control.setValue(next);
  }

  protected isChecked(name: string): boolean {
    return this.form.controls.services.value.includes(name);
  }

  protected submit(): void {
    this.submitted.set(true);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();
    const lines = [
      'Hello Kasi Suba Muhurtham, I would like to enquire about a function.',
      '',
      `Name: ${v.name}`,
      `Phone: ${v.phone}`,
      `Function: ${v.eventType}`,
    ];

    if (v.date) lines.push(`Date: ${v.date}`);
    if (v.guests) lines.push(`Approx. guests: ${v.guests}`);
    if (v.services.length) lines.push(`Services needed: ${v.services.join(', ')}`);
    if (v.message) lines.push('', `Details: ${v.message}`);

    const url = `https://wa.me/${BUSINESS.phones[0].whatsapp}?text=${encodeURIComponent(
      lines.join('\n'),
    )}`;

    window.open(url, '_blank', 'noopener');
    this.sent.set(true);
  }

  protected invalid(control: 'name' | 'phone'): boolean {
    const c = this.form.controls[control];
    return c.invalid && (c.touched || this.submitted());
  }
}
