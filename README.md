# FluentPath AI MVP

AI Spanish tutor for frustrated Duolingo users.

## What is included

- Next.js app
- Landing page
- AI coach page
- Pricing page
- Supabase login page
- Stripe Checkout subscription route
- OpenAI Responses API chat route
- Supabase schema
- TikTok scripts
- Landing page copy
- Android App Bundle setup (Capacitor) for Google Play

## 1. Install

```bash
npm install
```

## 2. Add env variables

Copy `.env.example` to `.env.local`.

```bash
cp .env.example .env.local
```

Fill in:
- OpenAI API key
- Supabase URL and keys
- Stripe secret key
- Stripe price IDs

## 3. Supabase

Create a Supabase project. Open SQL Editor and run:

```sql
-- paste supabase/schema.sql here
```

Enable email magic-link auth in Supabase.

## 4. Stripe

Create two recurring prices:
- AI Coach: $12/month
- Fluency Pro: $29/month

Add price IDs to `.env.local`.

For local webhook testing:

```bash
stripe listen --forward-to localhost:3000/api/stripe-webhook
```

Put the webhook secret into `.env.local`.

## 5. OpenAI

Set:

```bash
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-4.1-mini
```

## 6. Run locally

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 7. Deploy

Push to GitHub, import the repo into Vercel, and add the same environment variables in Vercel.

## Monetization

Free:
- 5 AI chats/day
- Basic lessons

AI Coach — $12/month:
- Unlimited AI chat
- Conversation practice
- Saved progress

Fluency Pro — $29/month:
- Voice practice
- Career/travel roleplays
- Weekly fluency report

## Android / Google Play

FluentPath AI uses [Capacitor](https://capacitorjs.com/) to wrap the Next.js static export as a native Android app.

### Quick start

```bash
# 1. Install dependencies (includes Capacitor)
npm install

# 2. Add Android platform (first time only)
npx cap add android

# 3. Build .aab for Play Store
npm run build:android
# → android/app/build/outputs/bundle/release/app-release.aab
```

For signing setup, keystore generation, and full Play Console upload steps see [`android/GOOGLE_PLAY_README.md`](android/GOOGLE_PLAY_README.md).

> **Note:** `output: 'export'` in `next.config.js` disables server-side API routes.
> Deploy the web app to Vercel/Fly.io and set `NEXT_PUBLIC_API_BASE_URL` so the
> Android app can reach the backend.

## Launch checklist

1. Create waitlist landing page.
2. Post TikToks daily for 14 days.
3. Capture emails.
4. Launch free beta.
5. Interview first 20 users.
6. Add Stripe.
7. Convert first 10 paying users.
8. Add voice practice.
9. Create niche lesson packs.
10. Run referral loop.
