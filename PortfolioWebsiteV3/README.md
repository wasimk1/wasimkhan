# Wasim Khan — Angular portfolio

A responsive, standalone-component Angular portfolio using the requested cream, sage, gold and brown palette. No backend or database is required.

## Run locally

```sh
npm ci
npm start
```

Open http://127.0.0.1:4200. Build with `npm run build`; deploy the contents of `dist/` to any static host.

## Personalize

- Edit `src/app/portfolio.config.ts` to add verified email, LinkedIn, GitHub, Instagram, CV, repository and live demo URLs.
- Put your PDF CV in `public/` and set `cvUrl` to `/your-file.pdf`.
- The hero uses a generated developer illustration, not a portrait of Wasim. Replace `public/developer.png` with your own photo if desired, and update the image alt text.
- Project visuals are illustrative interface concepts, clearly labeled as such; replace with real screenshots when available.
- Contact validation works locally. No data is stored or sent. Once an email address is configured, submission opens a mailto draft; the visitor still sends it in their email client. Replace the documented `submit` adapter to integrate an email service later.
- Empty external URLs render as unavailable states; no guessed social handles or project links are used.

## Structure

Each primary section has a standalone Angular component. `shared.components.ts` holds icons and social links; `project-card.component.ts` is reused across the five projects. Global tokens and responsive styles live in `src/styles.css`.

Includes keyboard focus indicators, semantic sections, labeled form validation, skip navigation, mobile menu, active-section tracking, and reduced-motion support.
