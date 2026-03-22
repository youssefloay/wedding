# Wedding website — Master spec & build reference

**Couple:** Álvaro Recas & Lama Loay  
**Date:** 17 April 2027  
**Venue:** Castillo de Monda, Málaga, Spain  

This document is the **authoritative product spec**. An earlier version of this README only analysed the client’s **React UI mock**; it did **not** include the items below (full names, Málaga, strict menu order with **RSVP in the nav**, **footer** content, **8-step** Form 1 flow, **Form 2** fields, **exact** Travel/Gifts copy, **booking links**, **email campaign** plan, **image** direction, or **business rules** like CSV export and hotel handoff).

---

## What the mock-only README missed (now covered here)

| Topic | Old README | Master spec |
|--------|------------|-------------|
| Couple naming | “Álvaro & Lama” shorthand | Full names: **Álvaro Recas & Lama Loay** |
| Venue line | “Monda, Spain” | **Castillo de Monda, Málaga, Spain** |
| Header nav | Home → Wedding → Travel → Gifts → FAQ (+ RSVP CTA) | **Home → Wedding → Travel & Stay → Gifts → RSVP → FAQ**, plus **RSVP** CTA on the right |
| Footer | Listed as optional | **Required:** names, date, venue, RSVP + Contact links, tagline |
| Home hero | “A celebration in Andalusia” style from mock | Title **Álvaro & Lama**, subtitle **We are getting married**, intro + quick info bullets |
| Travel | Paraphrased castle copy | **Exact** castle paragraph + **Important** bullets + **Booking.com / Skyscanner** links per area |
| Gifts | Placeholder | **Exact** copy about presence + contribution *(details later)* |
| RSVP | 7 steps (inferred from mock) | **Form 1:** **8 steps** — Contact → Attendance → Plus one → Welcome dinner → Accommodation → Transport → Dietary → Review; **phone** + **light dietary** on Form 1 |
| Second form | Mentioned generally | **Form 2 — Logistics (Feb 2027)** with its own fields; **must not** merge with Form 1 |
| Payments | Implied | **Must not** handle payments or auto-confirm bookings |
| Operations | Not stated | **CSV export**; forward accommodation interest **to hotel** |
| Email | Not stated | **5-step** invitation → reminder → confirmation → logistics → final |
| Visual style | “Soft luxury”, shadows in mock | **No heavy shadows**; Mediterranean, warm spacing |
| Images | Generic castle | Search terms: Andalusian castle sunset, Castillo de Monda exterior, tiles, olives, stone, sunset |

---

## 1. Objective

Build a responsive wedding website + RSVP system that:

- Is elegant, simple, and **mobile-first**
- Serves **international** guests with clear travel/stay info
- Collects **RSVP + accommodation requests**
- Does **not** handle payments
- Is straightforward to build with AI or a junior developer

---

## 2. Website structure

### Main menu (header)

Order (strict):

1. Home  
2. Wedding  
3. Travel & Stay  
4. Gifts  
5. RSVP  
6. FAQ  

**Right-side CTA:** RSVP (button).

### Footer

- **Álvaro & Lama** (display name; full legal names in spec header)  
- **17 April 2027**  
- **Castillo de Monda, Spain**  

**Links:**

- RSVP  
- Contact (email — use a real address in production; see `src/config.ts`)

**Line of text:**  
*Made with love for our friends and family*

---

## 3. Design system

### Colours (strict)

| Role | Hex |
|------|-----|
| Background | `#F8F5F0` |
| Primary | `#2F4A6D` |
| Secondary | `#7C9AB0` |
| Accent | `#7A8A6A` |
| Highlight | `#E8DFD3` |
| Text | `#2B2B2B` |

### Typography

- **Headings:** Playfair Display  
- **Body:** Inter  

### Style rules

- Soft, elegant, Mediterranean  
- Rounded corners **20–30px**  
- **No heavy shadows**  
- Warm spacing  
- **Mobile-first**  

---

## 4. Home page (full content)

### Hero

- **Title:** Álvaro & Lama  
- **Subtitle:** We are getting married  
- **Text:** We are so happy to celebrate this special moment with you in Andalusia.  
- **Date line:** 17 April 2027 — Castillo de Monda  
- **Buttons:** RSVP · View Details  

### Intro

Welcome to our wedding website.  
Here you’ll find everything you need to plan your trip, organise your stay, and celebrate with us.

### Quick info

