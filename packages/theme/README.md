# @hoverkraft/slidev-theme

Hoverkraft-branded theme for [Slidev](https://sli.dev/).

## Usage

Install the theme in a Slidev deck:

```bash
npm install -D @hoverkraft/slidev-theme
```

The theme enables Typst, pane, and Rabbit addons by default, and ships them as package dependencies so decks do not need to install them separately:

```bash
npm install -D @hoverkraft/slidev-theme
```

Configure the deck frontmatter:

```md
---
theme: "@hoverkraft/slidev-theme"
---
```

Use the branded cover layout:

```md
---
layout: cover
---

# My presentation

Built with Hoverkraft Slidev theme.
```

## Branding

The theme ships with Hoverkraft visual tokens:

- Primary: `#0073cc`
- Secondary: `#cc4400`
- Dark base: `#1d2026`
- Fonts: `Inter` for prose and `Roboto Mono` for code

## Logos

The theme provides the Hoverkraft logos as autoimported components, so decks can use them without any extra setup:

- `<HoverkraftIcon />` - the Hoverkraft pictogram.
- `<HoverkraftLogo />` - the Hoverkraft wordmark (dark, tuned for light backgrounds).
- `<HoverkraftFooter />` - a reusable footer signature (`by` + logo), matching the talk-style byline pattern.

```md
<HoverkraftIcon size="4rem" />
<HoverkraftLogo size="2.5rem" />
<HoverkraftFooter />
```

Logo components accept the following props:

- `size` (CSS length, default `1em` for the icon and `1.6em` for the wordmark) - sets the rendered height; width scales automatically.
- `label` (string, default `Hoverkraft`) - the accessible name announced by screen readers.
- `decorative` (boolean, default `false`) - hides the logo from assistive technology when it is purely decorative.

`<HoverkraftFooter />` accepts:

- `byLabel` (string, default `by`) - prefix text displayed before the logo.
- `logoSize` (CSS length, default `1.1rem`) - rendered logo height.
- `fixed` (boolean, default `false`) - pins the footer to the slide viewport.
- `right` (CSS length, default `0.75rem`) - right offset when fixed.
- `bottom` (CSS length, default `0.5rem`) - bottom offset when fixed.
- `opacity` (number, default `0.85`) - footer opacity.

Use it directly in slide content:

```md
<HoverkraftFooter />
```

Or as a global bottom layer in a deck:

```vue
<!-- global-bottom.vue -->
<template>
  <HoverkraftFooter v-if="$nav.currentLayout !== 'cover'" fixed />
</template>
```

## Default Addons

The theme enables these addons through `slidev.defaults.addons`:

- [`slidev-addon-typst`](https://github.com/shigma/slidev-addon-typst)
- [`slidev-pane`](https://github.com/xunz3/slidev-pane)
- [`slidev-addon-rabbit`](https://github.com/kaakaa/slidev-addon-rabbit)

Slide counters and progress chrome can be built with Slidev's `$nav` global context, and slide scaling uses Slidev's built-in `zoom:` frontmatter support.

## Development

Run commands from the workspace root:

```bash
npm install
npm run lint
npm run test
npm run build
```
