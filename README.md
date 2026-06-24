# CPA Canada — redesign prototype

A functional, multi-page redesign of the CPA Canada homepage and member journey, built to evaluate UX issues on the live site and demonstrate AI-assisted rapid prototyping.

**Live demo:** add your Netlify/Vercel URL here after deploying
**Original site analyzed:** https://www.cpacanada.ca

## What this is

Four connected pages, not a static mockup:

- `index.html` — redesigned homepage with audience-based routing and a working AI assistant chat demo
- `login.html` — member login with real client-side validation
- `dashboard.html` — member dashboard with an interactive CPD hours tracker that recalculates progress, pace, and deadline risk live
- `find-a-cpa.html` — public-facing CPA search with working text search and specialty filters

## Why these changes

The live CPA Canada homepage mixes member news, public-interest content, and career information into a single undifferentiated feed, with no clear routing for the three distinct audiences (members, students, public/firms) it serves. Member login and time-sensitive content are not prioritized in the visual hierarchy.

This prototype addresses that by:

1. **Audience routing in the hero** — three clear paths instead of a generic content feed
2. **A scoped AI assistant** — answers common CPD/membership questions inline, with an explicit handoff to a human for regulatory matters, addressing both a UX gap and a trust concern specific to a regulated profession
3. **A functional CPD tracker** — turns a static "requirements" page into a tool members actually use, with live calculation and deadline-risk flagging
4. **A working CPA search** — replaces a presumed multi-step directory lookup with instant filtering
5. **A institutional but distinctive visual system** — navy/brass/paper palette, serif display type, a recurring "ledger line" motif, designed to read as credible and specific to an accounting body rather than a generic corporate template

## Stack

Plain HTML, CSS, and vanilla JavaScript. No build step, no dependencies, deployable as a static site to Netlify, Vercel, or GitHub Pages by pointing at this folder.

## AI tools used

Built with Claude (Anthropic) for site analysis, design system definition, and full prototype code generation in a single session, demonstrating end-to-end use of AI tooling from audit to functional deliverable.
