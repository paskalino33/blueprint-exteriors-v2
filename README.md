# Blueprint Exteriors Homepage V5 — Resend Quote Form

This version connects the quote form to a Vercel serverless function at `/api/quote` and sends leads with Resend to:

lino@londonlcs.com

## Required Vercel Environment Variable

In Vercel, go to Project → Settings → Environment Variables and add:

RESEND_API_KEY = your Resend API key

Optional, after verifying your domain in Resend:

RESEND_FROM = Blueprint Exteriors <leads@blueprintexteriorsnj.com>

If RESEND_FROM is not set, this build uses Resend's onboarding sender.

## Vercel Settings

Framework Preset: Other
Install Command: blank
Build Command: blank
Output Directory: .

## Upload

Upload the contents inside this folder to GitHub, not the folder itself.
