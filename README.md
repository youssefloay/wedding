# Álvaro & Lama — Wedding Website Build Guide

This README analyses the client’s React mock (a **design baseline**, not production code) and outlines concrete steps to build the real site.

---

## What the client sent

The file is a **single-page React component** that:

- Renders **seven labelled UI screens** (desktop home, wedding details, travel & stay, RSVP desktop, “two forms” explainer, mobile home, mobile RSVP).
- Documents a **colour palette**, **typography** (serif headings + sans body), and **UI principles**.
- Uses **Tailwind-style utility classes** as layout/styling shorthand — treat these as **design tokens and spacing rules**, not as the final component structure.

**Important:** Navigation items **Gifts** and **FAQ** appear in the header but have **no dedicated mock screens** in this file. You will need copy, layout, or another deliverable from the client for those pages.

---

## Site map (from the spec)

| Route / section   | In mocks? | Notes |
|-------------------|-----------|--------|
| Home              | Yes       | Hero, CTAs, quick facts card |
| Wedding           | Yes       | Venue intro, timeline, weather, dress code |
| Travel & Stay     | Yes       | Castle stay, getting there, accommodation cards, transfers |
| RSVP              | Yes       | Multi-step flow (7 steps), progress bar |
| How it works      | Yes       | Two-form explanation — can live on RSVP or FAQ |
| Gifts             | No        | Nav only |
| FAQ               | No        | Nav only |

---

## Design system (extract from mock)

### Colours

| Token (name)   | Hex       | Typical use |
|----------------|-----------|-------------|
| Warm ivory     | `#F8F5F0` | Page background, subtle fills |
| Deep cobalt    | `#2F4A6D` | Headings, primary buttons, key UI |
| Dusty blue     | `#7C9AB0` | Labels, accents, secondary text |
| Olive green    | `#7A8A6A` | Listed in palette; use for subtle accents if needed |
| Sand beige     | `#E8DFD3` | Cards, progress track, highlight panels |
| Charcoal       | `#2B2B2B` | Body text |

### Typography

- **Headings:** Playfair Display (or equivalent serif).
- **Body:** Inter (or equivalent sans-serif).

Load via Google Fonts or self-host; set CSS variables or Tailwind `fontFamily` so headings and body stay consistent.

### UI patterns

- Large **rounded corners** (~20–28px on major cards; full-width sections with `overflow-hidden` where shown).
- **Soft luxury:** generous padding, light shadows, ivory/beige backgrounds, minimal clutter.
- **Desktop:** sticky header — logo left, nav centre/right, **RSVP** as primary CTA on the right.
- **Mobile:** header — **logo + RSVP pill + hamburger**; stack content; **large tap targets**; short copy.

### Imagery

- **Home hero:** full-width **castle** photography with a **soft ivory overlay** (mock uses a gradient placeholder — replace with real asset and overlay in CSS).

---

## Content inventory (copy already in mocks)

Use this as a starting CMS or static content map; confirm dates, prices, and legal wording with the couple before launch.

- **Couple / brand:** “Álvaro & Lama”
- **Event:** 17 April 2027, Castillo de Monda, Monda, Spain
- **RSVP deadline:** 1 November 2026
- **Timeline:** 16:30 Arrival → 17:00 Ceremony → 18:00 Cocktail → 20:00 Dinner → 22:30 Party
- **Weather / dress copy** as in Wedding Details screen
- **Travel:** Málaga airport ~40 min; options: Taxi, Rental car, Organised transfer
- **Accommodation bands:** Monda €90–€180; nearby villages €80–€200; Marbella €150–€400; transfers €95–€110 total
- **Transfer tiers:** up to 4 people €95 total; up to 7 people €100–€110 total
- **Legal / operational (must stay prominent):** RSVP does **not** confirm a castle room; **hotel contacts guest**; **payment at reservation**; **breakfast €15** per person
- **Two-form process:** Form 1 — now until 1 Nov 2026 (attendance, plus one, accommodation, transfer interest, welcome dinner estimate). Form 2 — **February 2027** (flights/arrival, final transfers, dietary/allergies, last practical info)

---

## RSVP flow (what we know vs what to define)

The mock shows **“Step X of 7”** and two example steps:

1. **Attendance** (mobile example): Yes / No / Not sure + deadline callout.
2. **Accommodation** (desktop example): Castle yes/no/unsure, room type, breakfast, **large “Important”** disclaimer.

**You still need from the client** the exact list of all **7 steps**, field names, validation rules, and where data is stored (see below). Reasonable candidates for the missing steps (to validate with them): plus-one, transfer interest, welcome dinner estimate, dietary (or defer to Form 2), contact details, review/submit.

