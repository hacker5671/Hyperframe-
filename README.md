# Rolling

A prompt box that generates real videos, powered by the [HeyGen Video Agent API](https://developers.heygen.com/docs/quick-start). Type a prompt, hit **Roll**, and the agent scripts, casts a presenter, and renders a downloadable MP4.

## How it works

- `app/page.tsx` — the UI: a prompt box, a "viewfinder" preview panel that shows live status, and a contact-sheet strip of past takes (saved to your browser's local storage).
- `app/api/generate/route.ts` — server route that calls `POST /v3/video-agents` with your prompt.
- `app/api/status/[videoId]/route.ts` — server route the browser polls every 5s, which calls `GET /v3/videos/{id}`.

Your HeyGen API key stays server-side; the browser never sees it.

## Local development

```bash
npm install
cp .env.example .env.local   # then paste your HeyGen key into .env.local
npm run dev
```

Open http://localhost:3000.

## Deploying to Vercel

1. Push this project to a Git repo (or deploy directly from your machine with `vercel`).
2. In the Vercel dashboard: **Project → Settings → Environment Variables**, add:
   - `HEYGEN_API_KEY` = your key from HeyGen → Settings → API
3. Redeploy — environment variable changes only take effect on the next deployment.

## Notes

- Rendering usually takes 1–5 minutes; the app polls for you.
- Prompts are capped at 1000 characters.
- Swap the `blockframe` / `mat` / `signal` look-and-feel by editing the Tailwind tokens in `tailwind.config.ts` and `app/globals.css` — the current theme is a broadcast-control-room aesthetic (tally-red / processing-amber / ready-green).
