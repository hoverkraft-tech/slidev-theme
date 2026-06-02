import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'

const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
const layoutCss = fs.readFileSync(new URL('../styles/layout.css', import.meta.url), 'utf8')
const styleEntrypoint = fs.readFileSync(new URL('../styles/index.js', import.meta.url), 'utf8')

const defaultAddons = [
  'slidev-addon-typst',
  'slidev-component-pager',
  'slidev-component-progress',
  'slidev-component-zoom',
  'slidev-pane',
  'slidev-addon-rabbit',
]

test('package exposes Slidev theme metadata', () => {
  assert.equal(pkg.name, '@hoverkraft/slidev-theme')
  assert.ok(pkg.keywords.includes('slidev-theme'))
  assert.equal(pkg.slidev.defaults.fonts.sans, 'Inter')
  assert.equal(pkg.slidev.defaults.fonts.mono, 'Roboto Mono')
})

test('package enables the Hoverkraft default addon stack', () => {
  assert.deepEqual(pkg.slidev.defaults.addons, defaultAddons)
  assert.equal(pkg.peerDependencies['@slidev/cli'], '>=51.0.0')
  assert.equal(pkg.engines.slidev, '>=51.0.0')

  for (const addon of defaultAddons) {
    assert.ok(pkg.dependencies[addon], `${addon} should be declared as a theme dependency`)
  }
})

test('theme css includes Hoverkraft brand tokens', () => {
  assert.match(layoutCss, /--hk-color-primary:\s*#0073cc/i)
  assert.match(layoutCss, /--hk-color-secondary:\s*#cc4400/i)
  assert.match(layoutCss, /font-family:\s*var\(--slidev-theme-font-family\)/i)
})

test('style entrypoint imports base and theme styles', () => {
  assert.match(styleEntrypoint, /@slidev\/client\/styles\/layouts-base.css/)
  assert.match(styleEntrypoint, /\.\/layout.css/)
})

test('package ships the Hoverkraft logo components', () => {
  assert.ok(pkg.files.includes('components'))

  for (const component of ['HoverkraftIcon', 'HoverkraftLogo']) {
    const source = fs.readFileSync(
      new URL(`../components/${component}.vue`, import.meta.url),
      'utf8'
    )
    assert.match(source, /<svg[\s\S]*<\/svg>/, `${component} should inline an SVG`)
    assert.match(source, /aria-label/, `${component} should expose an accessible label`)
  }
})
