# PM Risk Guard - Full Product Context (for AI)

## Extension Identity

- **Extension name:** `PM Risk Guard`
- **Website domain:** [https://pmriskguard.com/](https://pmriskguard.com/)
- **Category:** Browser extension for responsible prediction-market trading
- **Primary environment:** Polymarket trading workflow in browser
- **Positioning:** Independent third-party tool, not affiliated with or endorsed by Polymarket

## One-Sentence Description

PM Risk Guard is a browser extension that helps traders set behavioral guardrails (risk score, cooling-off, budget limits, alerts, and self-exclusion) so they can trade with discipline and reduce impulsive decisions.

## Product Purpose

PM Risk Guard exists to reduce emotionally driven trading behavior by adding practical, user-controlled protections before risk escalates.  
It focuses on behavior support and consistency, not on trading signals or profit promises.

## Core Problem It Solves

Many traders overreact after losses, chase outcomes, and break their own risk rules in high-emotion moments.  
PM Risk Guard introduces friction and policy guardrails to keep trading actions aligned with a pre-set plan.

## Core Features

### 1) Risk Score Monitoring

- Monitors risk using behavioral signals such as:
  - loss streak
  - activity level
  - exposure
  - period PnL
- Shows current risk state in a clear dashboard view.

### 2) Cooling-Off Protection

- Applies staged interventions when risk rises.
- Includes:
  - **Soft guidance** around higher-risk state (example threshold messaging around low 70s)
  - **Hard guardrails** at severe risk state (example: 85+) with stronger intervention
- Goal: pause impulsive action and encourage deliberate decisions.

### 3) Risk Budget Controls

- Lets users set daily/weekly budget limits.
- Tracks usage against configured limits in real time.
- Encourages consistent bankroll discipline.

### 4) Self-Exclusion Controls

- Users can activate exclusion windows to prevent harmful overtrading periods.
- Supports intentional, pre-committed breaks from trading activity.

### 5) Alerts and Notifications

- Optional browser notifications for significant loss/risk events.
- Alert settings are configurable to avoid noise while surfacing meaningful changes.

### 6) In-Page Guardrails

- On-page prompts/banners/modals provide real-time intervention inside trading flow.
- Helps enforce safer behavior when risk context worsens.

## Typical User Flow

1. Install extension and connect wallet context used for trading.
2. Configure guardrails:
   - budget limits
   - loss thresholds
   - cooling-off policy
   - self-exclusion windows
   - alerts
3. Trade with live monitoring and intervention.
4. Review outcomes and refine policies regularly.

## Dashboard Context

The dashboard is intended to give at-a-glance risk context, typically including:

- risk score
- bankroll/risk budget context
- exposure signals
- period PnL
- policy status (e.g., cooling-off active/inactive)

## Privacy and Trust Model

- PM Risk Guard is designed as a **user-protective utility**, not a custody product.
- User keys remain in their wallet.
- Settings/state are stored in browser extension storage.
- Tool messaging emphasizes:
  - no custody of funds
  - no private-key collection
  - educational/risk-management purpose
  - not financial advice

## Product Voice and Messaging

Preferred tone:

- calm
- responsible
- practical
- non-hype

Core messaging themes:

- "Trade with confidence, not impulse."
- "Set guardrails before emotions take over."
- "Monitor risk. Act deliberately."
- "Reduce emotional decisions and loss chasing."

## Audience

Primary audience:

- Polymarket and prediction-market users who want stronger behavioral risk controls.

User motivations:

- avoid impulsive decisions
- prevent revenge trading/loss chasing
- follow bankroll strategy
- build long-term discipline

## Boundaries and Disclaimers

- PM Risk Guard is an independent, unofficial tool.
- It is not affiliated with, endorsed by, or officially supported by Polymarket.
- It is an educational risk-management aid, not financial advice.
- It should not be described as guaranteeing outcomes or profits.

## AI Usage Notes (for Groq Context)

When using this context in prompts, keep these constraints:

1. Always refer to the extension name exactly as **PM Risk Guard**.
2. Always include the domain **https://pmriskguard.com/** when website reference is needed.
3. Describe it as a **risk guardrails extension** for prediction-market trading.
4. Emphasize behavioral safety controls (risk score, cooling-off, budgets, self-exclusion, alerts).
5. Include independence disclaimer (not affiliated with Polymarket).
6. Avoid any wording that sounds like investment advice or guaranteed results.

## Short Context Snippet (Copy/Paste)

PM Risk Guard (https://pmriskguard.com/) is a browser extension for responsible prediction-market trading. It helps users set risk guardrails before emotions escalate, using risk score monitoring, cooling-off interventions, budget limits, self-exclusion controls, and optional alerts. The tool is independent and not affiliated with or endorsed by Polymarket. It is an educational risk-management aid, not financial advice, and does not custody user funds or private keys.
