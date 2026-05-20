# Project 1 — Equity Valuation: Pidilite Industries (Fevicol)

A worked DCF valuation, built as a portfolio piece (see `../../PROJECT-IDEAS.txt`, idea #1).

## Files
- **`VALUATION-NOTE.md`** — the analyst note. Read this first. Export to a 2-page PDF for the portfolio.
- **`pidilite-dcf-model.csv`** — the DCF model. Open in Google Sheets / Excel; rebuild the
  formulas live so you own it (the note shows every formula).

## Status: DRAFT — your two jobs before this is "done"
1. **Verify the numbers.** Open Pidilite's FY26 annual report and confirm the figures flagged
   in the note's appendix (revenue, D&A, capex, working capital, cash/debt, share count).
2. **Own the assumptions.** Read until you can defend every one — growth (12%→10%), WACC (11.5%),
   terminal growth (6.5%). A reviewer *will* ask "why these?" The answer must be yours.

## The headline (so you can talk to it)
Base-case DCF ≈ **₹560/share** vs market **₹1,455**. The business is excellent (31% ROCE, ~24%
margins, near-zero debt) — the *price* is the issue. The market is pricing ~10% perpetual growth.
Expensive on cash-flow math, but in line with premium consumer peers (Asian Paints ~66×, Titan ~86×).

## Turn it into a site card (`src/content/profile.ts`)
```ts
{ title: 'Valuing Pidilite (Fevicol)',
  blurb: 'A first-principles DCF of Pidilite — and why a wonderful business can still be a demanding price.',
  year: '2026',
  href: '<link to your finished PDF / Google Sheet>' }
```
(Delete the `draft: true` flag once it's real and verified.)
