# 3 Sense Higher Secondary School — React + Tailwind

A frontend-only React conversion of the 3 Sense school website.

## Tech stack
- React 18 + Vite
- Tailwind CSS
- React Router for separate page components
- lucide-react icons

## Pages (each has its own component)
- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/pages/Facilities.jsx`
- `src/pages/Programs.jsx`
- `src/pages/Admissions.jsx`
- `src/pages/Gallery.jsx`
- `src/pages/Contact.jsx`

Shared UI is in `src/components/` (Navbar, Footer, Topbar, PageHero, SectionHeading, FeatureCard and ProgramCard).

## Run locally
1. Install Node.js (LTS).
2. Extract the ZIP and open this project folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

To create a production build: `npm run build` (output is in `dist/`).

## Campus background
The supplied campus-building image is used as a full-bleed background behind the entire home hero. A dark overlay keeps the text readable.

## Included school assets
All supplied image assets are in `public/assets/`. They are referenced with root-relative `/assets/...` paths.

## Important
The enquiry form is a frontend demonstration only. Connect a backend/email/CRM service before using it to receive real enquiries.
