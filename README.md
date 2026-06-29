# Bryan Engel Photography

A fast, SEO-optimized website for fitness & physique competition photography.
Built with **Next.js + Tailwind CSS**, designed to deploy free on **Vercel**.

---

## 🚀 Quick start (3 things)

### 1. Add your photos
Drop your ~15 images into `public/images/portfolio/` named `image-01.jpg` …
`image-15.jpg`. (`image-01.jpg` is the homepage hero — pick your strongest shot.)
See `public/images/portfolio/README.txt` for details.

### 2. Add your logo
Drop a transparent PNG at `public/logo.png`. Until you do, a clean text
wordmark shows in its place.

### 3. Edit your details
Open `lib/site.ts` and update:
- **Location** (currently set to Kansas City, MO — change to your real service area)
- **Email & phone**
- **Social links** (Instagram, etc.)
- **Domain URL** (once you have one — used for SEO)

That's it. Everything else — page titles, search descriptions, structured
data, the footer — updates automatically from that one file.

---

## 🖥️ Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

---

## ☁️ Put it online (free)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com), click **New Project**, import the repo.
3. Click **Deploy**. Done — you'll get a live URL in ~1 minute.
4. Add your custom domain in Vercel → Project → Settings → Domains.

> Don't have a domain yet? Vercel gives you a free `*.vercel.app` URL to start.

---

## 🔍 What's already done for SEO

- **Per-page titles & meta descriptions** targeting "fitness photographer",
  "physique / bodybuilding / bikini competition photography", and your city.
- **Structured data (JSON-LD)** — `ProfessionalService` + `FAQPage` so Google
  can show you as a local business with rich results.
- **Open Graph + Twitter cards** — nice previews when links are shared.
- **`sitemap.xml` and `robots.txt`** generated automatically.
- **Descriptive image alt text** on every photo (edit in `lib/portfolio.ts`).
- **Next.js image optimization** — automatic WebP/AVIF, lazy loading, no giant files.
- **Fast, mobile-first, accessible** layout.

### After you deploy
- Add the site to [Google Search Console](https://search.google.com/search-console)
  and submit `https://yourdomain.com/sitemap.xml`.
- Create / claim a **Google Business Profile** for local "near me" searches.

---

## 📂 Where to edit things

| Want to change… | Edit this file |
|---|---|
| Name, city, email, socials, domain | `lib/site.ts` |
| Photos, captions, alt text | `lib/portfolio.ts` |
| Homepage copy | `app/page.tsx` |
| Services & pricing | `app/services/page.tsx` |
| About / bio | `app/about/page.tsx` |
| Colors & fonts | `app/globals.css` |
