---
theme: "@hoverkraft/slidev-theme"
layout: cover
title: Hoverkraft Slidev Theme
info: Hoverkraft-branded Slidev theme showroom deck.
download: false
rabbit:
  slideNum: true
---

<!-- markdownlint-disable MD025 -->

# Hoverkraft Slidev Theme

A modern, light, and professional design system for Slidev decks.

---

## Showroom Map

<div class="hk-grid hk-grid--2 mt-8">
 <div class="hk-card">
  <h3>Theme System</h3>
  <ul>
   <li>Brand colors and semantic tokens</li>
   <li>Typography and code defaults</li>
   <li>Cover and content layouts</li>
  </ul>
 </div>
 <div class="hk-card hk-card--accent">
  <h3>Slidev Capabilities</h3>
  <ul>
   <li>Clicks, lists, and presenter flow</li>
   <li>Highlighted code blocks</li>
   <li>Typst, pane, Rabbit, and theme-owned deck chrome</li>
  </ul>
 </div>
</div>

---

## Design Tokens

<div class="hk-grid hk-grid--3 mt-8">
 <div class="hk-swatch">
  <div class="hk-swatch__chip" style="background: #0073cc"></div>
  <div class="hk-swatch__meta">
   <div class="hk-swatch__name">Primary</div>
   <div class="hk-swatch__value">#0073cc</div>
  </div>
 </div>
 <div class="hk-swatch">
  <div class="hk-swatch__chip" style="background: #cc4400"></div>
  <div class="hk-swatch__meta">
   <div class="hk-swatch__name">Secondary</div>
   <div class="hk-swatch__value">#cc4400</div>
  </div>
 </div>
 <div class="hk-swatch">
  <div class="hk-swatch__chip" style="background: #15202e"></div>
  <div class="hk-swatch__meta">
   <div class="hk-swatch__name">Ink</div>
   <div class="hk-swatch__value">#15202e</div>
  </div>
 </div>
</div>

The deck does not configure fonts locally; the theme forces Inter and Roboto Mono.

---

## Brand Logos

The theme ships Hoverkraft logos as ready-to-use components.

<div class="hk-grid hk-grid--2 mt-8">
 <div class="hk-card flex flex-col items-center justify-center gap-4">
  <HoverkraftIcon size="6rem" />
  <div class="hk-swatch__value">&lt;HoverkraftIcon /&gt;</div>
 </div>
 <div class="hk-card flex flex-col items-center justify-center gap-4">
  <HoverkraftLogo size="3rem" />
  <div class="hk-swatch__value">&lt;HoverkraftLogo /&gt;</div>
 </div>
</div>

Both accept a `size` prop (any CSS length) and a `label` for accessibility; pass `decorative` to hide them from screen readers.

Use `<HoverkraftFooter />` for the talk-style byline signature:

<div class="mt-6">
 <HoverkraftFooter />
</div>

---

## Typography

# Heading One

## Heading Two

### Heading Three

Body text uses the theme font stack for readable presentation copy. Inline code such as `npm run build` uses the code font stack from the theme.

> Branded blockquotes carry the Hoverkraft secondary accent while staying quiet enough for technical decks.

---

Slidev's built-in `zoom:` frontmatter can scale dense slides when a section needs extra room; this deck documents the pattern with `zoom: 0.92`.

## Dense Technical Layout

<div class="hk-grid mt-6" style="grid-template-columns: 1.15fr 0.85fr">
 <div>
  <h3>Build Contract</h3>
  <p>The theme package remains source-first: Slidev consumes Vue layouts and CSS directly from the published package.</p>
  <ul>
   <li>Theme assets live in <code>packages/theme</code></li>
   <li>Showroom deck lives in <code>packages/slides</code></li>
   <li>CI packs the theme and rebuilds this deck from the tarball</li>
  </ul>
 </div>
 <div class="hk-card hk-card--accent">
  <h3>Signal</h3>
  <p>A slide can stay information-dense without becoming visually noisy when spacing, contrast, and type are consistent.</p>
 </div>
</div>

---

## Clicks And Presenter Rhythm

<v-clicks>

- Start with the headline and the core argument.
- Reveal implementation details only when the room is ready.
- Keep commands and API names visually stable in code font.
- End each section with a concrete validation step.

</v-clicks>

---

## Code Highlighting

```ts {all|1-5|7-11|13-16|all}
type ThemePackage = {
  name: "@hoverkraft/slidev-theme";
  defaults: {
    fonts: Record<"sans" | "serif" | "mono", string>;
    addons: string[];
  };
};

const requiredAddons = [
  "slidev-addon-typst",
  "slidev-pane",
  "slidev-addon-rabbit",
];

export function isReady(theme: ThemePackage) {
  return requiredAddons.every((addon) => theme.defaults.addons.includes(addon));
}
```

---

## Typst Addon

The theme enables `slidev-addon-typst`, so decks can render Typst blocks without adding addon config.

```typst
#set text(font: "Inter", size: 24pt)
#align(center)[
 #text(fill: rgb("#0073cc"), weight: "bold")[Hoverkraft]
 \
 #text(size: 16pt)[Theme defaults rendered through Typst]
]

$ sum_(i=1)^n i = (n(n + 1)) / 2 $
```

---

## Default Addon Stack

<div class="hk-grid hk-grid--2 mt-8">
 <div class="hk-card">
  <h3>Visible In This Deck</h3>
  <ul>
  <li>The global overlay renders progress and page count from <code>$nav</code>.</li>
   <li><code>slidev-addon-rabbit</code> can show time progress with <code>?time=10</code>.</li>
  </ul>
 </div>
 <div class="hk-card">
  <h3>Interaction Helpers</h3>
  <ul>
  <li>Slidev supports built-in per-slide scaling with <code>zoom:</code> frontmatter.</li>
   <li><code>slidev-pane</code> adds pane presenter mode and the <code>p</code> shortcut.</li>
   <li><code>slidev-addon-typst</code> renders Typst code blocks.</li>
  </ul>
 </div>
</div>

---

## Theme Chrome

Use Slidev's built-in nav context and zoom support to compose deck chrome without legacy addon dependencies.

<div class="flex items-center gap-6 mt-10">
 <div class="hk-card">
  <strong>Page overlay</strong>
  <p>The showroom footer reads from <code>$nav.currentPage</code> and <code>$nav.total</code>.</p>
 </div>
 <div class="hk-card">
  <strong>Built-in zoom</strong>
  <p>This slide uses <code>zoom: 0.92</code> in frontmatter to scale dense content.</p>
 </div>
</div>

---

## layout: cover

# Production Ready

The same deck validates package metadata, default addons, theme-owned fonts, and the final Slidev build.

---

## Developer Experience

```bash
npm install
npm run lint
npm run test
npm run build
```

The example deck is built-in CI after the packaged tarball is installed.
