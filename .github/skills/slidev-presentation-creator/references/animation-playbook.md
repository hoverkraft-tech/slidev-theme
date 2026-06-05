# Animation Playbook (Slidev)

Load this file when the user asks for specific animation behavior, step timing, or custom transitions.

## Defaults

- Prefer click-driven storytelling for content reveals.
- Keep motion subtle and purposeful.
- Use at most one primary animation pattern per slide.

## Core Patterns

1. Progressive reveal

```md
<v-clicks>

- Point 1
- Point 2
- Point 3

</v-clicks>
```

2. Pair reveal with dependency

```md
<div v-click>Cause</div>
<div v-after>Effect</div>
```

3. Controlled timing with absolute and relative positions

```md
<div v-click="2">Appears on click 2</div>
<div v-click="'+1'">Appears one click later</div>
<div v-click.hide="'-1'">Hides one click before previous target</div>
```

4. Slide transition control

```md
---
transition: slide-left
---
```

5. Click animation preset usage

```md
---
clickAnimation: up
---

<div v-click.fade.right>Animated reveal</div>
```

## Mapping User Animation Requests

- "reveal bullets one by one" -> `v-clicks`
- "show A then B" -> `v-click` + `v-after`
- "show on step N" -> `v-click="N"`
- "smooth slide switch" -> `transition: slide-left` or `fade`
- "gentle element movement" -> `clickAnimation: up` or `v-click.fade`

## Quality Guardrails

- Avoid more than 3 click steps on text-heavy slides.
- Keep animation semantics consistent inside a section.
- Ensure hidden content is eventually reachable during normal navigation.
- Do not rely on experimental transitions unless the user asks for them.
