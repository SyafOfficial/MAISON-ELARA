# MAISON ÉLARA

An original luxury wedding website portfolio concept by **NESNOVA — Web Development & Digital Solutions**. This is a fictional creative atelier, not a commissioned client project or an operating wedding business. No commercial prices, real testimonials, addresses, or bookings are represented.

## Run locally

Use Node.js 22 or later (the cloud environment was validated with Node 24) and npm.

```sh
npm ci
npm run dev
```

Open the development server on port 3000. Each cloud task already runs in an isolated environment; use the existing `/workspace/MAISON-ELARA` checkout rather than creating a Git worktree.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

The production build statically renders the public pages. No database, API credentials, external font service, or third-party photo host is needed.

## Pages

- `/` — cinematic introduction, editorial homepage, collection overview
- `/about` — philosophy and portfolio context
- `/collections` and `/collections/essentielle`, `/collections/signature`, `/collections/prestige`
- `/customization` — selectable enhancements and validated bespoke enquiry
- `/e-invitations` — three switchable mobile invitation design previews
- `/qr-gallery` — simulated scan, sample table card, demonstration gallery
- `/combinations` — curated combinations and à la carte enquiry actions
- `/gallery` — category filters and keyboard-accessible full-screen viewer
- `/contact` — general enquiry form and contact placeholders

## Configure before sharing with real prospects

Copy `.env.example` to `.env.local` and replace:

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: your actual WhatsApp business number in international format, digits only, without `+`, spaces, or a leading domestic zero. The fictional fallback `60000000000` is deliberately not a real business contact.
- `NEXT_PUBLIC_SITE_URL`: the actual deployed HTTPS origin, used for Open Graph, robots, and sitemap URLs. The default is `https://maison-elara-phi.vercel.app`; override it when moving to a custom domain.

Both variables are public and compiled at build time. Rebuild after changes. Contact labels live in `lib/site.ts`: replace the email and Instagram placeholder text only when genuine details are available. Add corresponding `mailto:` / social links when those destinations are confirmed. Replace concept copy with verified service information only if launching a real business.

All WhatsApp actions share the configuration and URL encoder in `lib/site.ts`. Collection/service actions identify their selection. Forms validate in the browser, prepare a message, and show a **Continue to WhatsApp** link for the visitor to review and send. No form data is stored by this application, submitted to a server, or treated as a booking. The WhatsApp service itself controls delivery; the placeholder cannot deliver real enquiries.

## Architecture

- `app/`: App Router routes, SEO metadata, sitemap, robots, loading/error/not-found states.
- `components/chrome.tsx`: sticky navigation, accessible modal menu, one-time intro, motion provider, reveal, footer.
- `components/editorial.tsx`: server-rendered editorial layouts, collection grid, imagery, reusable enquiry actions.
- `components/interactions.tsx`: client-side forms, invitation styles, lightbox, gallery filters, QR simulation.
- `lib/site.ts`: business configuration, collection data, navigation, and image paths.
- `public/images/`: locally hosted, optimized WebP concept imagery.
- `app/globals.css`: design tokens, editorial compositions, responsive styling, reduced-motion support, Tailwind import.

Typography uses self-hosted **Cormorant Garamond** and **Manrope** through Fontsource packages (SIL Open Font License; license files ship with those packages). Original AI-generated editorial images were created for this concept and stored locally; no third-party stock photography is included. The gallery explicitly identifies these as fictional concept/reference scenes, not real customer events. The QR symbol is a decorative illustration, not a functional access code.

The intro has a skip control, plays once per browser session, respects reduced motion, and never removes the server-rendered page or captures navigation input. Menu and lightbox support Escape, focus management, focus trapping, and keyboard navigation. Image loading uses Next Image; mobile layouts are designed from 320px upward.

## Browser smoke checks

Start the server, then run:

```sh
npx playwright install chromium
npm run test:smoke
```

For a preinstalled system Chromium:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE=/usr/bin/chromium npm run test:smoke
```

The smoke script checks 12 routes at desktop/mobile sizes, heading hierarchy, overflow, encoded bespoke enquiries, invitation switching, QR simulation/reset, gallery filtering/lightbox, and navigation. It writes screenshots under `/tmp`. No WhatsApp messages are sent.

## Deploy on Vercel

1. Push this project to your GitHub repository and import it into Vercel.
2. Select the **Next.js** framework preset. Use the repository root as the project root, `npm ci` to install, and `npm run build` as the build command. Keep the default Next.js output setting.
3. Add both `NEXT_PUBLIC_` variables in Vercel project settings for the appropriate environments.
4. Deploy, verify every route, check the sitemap origin, and test the actual business WhatsApp destination manually before public launch.

No deployment has been performed as part of this implementation. The production QR photo platform would need separately scoped storage, authentication, guest/table access, upload moderation, and retention policies. RSVP previews do not receive responses. This project intentionally does not pretend to provide those backend services.
