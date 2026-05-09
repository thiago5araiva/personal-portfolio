# Image prompts

Template for generating header illustrations for each article on this portfolio. Read alongside `PRODUCT.md` (brand) and `DESIGN.md` (visual system).

The goal: every article gets a single editorial-technical illustration that follows the same visual language. Visitors who read more than one article should feel they are inside a coherent magazine, not a scrapbook of stock images.

---

## Process for a new post

1. **Pick the visual metaphor.** What real-world system mirrors the technical concept? See [Metaphor seed list](#metaphor-seed-list) for starting points. Avoid the first reflex (`data flow → glowing hexagons`).
2. **List the callouts.** What 4–8 short labels mark the elements of the diagram? (`PRODUCER`, `BROKER`, `OFFSET`, `CONSUMER GROUP`, etc.)
3. **Decide the wink (optional).** A small easter egg that rewards close reading. For Apache Kafka, a `K.` wax-stamp envelope nodding to Franz Kafka's *The Trial*. Skip if forced.
4. **List critical constraints.** Anything the model must not get wrong (sequential numbers, specific count of elements, etc.). These need to be repeated 2–3× in the prompt.
5. **Fill the [Fresh-generation template](#fresh-generation-template).** Replace `[BRACKETED]` placeholders.
6. **Copy to clipboard.** Run from a terminal: `pbcopy < /tmp/prompt.txt` or use the same heredoc pattern from earlier sessions.
7. **Generate.** Use any of the [supported platforms](#platform-notes).
8. **If imperfect, use the [Edit-mode template](#edit-mode-template)** to fix only the defects without redrawing.

---

## Locked tokens (never edit per post)

These are the parts of the prompt that anchor the visual system. Copy them verbatim.

### Color palette

```
COLOR PALETTE (strict, do not introduce any other color):
- Background: warm off-white #FBFAF6, with a faint paper-texture grain.
- Primary ink: warm near-black #14100E, used for ~92% of all marks.
- Accent: burgundy red #F5332C, used in EXACTLY 3 places — [WINK_LOCATION], [ACTIVE_FLOW_LOCATION], [HIGHLIGHTED_ELEMENT_LOCATION]. Absolutely no other red anywhere on the canvas.
```

### Visual language

```
VISUAL LANGUAGE:
- Hand-drawn line illustration with surveyor's precision. Confident ink strokes, no wobble, no shading, no hatching.
- Two line weights: 0.5pt for the faint background grid and pointer lines, 1.5pt for primary structural elements.
- Faint pale grid of square cells across the entire background, like graph paper, in a very light warm gray. Structural, not decorative.
- Pictograms abstracted to their essential silhouette, like Otl Aicher's Munich 1972 Olympics system. No facial features, no clothing detail, no ornament.
- Mono-label callouts in small uppercase tracked letters with thin leader lines pointing to elements. Labels in JetBrains Mono or similar grotesque monospace, +0.22em letter spacing.
- Negative space is structural, ~40% of the canvas. Composition reads left-to-right with deliberate pacing.
```

### Aspect ratio and references

```
ASPECT RATIO: 16:9 horizontal landscape. Resolution 1920x1080 minimum, suitable for an editorial article header.

STYLE REFERENCES: Otl Aicher's Munich 1972 Olympics pictogram system, Massimo Vignelli's NYC subway map (1972), Quanta Magazine illustrations by Olena Shmahalo, technical drawings from Bell Labs telephone manuals of the 1960s, Christoph Niemann editorial work for The New Yorker.
```

### Anti-references (always avoid)

```
AVOID COMPLETELY:
- 3D rendering, isometric perspective, gradients, glow, blur, glassmorphism
- Hexagonal patterns of any kind
- Generic data-stream visuals with floating spheres or glowing particles
- Cyberpunk or neon palettes (no purple, no cyan, no green)
- Stock illustrations of servers, clouds, robots, AI brains
- Any literal product logos
- Cartoon style or fantasy aesthetic
- Cluttered composition trying to show all concepts at once
- Blue color of any shade (it is the dev-illustration cliché)
```

---

## Fresh-generation template

Fill `[BRACKETED]` slots. Keep all other text verbatim.

```
An editorial-technical illustration for an article about [TOPIC], in the style of a 1970s technical manual crossed with contemporary New York Times data graphics.

SUBJECT: [METAPHOR_DESCRIPTION — 3–5 sentences describing the abstracted real-world scene that maps to the technical concept. Include direction of flow, position of key elements, and a subtle visual hint of the technical structure being represented.]

[OPTIONAL: CRITICAL_CONSTRAINTS section — only if the post needs strict rules the model tends to break. Repeat the rule in 2–3 different formats. Example: explicit lists, "MUST" statements, and a "triple-check" reminder.]

VISUAL LANGUAGE:
- Hand-drawn line illustration with surveyor's precision. Confident ink strokes, no wobble, no shading, no hatching.
- Two line weights: 0.5pt for the faint background grid and pointer lines, 1.5pt for primary structural elements.
- Faint pale grid of square cells across the entire background, like graph paper, in a very light warm gray. Structural, not decorative.
- Pictograms abstracted to their essential silhouette, like Otl Aicher's Munich 1972 Olympics system. No facial features, no clothing detail, no ornament.
- Mono-label callouts in small uppercase tracked letters with thin leader lines pointing to elements. Labels read: [CALLOUTS_LIST — 4–8 short uppercase labels in quotes, comma-separated]. Labels in JetBrains Mono or similar grotesque monospace, +0.22em letter spacing.
- [OPTIONAL: WINK_DESCRIPTION — one sentence about the easter egg, where it sits, how subtle. Example: "One letter in the middle of the producer stream carries a wax-stamp seal reading K. as a subtle Franz Kafka literary wink. Single seal, not enlarged."]
- Negative space is structural, ~40% of the canvas. Composition reads left-to-right with deliberate pacing.

COLOR PALETTE (strict, do not introduce any other color):
- Background: warm off-white #FBFAF6, with a faint paper-texture grain and the pale grid described above.
- Primary ink: warm near-black #14100E, used for ~92% of all marks.
- Accent: burgundy red #F5332C, used in EXACTLY 3 places — (1) [WINK_OR_FIRST_ACCENT], (2) [SECOND_ACCENT — usually the active flow path], (3) [THIRD_ACCENT — usually a single highlighted element]. Absolutely no other red anywhere on the canvas.

TYPOGRAPHY IN IMAGE: only the small mono-uppercase callout labels described above[OPTIONAL: " and the [NUMERIC_OR_TEXTUAL] markings inside [WHERE]"]. No headlines, no decorative type, no real-world brand marks.

ASPECT RATIO: 16:9 horizontal landscape. Resolution 1920x1080 minimum, suitable for an editorial article header.

STYLE REFERENCES: Otl Aicher's Munich 1972 Olympics pictogram system, Massimo Vignelli's NYC subway map (1972), Quanta Magazine illustrations by Olena Shmahalo, technical drawings from Bell Labs telephone manuals of the 1960s, Christoph Niemann editorial work for The New Yorker.

AVOID COMPLETELY:
- 3D rendering, isometric perspective, gradients, glow, blur, glassmorphism
- Hexagonal patterns of any kind
- Generic data-stream visuals with floating spheres or glowing particles
- Cyberpunk or neon palettes (no purple, no cyan, no green)
- Stock illustrations of servers, clouds, robots, AI brains
- Any literal product logos
- Cartoon style or fantasy aesthetic
- Cluttered composition trying to show all concepts at once
- Blue color of any shade (it is the dev-illustration cliché)
[OPTIONAL: post-specific avoid lines, e.g. specific elements that broke in v1]
```

---

## Edit-mode template

For when the first generation is 80–90% right but has specific defects. Upload the original image to the platform's edit/image-to-image mode and use this short prompt.

```
Same image. Same composition. Same palette (warm off-white #FBFAF6 background, near-black #14100E ink, burgundy red #F5332C accent only in 3 places). Same [WINK or KEY_PRESERVED_ELEMENT]. Same Aicher-style pictograms. Same mono-uppercase callout labels and leader lines. Same grid background.

The ONLY change: [SPECIFIC_DEFECT_DESCRIPTION — describe what is wrong and what it should be instead, with concrete examples].

[OPTIONAL: "Also remove [SECONDARY_DEFECT]" — one or two more focused fixes, no more.]

Do not redraw anything else. Do not move the pictograms. Do not change [LIST_OF_PRESERVED_ELEMENTS]. Only fix [DEFECT].
```

---

## Worked example — Apache Kafka

Article: `apache-kafka-event-streaming-practical-guide`

| Slot | Filled value |
|---|---|
| `[TOPIC]` | Apache Kafka and event streaming |
| `[METAPHOR]` | postal sorting bureau (top-down schematic) |
| `[FLOW_DIRECTION]` | letters left → broker center → 4 partitions right |
| `[CALLOUTS]` | "PRODUCER", "BROKER", "PARTITION 00", "PARTITION 01", "PARTITION 02", "PARTITION 03", "OFFSET", "CONSUMER GROUP A" |
| `[WINK]` | wax-stamp seal reading "K." on one envelope (Franz Kafka, *The Trial*) |
| `[CRITICAL_CONSTRAINTS]` | offsets must increase monotonically per partition, never repeat |

The full prompt that produced the published image is preserved in this section as a reference example. **Do not edit it.** It is here so future posts can compare what their prompt structure should look like at the same level of specificity.

```
An editorial-technical illustration for an article about Apache Kafka and event streaming, in the style of a 1970s technical manual crossed with contemporary New York Times data graphics.

SUBJECT: top-down schematic view of a postal sorting bureau, abstracted. Letters enter on the LEFT side as a thin orderly horizontal stream of envelopes flowing rightward. The stream goes directly into a small rectangular sorting station at the CENTER (the broker). From the broker, four arrows fan out to the RIGHT, each pointing into one of four parallel horizontal bins (the partitions). Each bin is a long horizontal track holding a sequence of numbered envelope slots from oldest to newest, left to right. Small stylized postal worker pictograms stand at different positions along the bins, reaching in to read envelopes at different offsets.

CRITICAL OFFSET NUMBERING:
Each partition contains a sequence of envelope slots, each labeled with a two-digit offset number. Offsets MUST increase monotonically from left (oldest) to right (newest), never repeat, never go backward.
- PARTITION 00: 00, 01, 02, 03, 04, 05, 06, ...
- PARTITION 01: 00, 01, 02, 03, 04, 05, ...
- PARTITION 02: 00, 01, 02, 03, 04, ...
- PARTITION 03: 00, 01, 02, 03, 04, 05, 06, 07, ...

[Locked VISUAL LANGUAGE block, with this wink line:]
- One envelope in the MIDDLE of the producer stream carries a small wax-stamp seal reading "K." as a subtle Franz Kafka literary wink. Single seal, not enlarged.

[Locked COLOR PALETTE block, with these 3 burgundy locations:]
(1) the K. wax stamp on the envelope in the middle of the producer stream
(2) the active flow arrow leaving the broker into one specific partition
(3) a single highlighted offset slot in one partition showing where one consumer is currently reading

[Locked TYPOGRAPHY, ASPECT, STYLE REFERENCES, and AVOID blocks.]
```

---

## Metaphor seed list

Starting points for visual metaphors when planning a new article. Pick one that **structurally** mirrors the technical concept, then abstract it to schematic form.

| Concept | Candidate metaphors | Strongest pick |
|---|---|---|
| Event streaming, message queues | postal sorting · railway switching yard · river delta · telegraph relay | postal sorting (with literary wink) |
| Load balancing | traffic dispatcher · waterworks valve · postal manifold · airport ground control | airport ground control |
| Multi-tenancy | apartment building cross-section · shared kitchen · co-working office · greenhouse blocks | apartment cross-section |
| Fault tolerance | suspension bridge engineering · ship watertight compartments · parachute redundancy · earthquake-resistant frame | watertight compartments |
| Caching | library reserved-books shelf · restaurant pantry · backstage prop room · dressing-room wardrobe | library reserved shelf |
| Database indexes | card catalog · library Dewey decimal · archive pigeonholes · museum specimen drawers | card catalog |
| Microservices | kitchen brigade · workshop stations · port loading dock · hospital floors | kitchen brigade |
| Distributed consensus | jury deliberation · parliament voting · town hall meeting · auction floor | jury deliberation |
| Rate limiting | turnstile · highway toll booth · dam spillway · bouncer at a club | dam spillway |
| Encryption / security | safe-deposit vault · diplomatic pouch · lock-and-key system · sealed letter | diplomatic pouch |

When in doubt, pick the metaphor that **also opens a literary or cultural wink** — Kafka's *The Trial* for queues, Borges's *Library of Babel* for databases, *Das Boot* for fault-tolerant subsystems. The site is editorial; reward close readers.

---

## Reflex-reject metaphors (do not use)

These are the first-order training-data defaults. They produce indistinguishable AI-slop:

- Glowing data nodes connected by lines
- Floating 3D spheres
- Hexagonal grids of any kind
- Pipes and flowing liquid (literal)
- Robot or AI brain icons
- Servers in data centers
- Clouds with arrows
- Blue and purple gradient backgrounds
- Cyberpunk neon city
- Floating Apache logos or product brand marks

If your first instinct lands here, search further.

---

## Platform notes

| Platform | Notes |
|---|---|
| **Gemini (nanobanana)** | Best for edit-mode refinement (image-to-image). Long fresh-gen prompts get attention-diluted. For fresh gen, may anchor on previous outputs in same chat — start a new thread for distinct results. |
| **Midjourney v6/v7** | Append `--ar 16:9 --style raw --stylize 100` for editorial output. The `--style raw` reduces MJ's polished-aesthetic bias. |
| **DALL·E 3 (ChatGPT)** | Trim prompt to ≤1500 chars. Cut the AVOID list first (GPT-4o filters anyway). Keep SUBJECT + VISUAL LANGUAGE + COLOR PALETTE. |
| **Flux Pro (Replicate, BFL)** | Handles full prompt well. Best for legible mono labels at small sizes. |
| **Recraft** | Choose style "editorial illustration" or "infographic". Honors the prompt closely. |
| **Ideogram 2** | Best for legible labels (`PRODUCER`, `BROKER`, etc.) when typography in image matters. |

---

## Iteration heuristics

- **First generation is the cheapest.** Always run the full fresh prompt once, even if you plan to edit-iterate. The fresh attempt sometimes produces a composition you would not have thought to ask for.
- **Two iterations is usually the limit.** After the second refinement, returns diminish sharply. Accept the third image as-is or restart with a different metaphor.
- **Defects to keep:** small misalignments, organic line wobble, slight imperfection in pictograms. These read as "hand-drawn editorial".
- **Defects to fix:** wrong number of elements, wrong color count, missing critical labels, broken reading order, brand-incompatible aesthetic.
- **Curved bars / decorative arcs that the model adds:** very hard to remove via edit-mode. If it shows up and bothers you, fresh-gen with explicit geometric description (e.g., "a single straight horizontal line connects producer to broker, no other elements between them").

---

## File hygiene

- Save final images to `public/articles/[slug]/cover.webp`. Keep PNG/JPG sources outside the repo if needed.
- Optimize for web: WebP, ~150–250 KB, sRGB profile.
- Note in this file when a metaphor proves unsuitable for a topic, so the seed list stays curated.