- Castillo de Monda, Spain  
- 17 April 2027  
- Málaga Airport (~40 min)  
- Accommodation available  

---

## 5. Wedding page

### Venue

Castillo de Monda is a historic Andalusian castle nestled in the mountains near Marbella, offering breathtaking views and a unique blend of Spanish and Moorish heritage.

### Schedule

- 16:30 Arrival  
- 17:00 Ceremony  
- 18:00 Cocktail  
- 20:00 Dinner  
- 22:30 Party  

### Weather

18–21°C daytime · 10–13°C evening — bring a light layer.

### Dress code

Elegant / formal — outdoor-friendly shoes recommended.

---

## 6. Travel & stay (critical)

### Getting there

- Nearest airport: **Málaga-Costa del Sol Airport**  
- Transport: **Taxi**, **Rental car**, **Transfer** (wording per spec — not necessarily “Organised transfer”)

### Castle accommodation (exact text)

> If you would like to stay at Castillo de Monda, please indicate your interest in the RSVP form.  
> The hotel will contact you directly to confirm availability and booking details.

**Important:**

- Submitting the form does **NOT** confirm a reservation  
- Payment is required at the time of booking  
- Breakfast: **€15** per person  

### Alternative accommodation

If you prefer not to stay at the castle, there are many nearby options.

| Area | Notes | Link (spec) |
|------|--------|-------------|
| **Monda** | Guesthouses / rentals, €90–€180 / night | https://www.booking.com/city/es/monda.html |
| **Nearby villages** (Ojén, Coín, Tolox) | €80–€200 / night | https://www.skyscanner.net/hotels/spain/monda-hotels |
| **Marbella** (best option) | 20–25 min, €150–€400 / night | https://www.booking.com/city/es/marbella.html |

### Transfers

- Optional, **paid by guests**  
- **€95** total — up to 4 people  
- **€100–110** total — up to 7 people  
- Group guests where possible  

---

## 7. Gifts page (exact copy)

Your presence at our wedding is the greatest gift of all.  
If you wish to contribute, we would be grateful for a contribution towards our future together.  
*(Details shared later)*

---

## 8. RSVP system (critical)

### Rule

The system **must** include **two separate forms** (different flows or URLs). **Do not** merge Form 1 and Form 2.

### Why two forms

- Less friction early  
- Accurate data at the right time  
- Avoids early flight uncertainty  

### Form 1 — RSVP (now)

**Deadline:** 1 November 2026  

**Purpose:** Attendance, guest count estimate, accommodation, welcome dinner planning.

**Fields (grouped):**

1. **Contact:** full name, email, **phone**  
2. **Attendance:** Yes / No / Not sure  
3. **Plus one:** Yes / No + name  
4. **Welcome dinner:** Yes / No / Not sure  
5. **Accommodation:** Stay at castle? Yes / No / Maybe; room type (optional); breakfast Yes / No  
6. **Important block (must show):** hotel contacts guest; form does not confirm reservation; payment at booking  
7. **Transport:** Need transfer? Yes / No / Maybe  
8. **Dietary (light):** restrictions (optional)  

### UX flow (Form 1 steps)

1. Contact  
2. Attendance  
3. Plus one  
4. Welcome dinner  
5. Accommodation  
6. Transport  
7. Dietary  
8. Review  

### Form 2 — Logistics (February 2027)

**Purpose:** Final planning, transfers, seating.

**Fields:** Flight arrival, flight departure, arrival time, transfer confirmation, dietary (final).

---

## 9. Email flow

1. **Invitation** — send with website  
2. **Reminder** — mid-October  
3. **Confirmation** — after RSVP  
4. **Logistics** — February  
5. **Final info** — one week before  

---

## 10. Images

**Hero:** search e.g. “Andalusian castle sunset”, “Castillo de Monda exterior”.  

**Support:** Spanish blue tiles, olive trees, warm stone walls, sunset lighting.  

**Style:** Natural, elegant — avoid cheesy wedding stock.

---

## 11. Business rules

### Must

- **Not** handle payments  
- **Send** accommodation requests to the hotel (process/integration TBD)  
- Allow **CSV export** of RSVPs  

### Must not

- Confirm bookings automatically  
- Handle money  
- Merge RSVP (Form 1) with logistics (Form 2)  

---

## Implementation status (this repo)

Rough audit against the master spec:

