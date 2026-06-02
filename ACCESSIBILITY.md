# Accessibility Notes

This document describes accessibility behavior implemented by the Hoverkraft Slidev theme itself.
It does not guarantee that every presentation built with the theme is fully accessible. Final
accessibility also depends on slide content, embedded media, speaker notes, and any third-party
addons used in the deck.

## Current Scope

The theme currently ships a light-only visual system for Slidev.

- The theme enforces a light color scheme through its root CSS tokens.
- Typography is set to Inter for body content and Roboto Mono for code.
- The theme styles headings, lists, code, blockquotes, tables, cards, and cover layouts without
  replacing Slidev's runtime shell.

## Implemented Accessibility Features

### Light-Mode Theme Tokens

The theme defines a light presentation palette with readable text and surface tokens, including:

- Primary: `#0073cc`
- Primary strong: `#005aa3`
- Secondary: `#cc4400`
- Main text: `#15202e`
- Muted text: `#54637a`
- Background: `#ffffff`

These tokens are intended for light backgrounds. If a presentation adds custom colors, gradients,
images, or overlays, contrast must be re-checked at the deck level.

### Accessible Logo Components

The theme ships two logo components for deck authors:

- `<HoverkraftIcon />`
- `<HoverkraftLogo />`

Both components:

- expose `role="img"` when they are not decorative
- expose an accessible name through the `label` prop
- support `decorative` to set `aria-hidden="true"`
- set `focusable="false"` on the root SVG

This means the same assets can be used either as meaningful branded images or as purely decorative
visual marks.

### Decorative Use In The Cover Layout

The built-in cover layout uses the Hoverkraft pictogram in the eyebrow as a decorative element.
That instance is marked decorative so it does not add redundant screen reader output before the
slide title.

### Font Loading Behavior

The theme imports Inter and Roboto Mono from Google Fonts with `display=swap`, which helps avoid
invisible text during font loading and allows system fallbacks to render first.

### Flexible Layout Scaling

The theme relies on relative CSS sizing and Slidev's responsive runtime instead of fixed desktop-
only dimensions. This improves readability across common presentation viewport sizes, but authors
should still review any content-heavy slides on the screen sizes they expect to present with.

## What The Theme Does Not Currently Implement

The following features are not currently implemented by the theme itself and should not be assumed:

- dark mode theme styling
- theme-level `prefers-reduced-motion` handling
- theme-level high-contrast mode overrides
- skip links
- custom focus-ring system for all controls
- site-style ARIA landmarks such as persistent `<header>`, `<main>`, or `<footer>` wrappers
- print-specific accessibility rules
- automated accessibility test coverage

Some accessibility behavior still exists in the underlying Slidev runtime or in browsers, but that
is separate from guarantees made by this theme.

## Author Responsibilities

Presentation authors are still responsible for:

- writing clear slide titles and heading structure
- providing alt text or equivalent descriptions for meaningful images
- ensuring sufficient contrast for custom content added on top of the theme
- checking keyboard behavior for any interactive demos or addon components
- using the logo components correctly: keep the default `label` when the logo conveys meaning, and
  set `decorative` when it is purely visual

## Recommended Verification

Before publishing or presenting a deck, verify at least the following:

1. Navigate the deck and presenter controls with a keyboard.
2. Review meaningful graphics and branded assets with a screen reader.
3. Check contrast for any custom slide content, especially text over gradients or images.
4. Test the deck at increased zoom and on the actual presentation display size.
5. Re-check accessibility after adding third-party Slidev addons or custom Vue components.

## Reporting Issues

If you find an accessibility issue in the theme implementation itself, report it in the Slidev
theme repository:

- <https://github.com/hoverkraft-tech/slidev-theme/issues>

## References

- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Resources](https://webaim.org/resources/)
