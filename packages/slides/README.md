# Hoverkraft Slidev Theme Slides

This directory contains the example deck for the Hoverkraft Slidev theme. It serves as both package documentation and a smoke-test target for CI.

## Local Development

```bash
npm install
npm run start --workspace=@hoverkraft/slidev-theme-slides
```

This starts Slidev with `example.md` and uses the local workspace theme package.

## Build

```bash
npm run build --workspace=@hoverkraft/slidev-theme-slides
```

The static site is emitted to `dist` and is the artifact deployed by CI on `main`.

## Documentation Structure

- `example.md`: Primary deck showing theme defaults, cover layout, brand tokens, and code styling.
- `smoke.test.mjs`: Fast checks that keep the example deck aligned with the local theme package.
