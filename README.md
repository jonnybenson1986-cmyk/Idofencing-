# I Do Fencing — website

Two-page marketing site (Home + For Builders) built with [Astro](https://astro.build), with a
content manager at **`/admin`** ([Decap CMS](https://decapcms.org)) so text, photos, projects and
business details can be edited without touching code. Forms are handled by Netlify Forms.

## Where things live

| What | File |
| --- | --- |
| Home page text & photos | `src/content/home.json` |
| For Builders page text & photos | `src/content/builders.json` |
| Phone, email, ABN, service area, Facebook, accent colour, logo | `src/content/settings.json` |
| Photos | `public/images/` |
| Page layouts | `src/pages/index.astro`, `src/pages/builders.astro` |
| Header, footer, `<head>` / SEO | `src/layouts/Base.astro` |
| Styles | `src/styles/global.css` |
| CMS fields | `public/admin/config.yml` |

In CMS text, `{serviceArea}` and `{abn}` are replaced with the values from Site Settings.

## Run it locally

```bash
npm install
npm run dev        # site at http://localhost:4321
npm run cms        # in a 2nd terminal: lets http://localhost:4321/admin edit files locally (no login)
```

`npm run build` outputs the static site to `dist/`.

## Go live (Netlify, free tier)

1. The code is on GitHub at `jonnybenson1986-cmyk/idofencing-`.
2. `public/admin/config.yml` already points at `jonnybenson1986-cmyk/idofencing-` — change `repo:` if you move the repository.
3. In Netlify: **Add new site → Import from Git →** pick the repo. Build settings come from `netlify.toml`.
4. Turn on form detection: **Site configuration → Forms → Enable form detection**, then redeploy.
5. Send quote requests to your inbox: **Site configuration → Notifications → Emails and webhooks →
   Form submission notifications → Add notification → Email notification**. Email to notify:
   `terang.scrappy@gmail.com`, Form: **Any form** (covers both the homeowner `quote` form and the
   `builder-quote` form). Uploaded plans arrive as a download link in the email.
6. Turn on CMS login: create a GitHub OAuth app (callback URL `https://api.netlify.com/auth/done`),
   then add its client ID/secret in Netlify under **Site configuration → Access & security → OAuth → Install provider → GitHub**.
7. Visit `https://your-site/admin`, log in with GitHub, edit, hit **Publish** — Netlify rebuilds in about a minute.
8. Add your domain under **Domain management**, then put it in **Site Settings → Website address** in the CMS.

## Still to fill in (placeholders from the mockup)

- Builders page: key facts (`[$X]M`, `[X] days`), project details, builder testimonial