---

## Recommended tech approach

The mock aligns naturally with:

- **React** (Vite or Next.js).
- **Tailwind CSS** (matches the utility-class style).
- **Routing:** React Router or Next.js App Router — one route per main nav item.
- **Forms:** React Hook Form (or similar) + accessible stepper component; persist draft in `localStorage` if you want recovery on refresh (confirm with client).
- **Backend / data:** Choose based on budget:
  - **Low friction:** Google Forms / Typeform / Tally for MVP (less custom UI).
  - **Custom:** Serverless API + database (e.g. Supabase, PlanetScale, Firebase) + email notifications to the couple.
- **Hosting:** Vercel, Netlify, or Cloudflare Pages for a static/SSR React site.
- **Analytics / privacy:** only if the couple wants it; keep GDPR in mind for EU guests.

---

## Step-by-step build plan

### Phase 1 — Project foundation

1. Scaffold **React + TypeScript** (Vite or Next.js).
2. Add **Tailwind**; configure `theme.extend` with the **hex palette** and **font families** (Playfair + Inter).
3. Add global styles: base background `#F8F5F0` or white per section, default text `#2B2B2B`, link/button focus states for accessibility.

### Phase 2 — Layout shell

4. Build **`<SiteHeader />`**:
   - Desktop: logo, links (Home, Wedding, Travel & Stay, Gifts, FAQ), **RSVP** button.
   - Mobile: logo, RSVP pill, hamburger; slide-down or full-screen **nav menu**.
   - Make header **sticky** with appropriate `z-index` and backdrop if specified (mock uses semi-transparent white bar).
5. Build **`<SiteFooter />`** (optional but typical): repeat key date/location, contact, privacy if you collect data.

### Phase 3 — Marketing pages

6. **Home:** hero (image + overlay), headline, subcopy, primary **RSVP** and secondary **View details**; replicate the **quick facts** strip (date, place, stay, RSVP by) — desktop grid vs mobile stack per mock.
7. **Wedding details:** two-column intro + date card; **timeline** as a row of cards (desktop); stack on mobile; **Weather** and **Dress code** side-by-side (stack on small screens).
8. **Travel & Stay:** two top cards (castle stay + getting there); **four accommodation/price cards**; **transfer** section with pricing grid.
9. **Gifts & FAQ:** **request copy and wireframes** from client, or propose a simple layout matching the same card/typography system.

### Phase 4 — “How it works”

10. Implement the **two-form explanation** as a section on the **RSVP landing page** and/or a **FAQ** entry, using the exact messaging from the mock so guests understand timing (now vs Feb 2027).

### Phase 5 — RSVP (highest risk / highest value)

11. Map the **7 steps** with the client; define each screen’s fields and validation.
12. Build a **stepper**: progress bar, step label (“Step n of 7”), **Back** / **Continue**, keyboard and screen-reader friendly (ARIA `aria-current`, live region for step changes).
13. Ensure **accommodation + payment disclaimers** appear on the right steps and use **high-contrast callout** styling (sand/beige panel + bold “Important”) so they are “impossible to miss,” per client notes.
14. Wire **form submission** to your backend or third-party form service; send confirmation email to guest if possible.
15. Add **deadline messaging** (1 Nov 2026) where relevant (e.g. attendance step).

### Phase 6 — QA and launch

16. **Responsive pass:** breakpoints for timeline (5 columns → horizontal scroll or 2–3 columns → single column), accommodation cards (4 → 2 → 1), hero (two-column → stacked).
17. **Accessibility:** colour contrast (especially dusty blue on ivory), focus rings, form labels, error messages.
18. **Performance:** optimise hero image (WebP/AVIF, `sizes`, lazy load below fold).
19. **SEO / sharing:** title, meta description, Open Graph image (couple photo or venue).
20. **Legal:** privacy policy if you store personal data; cookie banner if required.

---

## Questions to send back to the client

- Final **list of all 7 RSVP steps** and required fields.
- **Gifts** page: registry links, charity, or “no gifts” wording?
- **FAQ** topics and answers.
- **Hero and venue photos** (licence/resolution), plus any **Spanish/English** language requirements.
- **RSVP backend preference** (custom vs form tool) and who receives notifications.
- Confirm **prices and dates** are final (€ amounts, breakfast, transfer tiers, RSVP deadline).

---

## Optional: preserving the mock as reference

You can keep the client’s component in the repo (e.g. `/design-reference/App.jsx`) behind a dev-only route so designers and developers can compare implementation to the baseline. Do not ship that page to production unless the couple wants an internal style guide.

---

*Generated from the client’s React UI baseline. Update this README as scope and copy are confirmed.*
