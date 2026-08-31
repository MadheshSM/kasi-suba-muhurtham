# Kasi Suba Muhurtham — Website

Angular 20 website for **Kasi Suba Muhurtham**, A to Z event management services,
69-A East Raja Street, Kancheepuram - 631 502.

Built with standalone components, signals, lazy-loaded routes and SCSS. No UI
framework and no external icon/font libraries beyond Google Fonts.

## Run it

```bash
npm install
npm start           # dev server on http://localhost:4200
npm run build       # production build into dist/
```

## Pages

| Route       | What's on it                                                              |
| ----------- | ------------------------------------------------------------------------- |
| `/`         | Hero slider, quick facts, about, 11 services, 5 function types, why-us, process, CTA |
| `/services` | All 11 services in detail, with a sticky jump bar and per-service WhatsApp links |
| `/events`   | Wedding, engagement, reception, seemantham, house warming + what each includes |
| `/about`    | Story, why-us, the five promises, how we work, service area                |
| `/contact`  | Contact cards, enquiry form, Google map, address block                     |

## Editing content

**All business content lives in one file: [`src/app/core/business.ts`](src/app/core/business.ts).**
Change it there and it updates across every page, the header, and the footer.

- `BUSINESS` — name, tagline, address, phone numbers, opening hours, service area
- `SERVICES` — the 11 services from the printed card (name, tagline, description, highlights)
- `EVENT_TYPES` — the 5 function types, with their Tamil names
- `WHY_US`, `PROCESS` — the marketing sections

Per-event inclusion lists live in `INCLUSIONS` in
[`src/app/pages/events/events.ts`](src/app/pages/events/events.ts).

### Phone numbers

Each phone entry has three forms, all used somewhere:

```ts
{ label: '9043 481 014', dial: '+919043481014', whatsapp: '919043481014' }
```

`label` is displayed, `dial` powers `tel:` links, `whatsapp` powers `wa.me` links.
Change all three together.

## The enquiry form

The card has no email address and the site has no backend, so the contact form
does **not** post anywhere. It validates the input, builds a formatted message,
and opens WhatsApp with everything pre-filled — the visitor just presses send.

If you later want enquiries by email instead, replace `submit()` in
[`src/app/pages/contact/contact.ts`](src/app/pages/contact/contact.ts) with an
HTTP POST to whatever service you use (Formspree, a small backend, etc.).

## Photographs — the one thing still missing

The only artwork supplied was the visiting card, so the site is currently built
from CSS and inline SVG: gradient panels, the Ganesha crest medallion, ornamental
rings and a set of hand-drawn service icons. The one real photo used is the
banana-leaf meal, cropped out of the card artwork for the About section.

**Real photographs of your own functions will lift this site more than any other
change.** Once you have them:

1. Drop the files in `public/images/`.
2. Replace the decorative panels with `<img>` tags. The places designed to take a
   photo are:
   - `.about__photo` in `src/app/pages/home/home.scss` (currently the cropped card crop)
   - `.row__art` in `src/app/pages/services/services.scss` — one per service
   - `.hero__crest` in `src/app/pages/home/home.html` — swap for a hero photo or slider
3. A gallery page would be a natural addition at that point.

Use your own photos only. Do not use images taken from other event companies'
websites.

## Notes

- Icons are inline SVG in [`src/app/shared/icon.ts`](src/app/shared/icon.ts) —
  add a new `@case` to add an icon.
- `appReveal` ([`src/app/shared/reveal.ts`](src/app/shared/reveal.ts)) fades
  elements in on scroll; pass a number for a stagger delay.
- Everything respects `prefers-reduced-motion` — the hero slider does not
  auto-advance and animations are disabled for users who ask for that.
- SEO: page titles are set per route in `app.routes.ts`; the meta description and
  `LocalBusiness` structured data are in `src/index.html`.
