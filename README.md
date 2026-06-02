# @hoverkraft/slidev-theme

Hoverkraft-branded theme for [Slidev](https://sli.dev/), organized with the same package, slides, DevX, and CI/CD patterns used by the Hoverkraft Docusaurus theme repository.

## Overview

`@hoverkraft/slidev-theme` delivers a production-ready Hoverkraft presentation baseline for Slidev decks. The theme ships fixed brand colors, typography, code highlighting defaults, and a branded cover layout so teams can focus on deck content instead of rebuilding presentation chrome.

## Feature Highlights

- **Enforced branding**: Colors and typography follow the Hoverkraft visual system.
- **Slidev-native structure**: Published theme assets live in `packages/theme` using Slidev's `layouts` and `styles` conventions.
- **Default addons**: Typst, pager, progress, zoom, pane, and Rabbit support are enabled through theme defaults.
- **Example deck**: `packages/slides` provides a local Slidev deck for QA and documentation.
- **Package verification**: CI builds, packs, installs, and rebuilds the example deck from the produced tarball.

## Packages

| Package           | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| `packages/theme`  | Published `@hoverkraft/slidev-theme` package with layouts and styles.       |
| `packages/slides` | Private Slidev example deck used for local preview and package smoke tests. |

## Installation

```bash
npm install -D @hoverkraft/slidev-theme
```

The theme ships its default addon stack as package dependencies, so installing the theme pulls in the supported addon set automatically:

```bash
npm install -D @hoverkraft/slidev-theme
```

Configure your Slidev deck frontmatter:

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

## Development

Requires Node.js `>=20.12.0` for the local Slidev slides workspace.

Use the root workspace commands for daily work:

```bash
make setup      # Install workspace dependencies
make lint       # Run lint checks
make test       # Run unit tests
make build      # Validate package and slides build
make start      # Start the example Slidev deck
```

Equivalent npm commands are available for CI and editor integrations:

```bash
npm install
npm run lint
npm run test
npm run build
npm run start
```

## Testing

Theme unit tests live in `packages/theme/test`. The slides package is intentionally treated as a smoke-test deck: CI installs the packaged theme tarball into `packages/slides` and runs the Slidev build.

## Default Addons

The theme enables these addons through `slidev.defaults.addons`:

- [`slidev-addon-typst`](https://github.com/shigma/slidev-addon-typst)
- [`slidev-component-pager`](https://github.com/Smile-SA/slidev-component-pager)
- [`slidev-component-progress`](https://github.com/Smile-SA/slidev-component-progress)
- [`slidev-component-zoom`](https://github.com/Smile-SA/slidev-component-zoom)
- [`slidev-pane`](https://github.com/xunz3/slidev-pane)
- [`slidev-addon-rabbit`](https://github.com/kaakaa/slidev-addon-rabbit)

Declaring `addons` in a deck replaces the theme default list, so decks that customize addons should include any Hoverkraft defaults they still need.

## CI/CD

- Pull requests and merge queues run the shared Hoverkraft linter, Node.js build, tests, package creation, and example deck smoke test.
- Pushes to `main` run the same checks and deploy the built example deck to GitHub Pages.
- Tag pushes publish the verified package tarball to npm through the shared Hoverkraft release workflow.

## Releasing

1. Update semantic versioning in `packages/theme/package.json`.
2. Run `make build` to validate the package and example deck.
3. Push a tag to trigger the npm publish workflow.

## License

MIT License - see [LICENSE](LICENSE) for details.
