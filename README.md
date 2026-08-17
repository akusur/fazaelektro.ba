# FAZA Elektroinstalacije

Astro static site for FAZA Elektroinstalacije, including an editable offer
template at `/ponuda/`. The **Sačuvaj kao PDF / Printaj** button opens the
browser print dialog with a clean A4 offer layout suitable for saving as PDF.

## Local development

Use Node.js 22, then run:

```sh
npm ci
npm run dev
```

Create a production build with:

```sh
npm run build
```

## GitHub Pages

The workflow in `.github/workflows/astro.yml` deploys the `main` branch to
GitHub Pages. In the repository settings, set **Pages → Build and deployment**
to **GitHub Actions**. It obtains the correct GitHub Pages origin and project
base path during the build, so the site works both at a custom domain and at
`https://akusur.github.io/faza-astro/`.
