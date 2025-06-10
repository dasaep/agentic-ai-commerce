# Deployment Guide

This guide outlines how to deploy the Agentic AI Commerce app.

## Recommended Platforms

The application is designed to be hosted on **Vercel** or **Netlify**. Both platforms provide seamless integration with Git repositories and support environment variables.

- Inject secrets via your CI/CD pipeline to keep them out of version control.
- Use `.env.local` for local development only.

## Performance Notes

- Static content should be served through the provider's CDN for optimal latency.
- Enable **Incremental Static Regeneration (ISR)** so pages are rebuilt on-demand without redeploying.
- Edge Functions may be used for personalization close to the user.

