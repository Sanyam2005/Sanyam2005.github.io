# sanyam2005.github.io

Personal site of Sanyam Agrawal. Astro, fully static, no client framework.

## Edit content

Everything lives in `src/data/site.ts`: profile, roles, work, projects, honours.

- `w: [software, ml, quant]` sets how relevant an item is to each role (0 to 1). It colours the hero matrix and orders the projects list when a visitor picks a role.
- A project with a `page` block gets its own case-study page at `/projects/<slug>/`.
- `draft: true` hides a project. **Nutri AI** and **Teleprompter** are drafts: add `impact`, `stack`, `links`, then delete `draft: true`.
- `matrix` lists the six items shown as hero columns.

## Run locally

    npm install
    npm run dev        # http://localhost:4321

## Deploy (free, GitHub Pages)

1. Replace the contents of the existing `Sanyam2005/Sanyam2005.github.io` repo with this folder and push to `main`.
2. In the repo: Settings > Pages > Build and deployment > Source: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.

## Role links for applications

The site remembers the chosen role in the URL, so you can send a pre-filtered view:

- https://sanyam2005.github.io/ (software engineering, default)
- https://sanyam2005.github.io/?for=ml
- https://sanyam2005.github.io/?for=quant

## SEO checklist after first deploy

1. Google Search Console: add the property, verify, submit `/sitemap-index.xml`.
2. Put the site URL in your GitHub profile, LinkedIn "Contact info", and Codeforces profile.
3. Optional custom domain: claim the free `.me` from the GitHub Student Pack (Namecheap), set `site` in `astro.config.mjs` and `url` in `src/data/site.ts`, add `public/CNAME` with the domain, and update `public/robots.txt`.

`public/resume.pdf` is your resume with the phone number removed. Replace it when the resume changes.

## Adding Nutri AI and Teleprompter

1. Push each project to its own public repo (commands below), checking first that no `.env`, API keys or credentials are committed.
2. In `src/data/site.ts`, fill `impact`, `stack` and `links` for each, then delete `draft: true`.
3. Nutri AI demo video: put it at `public/media/nutri-ai.mp4` (it already points there). GitHub rejects files over 100 MB, so compress anything bigger:
   `ffmpeg -i input.mov -vcodec libx264 -crf 28 -preset slow -vf "scale=-2:1080" -an public/media/nutri-ai.mp4`
   Alternatively upload it to YouTube as unlisted and set `video: 'https://www.youtube.com/embed/<id>'`.
