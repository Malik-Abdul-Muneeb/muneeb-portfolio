# MUNEEB.DEV: Portfolio

A dark, minimal portfolio for Malik Abdul Muneeb, frontend developer.
Built with Next.js (App Router), JavaScript, Tailwind CSS and Lucide icons. No backend, no database.

## Run it locally (VS Code)

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. To test the production build:

```bash
npm run build
npm start
```

## Configure your details

Copy `.env.example` to `.env.local` and edit it:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email shown on the site and used by the contact form |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only, e.g. `923001234567`. Leave empty and the WhatsApp card is hidden |
| `NEXT_PUBLIC_SITE_URL` | Your deployed URL, used for social-preview metadata |

These are public values. Never put passwords or API keys in `NEXT_PUBLIC_` variables.

## Add or edit projects

Everything lives in **`data/projects.js`**. Copy an entry and change it.

- `status` is `"Completed"`, `"In Progress"` or `"Academic Project"`. Set each one honestly.
- `liveUrl` / `repoUrl`: leave as `""` and the button is hidden. Only add a link after you have opened it and confirmed it works.
- `image`: put a screenshot in `public/projects/` and set `image: "/projects/your-file.png"` (16:10 ratio works best). Leave `""` to show a "Screenshot coming soon" placeholder.

Skills and services are in `data/skills.js` and `data/services.js`. Name, links and nav are in `data/site.js`.

## Contact form

There is no backend, so the form opens the visitor's email app with the message pre-filled (`mailto:`). To send emails directly from the site later, replace the body of `handleSubmit` in `components/ContactForm.js` with a call to a form service (Formspree, Web3Forms, or your own API route). That spot is marked in the file.

## Project structure

```
app/          layout, page, global styles, favicon
components/   one file per section + small reusable pieces
data/         all editable content (projects, skills, services, site info)
public/       static files (add public/projects/ for screenshots)
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Malik-Abdul-Muneeb/portfolio.git
git push -u origin main
```

Create the empty `portfolio` repository on github.com first (no README, no .gitignore).

## Deploy free on Vercel

1. Sign in at https://vercel.com with your GitHub account (the free Hobby plan is enough).
2. Click **Add New, then Project**, and import the `portfolio` repository.
3. Under **Environment Variables**, add the three variables from `.env.example`.
4. Click **Deploy**. You get a free `your-project.vercel.app` URL.
5. Set `NEXT_PUBLIC_SITE_URL` to that URL and redeploy so link previews are correct.

Every `git push` to `main` redeploys automatically. A custom domain is optional and costs money, so it is not required.
