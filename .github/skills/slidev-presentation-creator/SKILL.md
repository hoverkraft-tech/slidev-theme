---
name: slidev-presentation-creator
description: "Use this skill when the user wants to create or revise a Slidev presentation from a topic brief, outline, plain text notes, or meeting content, including cases with an image list and/or required animations. Produce a professional, engaging, audience-ready deck using Slidev markdown and animation best practices. Always use @hoverkraft/slidev-theme with default configuration, use theme-provided components, and generate a complete deck that can be presented directly."
argument-hint: "Topic/goal, audience, duration, optional image list, optional animation list"
---

# Slidev Presentation Creator

Create professional and engaging Slidev decks from minimal user input while enforcing Slidev and theme best practices.

## Use This Skill When

- The user asks to create a new Slidev deck from a simple text description.
- The user provides topic notes plus a list of images to incorporate.
- The user provides topic notes, image list, and specific animations to include.
- The user asks to improve structure, flow, or pacing of an existing Slidev deck.

## Required Constraints

- Always use this headmatter baseline:

```md
---
theme: "@hoverkraft/slidev-theme"
---
```

- Keep theme configuration at default unless the user explicitly asks to change it.
- Use provided theme components where appropriate:
  - `<HoverkraftLogo />`
  - `<HoverkraftIcon />`
- Prefer the built-in `cover` layout for the title slide.

## Input Model

Treat user input as three progressive levels:

1. Content description only.
2. Content description plus image list.
3. Content description plus image list plus animation list.

If details are missing, make reasonable defaults and continue. Do not block on perfect input.

## Procedure

1. Define the deck intent:

- Infer audience, objective, and desired outcome.
- Infer target length (default 8-12 slides if unspecified).

2. Build a clear narrative arc:

- `cover` slide (title, subtitle, presenter/org identity).
- Agenda or context slide.
- Main sections in logical progression.
- Summary slide with key takeaways.
- Final Q&A or call-to-action slide.

3. Draft slide-level content:

- One core message per slide.
- Keep text concise and presentation-friendly.
- Use bullets with parallel phrasing.
- Prefer visual storytelling over dense paragraphs.

4. Apply image strategy (when image list exists):

- Map each image to a specific slide purpose (context, evidence, comparison, conclusion).
- Use meaningful alt text.
- Never invent missing local file paths. If a path is not provided, leave a clear placeholder todo.

5. Apply animation strategy:

- Use click animations to stage ideas progressively (`v-click`, `v-after`, `v-clicks`).
- Keep animation meaningful: reveal sequence, comparisons, emphasis.
- Avoid over-animating (default max: 1-3 click steps per slide).
- If user supplies animation names, prioritize those and adapt safely to Slidev syntax.
- For advanced or custom patterns, read [animation playbook](./references/animation-playbook.md).

6. Apply Hoverkraft theme components:

- Use `<HoverkraftLogo />` on cover, closing, or brand anchor slides.
- Use `<HoverkraftIcon />` for section separators or visual accents.
- Keep usage accessible (`label` or `decorative` as appropriate).

7. Validate quality before finalizing:

- Theme and frontmatter are correct.
- Deck has coherent flow and balanced pacing.
- Animations improve comprehension.
- Images are placed intentionally and accessibly.
- Content feels professional, concise, and audience-appropriate.

## Output Requirements

Generate a complete Slidev Markdown document with:

- Valid slide separators (`---`).
- Correct headmatter using `@hoverkraft/slidev-theme`.
- Professional storytelling sequence.
- Theme component usage.
- Animation usage aligned with user constraints.
- Presenter notes only when they add value.

Use this starter template and adapt to user input:

```md
---
theme: "@hoverkraft/slidev-theme"
title: <Presentation Title>
---

---

## layout: cover

# <Presentation Title>

<Concise subtitle>

<HoverkraftLogo size="2.5rem" decorative />

<!-- Presenter note: opening context -->

---

# Agenda

<v-clicks>

- <Section 1>
- <Section 2>
- <Section 3>
- <Conclusion>

</v-clicks>

---

# <Section Slide>

<div v-click>
<First key point>
</div>

<div v-after>
<Second key point>
</div>

---

# Key Takeaways

- <Takeaway 1>
- <Takeaway 2>
- <Takeaway 3>

---

# Q&A

Thank you.

<HoverkraftIcon size="3rem" decorative />
```

## Gotchas

- Relative click positions must be quoted (example: `'+1'`, `'-1'`).
- Do not create animation for decoration only; every animation must support understanding.
- Do not replace the theme with another theme.
- Do not overload slides with text, images, and animation at the same time.
