# Aussie Citizenship website

Official marketing website for **Aussie Citizenship**, an independent study aid for the Australian citizenship test. The site is a Next.js app with no database, no paid services, and no API keys.

It is not affiliated with, or endorsed by, the Australian Government or the Department of Home Affairs.

## Run it locally

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other commands:

```bash
npm run lint
npm run build
npm start
```

`npm start` serves the production build. Run `npm run build` first.

## Deploy on Vercel (free)

The site is a standard Next.js App Router project and can be deployed on Vercel’s free Hobby plan.

1. Push this repository to GitHub when you are ready. Do not commit a real `.env` file.
2. In Vercel, choose **Add New Project** and import this repository.
3. Leave the framework preset as **Next.js**. The build command is `next build` and the output is handled by Next.js. No extra install or build command is required.
4. Add these environment variables before the first production deploy, then redeploy if you add them later:

| Name | Example | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://aussie-citizenship.vercel.app` | Canonical URLs, sitemap, and `robots.txt` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `ausiecitizenship.support@gmail.com` | Contact, support, footer, and draft legal pages |

5. Deploy. Vercel will give you a `*.vercel.app` address. You can add a custom domain later in the project settings.

Copy `.env.example` to `.env.local` for local values. `.env.local` is gitignored. Restart `npm run dev` after changing it.

```bash
copy .env.example .env.local
```

The live origin is `https://aussie-citizenship.vercel.app`, with no path or trailing slash.

## Details still to confirm before treating the legal pages as final

- **Operator legal name.** The draft Terms and Privacy Policy say the legal name, any ABN, and any postal address are still to be confirmed. Add them in `src/app/privacy/page.tsx` and `src/app/terms/page.tsx` after a lawyer reviews the drafts.
- **Copyright year.** It is set to 2026 in `src/lib/site.ts`.
- **App Store link.** The site says “Coming Soon on the App Store” and does not include a download link. Add a real App Store URL only after Apple has published the listing.
- **Languages and question counts.** The copy does not list languages or a question total. Add those only when they match the released app.
- **Privacy and terms.** Both pages are labelled drafts. They describe this static website only. Do not treat them as final, and do not add claims about app data collection until the app’s behaviour is confirmed.

## What’s included

- Home, Features, About, Contact, draft Privacy Policy, and draft Terms of Use
- Light and dark theme, stored in the browser, and a working mobile menu
- `sitemap.xml`, `robots.txt`, a web manifest, and page metadata
- Australian English copy, with a clear independence and no-pass-promise disclaimer

The live site is https://aussie-citizenship.vercel.app.
