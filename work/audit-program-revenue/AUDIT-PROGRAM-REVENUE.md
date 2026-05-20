# Audit Program — Revenue & Receivables Cycle

> **What this is:** a worked **audit program and risk matrix** for the revenue cycle, laid out the
> way real audit working papers are. It's built around a hypothetical SME so the methodology is the
> star — assertions → risks → controls → procedures. It shows you understand *how an audit runs*
> before day one of articleship.
>
> *Educational template based on the Standards on Auditing (SAs). Not an actual audit. Confirm the
> current SAs / financial-reporting framework before using in practice.*

**Client (hypothetical):** Sundaram Traders Pvt Ltd — a Tamil Nadu distributor of building
materials, revenue ~₹120 Cr, owner-managed, largely manual controls.
**Period:** year ended 31 March 2026 · **Area:** Revenue from operations & Trade Receivables ·
**W/P index:** R-1 to R-8

---

## Why revenue is the cycle to get right
Revenue is usually the **largest number in the financials and the highest audit risk.** Under
**SA 240**, the auditor must *presume there is a risk of fraud in revenue recognition* — so a
revenue audit isn't box-ticking, it's where professional skepticism earns its keep. The whole
program below flows from one question: **"Did these sales really happen, in full, at the right
amount, in the right period — and will the resulting debtors actually be collected?"**

## 1. Understand the cycle (walkthrough)
Map the flow and the documents at each step:
`Customer order → credit check & approval → goods dispatched (delivery challan + e-way bill) →
tax invoice raised → recorded in books (sales + GST) → payment received → bank reconciliation.`
Do a **walkthrough** of one transaction end-to-end to confirm your understanding (SA 315 Revised).

## 2. The assertions being tested
**Revenue:** Occurrence · Completeness · Accuracy · Cut-off · Classification.
**Trade receivables:** Existence · Rights & obligations · Valuation & allocation (provision) · Completeness.

## 3. Risk matrix (the core working paper)
Full version in **`risk-matrix.csv`**. Summary of the key risks:

| # | Assertion | Risk | L | I | Test the control | Substantive procedure | SA | W/P |
|---|---|---|---|---|---|---|---|---|
| 1 | Occurrence | **Fictitious sales** to inflate revenue *(presumed fraud risk)* | M | H | Dispatch must precede invoice; SoD between recording & dispatch | Vouch sample invoices → delivery challan + e-way bill + customer acknowledgement | 240, 330 | R-2 |
| 2 | Cut-off | Sales of the **wrong period** booked near year-end | M | H | Invoicing driven by dispatch date | Examine last/first ~15 dispatches & invoices around 31 Mar; trace to dates | 330 | R-3 |
| 3 | Completeness | Goods **dispatched but not invoiced** | M | M | Pre-numbered, sequential dispatch docs reconciled to invoices | Trace dispatch challans → invoices; test numerical sequence | 330 | R-4 |
| 4 | Accuracy | **Pricing / quantity / GST** errors | M | M | Approved price master; system-generated invoice | Recompute sample invoices; agree to price list & GST rates | 500 | R-5 |
| 5 | Occurrence/Valuation | **Channel stuffing / related-party** sales reversed later | L | H | Related-party approval; returns monitoring | Review related-party sales & post-year-end sales returns | 240, 550 | R-6 |
| 6 | Existence | **Non-existent debtors** | M | H | — | **External confirmations (SA 505)**; for non-replies: subsequent receipts + vouch | 505 | R-7 |
| 7 | Valuation | **Overstated debtors / inadequate bad-debt provision** | M | H | Ageing review; credit policy | Ageing analysis; review old/disputed balances; assess provision; check subsequent receipts | 540 | R-8 |

*(L = likelihood, I = impact; M/H/L scale. Sized after assessing controls.)*

## 4. Tests of controls (only if you plan to rely on controls — SA 330)
- Inspect evidence of **credit approval** on a sample of orders.
- Check the **invoice and dispatch-note sequences** are complete (no gaps/duplicates).
- Observe and confirm **segregation of duties**: the person recording sales ≠ the person dispatching ≠ the person collecting cash.
- Re-perform one **bank reconciliation** of collections.

## 5. Substantive analytical procedures (SA 520)
- **Monthly sales trend** — flag unusual spikes (esp. the last month/quarter).
- **Gross margin by product** vs prior year — unexplained jumps can signal fictitious or mispriced sales.
- **Debtor days** (receivables ÷ sales × 365) vs prior year — a rise may mean aggressive revenue or collection problems.
- **Books vs GST returns** — reconcile recorded sales to **GSTR-1 / e-way bill** data (an external check on completeness & occurrence).

## 6. Substantive tests of detail
Run the procedures in the matrix (R-2 to R-8). Priorities for an SME: **cut-off testing** (R-3),
**receivables confirmations** (R-7), and **provision adequacy** (R-8) — that's where the money
and the risk concentrate.

## 7. Sampling (SA 530)
- **Confirmations:** cover the largest balances + a random sample of the rest (monetary-unit bias to value).
- **Cut-off:** judgemental — focus on transactions in the days around 31 March and any large/unusual items.
- Document the basis for sample size so it's defensible.

## 8. Working-paper template (use for each W/P, R-1…R-8)
```
Client: Sundaram Traders Pvt Ltd        Period: FY ended 31-Mar-2026
W/P Ref: R-__   Area: Revenue & Receivables — <procedure>
Prepared by: _____  Date: ____   Reviewed by: _____  Date: ____
Objective:   <what assertion this addresses>
Work done:   <population, sample, what was inspected/recomputed/confirmed>
Results:     <exceptions found, with amounts and references>
Conclusion:  <is the assertion satisfied? any impact on the opinion?>
```

## Standards referenced
SA 240 (fraud), SA 315 Revised (risk assessment & understanding the entity), SA 330 (responses to
risk), SA 500 (audit evidence), SA 505 (external confirmations), SA 520 (analytical procedures),
SA 530 (sampling), SA 540 (estimates — bad-debt provision), SA 550 (related parties). Revenue
recognition framework: **Ind AS 115** (Ind AS entities) or **AS 9** (others) — confirm which applies.

---

## Present it as a portfolio project
- **Deliverable:** this program + `risk-matrix.csv`, exported to a clean PDF that looks like a real working paper.
- **Site card** (`src/content/profile.ts`):
  `{ title: 'Revenue-cycle audit program', blurb: 'A full audit program and risk matrix for revenue & receivables — assertions, risks, controls and tests, built like real working papers.', year: '2026', href: '<link>' }`
- **Interview one-liner:** *"I built an audit program for the revenue cycle — mapped each assertion
  to its risks, including the SA 240 fraud presumption on revenue, then the controls I'd test and the
  substantive procedures, as working papers. I'd concentrate effort on cut-off, receivables
  confirmations, and the bad-debt provision."*
