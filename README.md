# XTRA Construction — Landing Page Recreation

## Project Overview
A responsive, production-grade React + TypeScript recreation of the **XTRA Construction 2** homepage architecture (`https://xtratheme.com/elementor/construction-2/`). The application reproduces the complete vertical flow, color palette (`#243344` deep slate navy and `#f4c03b` construction gold), asymmetric overlapping geometry, 3D interactive flip cards, filterable project gallery, validated quote form, testimonial carousel, and responsive mobile drawer.

## Technology Used
- **Framework:** React 19 + TypeScript 7
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React + custom architectural SVG emblems
- **Typography:** Google Fonts (`Poppins` for display headings, `Open Sans` for body copy)

## Dependencies
Key runtime packages declared in `package.json`:
- `react` (`^19.0.1`) & `react-dom` (`^19.0.1`)
- `lucide-react` (`^0.546.0`)
- `@tailwindcss/vite` (`^4.3.3`) & `tailwindcss` (`^4.3.3`)
- `vite` (`^8.3.0`) & `@vitejs/plugin-react` (`^6.1.1`)
- `typescript` (`^7.0.2`)

## Installation Instructions
```bash
npm install
```

## Development Command
```bash
npm run dev
```
Runs the Vite development server on port `3000`.

## Build Command
```bash
npm run build
```
Generates the optimized static production bundle in `dist/` (and automatically mirrors `src/assets/` into `dist/src/assets/`).

## Deployment Instructions
1. Run `npm install` to install dependencies.
2. Run `npm run build` to produce the static `dist/` directory.
3. Deploy the `dist/` directory to any static hosting provider (Cloud Run static server, Vercel, Netlify, Cloudflare Pages, or Nginx), or preview locally via `npm run preview`.

## Interactive Features Implemented
- **Top Utility Bar & Sticky Header:** Smooth section scrolling, dropdown section navigation, mobile drawer menu, and live site search modal filtering services and projects.
- **Hero Carousel:** 2-slide full-width showcase with slide indicators, directional arrows, smooth scroll CTAs, and an interactive Company Capabilities Showreel modal.
- **3D Feature Flip Cards:** Hover, tap, and keyboard-accessible (`Enter`/`Space`) 3D flip cards (`Building Engineering`, `Safety First`, `Road Construction`) with specification modals.
- **About & Services:** Asymmetric yellow-backed photo composition, capability checklist, and 3 elevated service cards (`Building`, `Road Construction`, `Maintenance`) with interactive technical detail modals.
- **Process Timeline:** 3-stage construction workflow (`01 Agency / Bidding`, `02 Construction`, `03 Project Execution`) with protruding numeral badges.
- **Filterable Project Portfolio & Lightbox:** 8-project responsive grid filterable by category (`All`, `Building`, `Construction`, `Road Construction`, `Maintenance`, `Architecture`) with a case-study lightbox and next/previous navigation.
- **Validated Quote Request Form:** Client-side validation for required name, email format, and message length, department selection, pre-filled subject support from service/project modals, and instant confirmation feedback.
- **Testimonials & Footer:** Interactive 3-client quote carousel with overlapping portrait frame, partner strip, and scroll-to-top footer controls.

## Assumptions
- All imagery is bundled locally in `src/assets/images/` rather than hotlinking external WordPress demo URLs so assets load reliably offline or in hermetic sandboxes.
- The quote request form and search overlay operate purely client-side without requiring an external WordPress/Contact Form 7 backend.

## Known Limitations
- Because no backend database or SMTP relay is attached, submitting the quote request form validates inputs and displays a client-side confirmation state rather than dispatching a live email.
- The hero "Watch video" button opens an interactive engineering overview modal rather than streaming an external third-party video embed.
"# Xtra-construction" 