| Area | Status |
|------|--------|
| Stack (Vite, React, TS, Tailwind, Router) | Done |
| Header order + RSVP in nav + CTA (§2) | Done |
| Footer (§2) | Done — set **`CONTACT_EMAIL`** in `src/config.ts` |
| Home copy (§4) | Hero, intro, quick info aligned |
| Wedding / Travel / Gifts exact copy & links | Aligned; external booking links open in new tab |
| Form 1 — 8 steps (Contact → … → Dietary → Review) + phone | Done — see `src/pages/RSVP.tsx` |
| Form 2 — logistics (Feb 2027) | Done — **`/logistics`** (`LogisticsForm.tsx`); linked from RSVP “How it works” |
| CSV export | Done — per-submission download after submit; bulk **`/export`** (localStorage demo only) |
| Hotel notify | **Not automated** — export CSV / connect email or PMS per §11 |
| No payments / no auto-booking | No payment UI |
| Email automation (§9) | **Not built** — external ESP / manual |
| Shadows | Tone down if any feel “heavy” vs §3 |

---

## Dev commands

```bash
npm install
npm run dev
npm run build        # production bundle (no separate tsc — avoids missing `tsc` in Docker)
npm run typecheck    # optional: TypeScript check (needs devDependencies)
```

**Local dev URL:** default `base` is `/wedding/` (GitHub Pages). Open **http://localhost:5173/wedding/** (not the site root).

### Docker / Shipit / `tsc: not found`

Some deploy pipelines run **`npm ci --omit=dev`**, which skips **TypeScript** — so **`tsc: not found`** when the build script called `tsc -b`.

- **`npm run build`** is now **`vite build` only** (Vite transpiles TS). **Vite**, **@vitejs/plugin-react**, and **@tailwindcss/vite** are in **`dependencies`** so a production-only install can still build.
- **`npm run typecheck`** runs **`tsc -b`** in CI (full `npm ci`) for type safety.

**Image in this repo:** `Dockerfile` builds with **`VITE_BASE=/`** (nginx serves the app at the container root). Override at build time:  
`docker build --build-arg VITE_BASE=/wedding/ -t wedding .` if you serve under a subpath.

### GitHub Pages (fix blank site)

Deploying **`main` / (root)** serves raw source: the browser loads `/src/main.tsx`, which does not run in production → **blank page**.

1. In the repo go to **Settings → Pages → Build and deployment**.  
2. Under **Source**, choose **GitHub Actions** (not “Deploy from a branch”).  
3. Push the workflow in `.github/workflows/deploy-github-pages.yml`; it builds with Vite and publishes **`dist`** (with `base: /wedding/` and a `404.html` copy for client-side routes).

After the workflow succeeds, the site at [https://youssefloay.github.io/wedding/](https://youssefloay.github.io/wedding/) should load the built app.

**Extra routes (not in main nav):**

- **`/logistics`** — Form 2 (logistics / February 2027).  
- **`/export`** — Download all saved RSVPs + logistics as CSV (uses **localStorage** in this demo — replace with a secured admin + database before production).

### Wasmer Edge ([wasmer.io](https://wasmer.io))

Deploy the **built** site to [Wasmer Edge](https://docs.wasmer.io/edge/get-started) (similar idea to the official [React static site](https://docs.wasmer.io/edge/guides/react-static-site) guide).

1. Install the [Wasmer CLI](https://docs.wasmer.io/install) and run **`wasmer login`**.  
2. In **`wasmer.toml`**, set **`[package].name`** to **`<your-username>/<package>`** (must match the registry). Do the same for **`app.yaml`** (`owner`, `name`, `package`).  
3. Build for a **root URL** (Edge apps use `https://<app>.wasmer.app/`, not `/wedding/`):  
   **`npm run build:wasmer`**  
4. From the repo root: **`wasmer deploy`**  

`[fs] public = "dist"` ships the Vite output. **`settings/config.toml`** turns on **`page-fallback`** so React Router works on refresh. **`app.yaml`** sets **`SERVER_CONFIG_FILE=/settings/config.toml`** so the static server loads that file.

If **`app.yaml`** format errors appear, run **`wasmer app create --template static-site`** once, then align **`wasmer.toml`** (`public = "dist"`) and merge the **`env`** block from this repo’s **`app.yaml`**.

---

## Optional: original UI mock

The first client deliverable was a single React file with **Tailwind-style** screen mockups. It remains a useful **visual** reference for spacing and cards, but **copy, menu order, RSVP structure, footer, and operations** come from this **master spec**, not from the mock.
