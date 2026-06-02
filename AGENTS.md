# AGENTS.md — agent instructions and operational contract

This file is written for automated coding agents (for example: Copilot coding agents). It exists to provide a concise operational contract and guardrails for agents working in this repository. It is not the canonical source for design or style rules. Those live in the developer documentation linked below.

## Organization-wide guidelines

(required)

- Follow the prioritized shared instructions in [hoverkraft-tech/.github/AGENTS.md](https://github.com/hoverkraft-tech/.github/blob/main/AGENTS.md) before making any change.
- Apply the global engineering guidelines from `ACCESSIBILITY.md`, `CONTRIBUTING.md`, and other root-level guides when modifying UI, documentation, or build tooling.

## Quick Start

This repository contains the Hoverkraft-branded Slidev theme workspace. Review these entry points before coding:

- **[Overview](README.md#overview)** — Theme purpose, supported use cases, and positioning within the Hoverkraft design system.
- **[Feature Highlights](README.md#feature-highlights)** — Canonical list of enforced branding capabilities.
- **[Packages](README.md#packages)** — Workspace layout for the published theme package and the example deck.
- **[Development](README.md#development)** — Required toolchain, workspace workflow, lint/test commands, and release expectations.
- **[Testing](README.md#testing)** — Theme unit-test scope and example-deck smoke-test behavior.
- **[Contributing](CONTRIBUTING.md)** — Accessibility-first contribution guidelines and review expectations.

## Agent-Specific Development Patterns

### Critical Workflow Knowledge

```bash
npm install                         # Install workspace dependencies
npm run build --workspaces          # Validate the theme package and example deck build
npm run lint --workspaces           # Run linting across all workspaces
npm run test --workspaces           # Execute node:test checks for theme and smoke deck
npm run start --workspace=@hoverkraft/slidev-theme-slides    # Launch the example deck for local QA
```

- Prefer `npm` for workspace orchestration. Only switch toolchains when the user explicitly requests it.
- `make setup`, `make lint`, `make test`, `make build`, and `make start` are the main convenience aliases.
- Run `npm run build --workspaces` or `make build` before submitting changes that impact published assets.

### Code Quality Expectations

- Keep changes aligned with the actual source layout: published theme assets live in `packages/theme` under
  `components`, `layouts`, and `styles`, and the local verification deck lives in `packages/slides`.
- Keep UI/UX changes accessible: audit color contrast, focus management, and screen reader semantics in tandem (see `ACCESSIBILITY.md`).
- Validate public theme behavior with the existing `node:test` suites in `packages/theme/test` and `packages/slides`.
- When behavior changes for end users, update the example deck and its smoke tests together.
- Do not assume a TypeScript build pipeline or generated declaration step in this repository; most current source edits are plain Vue, CSS, Markdown, JSON, and `.mjs` tests.

### Documentation Updates

- Update `README.md`, `packages/theme/README.md`, and other existing guide files when interfaces, commands, or outputs change.
- Keep `AGENTS.md`, `ACCESSIBILITY.md`, and workflow documentation consistent with the actual workspace behavior.
- Keep version bumps and changelog notes aligned with the release process defined in `README.md#releasing` once present.
