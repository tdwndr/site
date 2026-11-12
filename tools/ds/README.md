# TW/ds

Principles and guardrails for things made for Ted Winder, with examples and patterns. A default steer for AI and for people: the brief and any more specific direction always outrank it.

Each page has four parts: the principle (for people), a short rationale where one applies, examples (do and don't, sandboxes), and a **For AI** panel embedding a markdown file from `ai/`.

- `src/*.html`: the pages. `ai/*.md`: the AI instructions (also served raw, and joined into `llms.txt`).
- `python3 tools/ds/build.py`: regenerates the pages, `llms.txt`, `search.json` and `tokens.css`.
- `tokens.json`, `tokens.css`, `components.css`: the CSS the site and examples use. Implementation values, adjustable.
- `ds.js`: optional (search, copy, sandboxes, replay). Pages read without it.
- `fonts/`: self-hosted under the SIL Open Font Licence (`fonts/LICENSE.txt`).
