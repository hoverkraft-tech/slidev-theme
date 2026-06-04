import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const deck = fs.readFileSync(new URL("./example.md", import.meta.url), "utf8");
const globalTop = fs.readFileSync(
	new URL("./global-top.vue", import.meta.url),
	"utf8",
);
const pkg = JSON.parse(
	fs.readFileSync(new URL("./package.json", import.meta.url), "utf8"),
);
const themePkg = JSON.parse(
	fs.readFileSync(new URL("../theme/package.json", import.meta.url), "utf8"),
);

test("example deck uses the workspace theme package", () => {
	assert.match(deck, /theme:\s*["']@hoverkraft\/slidev-theme["']/);
	assert.equal(pkg.dependencies["@hoverkraft/slidev-theme"], "file:../theme");
});

test("example deck does not override theme-owned fonts", () => {
	assert.doesNotMatch(deck, /^fonts:/m);
	assert.equal(themePkg.slidev.defaults.fonts.sans, "Inter");
	assert.equal(themePkg.slidev.defaults.fonts.serif, "Inter");
	assert.equal(themePkg.slidev.defaults.fonts.mono, "Roboto Mono");
});

test("example deck relies on theme-owned default addons", () => {
	for (const addon of themePkg.slidev.defaults.addons) {
		assert.ok(
			themePkg.dependencies[addon],
			`${addon} should be installed by the theme package`,
		);
		assert.equal(pkg.dependencies[addon], undefined);
	}
});

test("example deck showcases Slidev capabilities", () => {
	assert.match(deck, /<v-clicks>/);
	assert.match(deck, /```ts \{all\|1-5\|7-11\|13-16\|all\}/);
	assert.match(deck, /```typst/);
	assert.match(deck, /<Zoom \/>/);
});

test("example deck showcases the Hoverkraft logo components", () => {
	assert.match(deck, /<HoverkraftIcon\b/);
	assert.match(deck, /<HoverkraftLogo\b/);
});

test("global overlay uses default addon components", () => {
	assert.match(globalTop, /<Progress\b/);
	assert.match(globalTop, /<Pager\b/);
});

test("example deck documents the Hoverkraft brand tokens", () => {
	assert.match(deck, /#0073cc/i);
	assert.match(deck, /#cc4400/i);
	assert.match(deck, /Roboto Mono/);
});
