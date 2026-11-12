# Space and layout: recipes

Purpose: Lay out pages and screens with the right amount of room for each context, using the spacing tokens and two layouts.

## Spacing tokens
`--space-1` 0.25rem · `--space-2` 0.5 · `--space-3` 1 · `--space-4` 1.5 · `--space-5` 2 · `--space-6` 3 · `--space-7` 4 · `--space-8` 6 · `--space-9` 8. Prefer the tokens for gaps, padding and margins.

## Room by context
- Marketing and portfolio: sections `--space-8` to `--space-9` apart; hero top padding up to `--space-9`. Line height 1.5 for display copy.
- Long-form content: sections `--space-7` apart; paragraphs `line-height: 1.8`; text column `max-width: 70ch`.
- App: sections `--space-5` apart; card padding `--space-4`; controls 2.75rem tall.
- Data: as app, slightly tighter (`--space-4` between related blocks).
Set `data-context="marketing|content|app|data"` on the page or section; `components.css` adjusts line height, section spacing and control height.

## Layouts
Single centred column (reading, marketing):
```css
.column { max-width: 70ch; margin-inline: auto; padding-inline: clamp(1.25rem, 5vw, 4rem); }
```
Sidebar and content (docs, apps):
```css
.shell { display: grid; grid-template-columns: 16rem minmax(0, 1fr); min-height: 100vh; }
@media (max-width: 56rem) { .shell { grid-template-columns: 1fr; } }
```
Text is left-aligned by default; a centred line is fine as an occasional exception. Full-width bands are allowed on marketing pages, but text inside them still stops at a reading width.

## Separation, in order of preference
1. Space (`--space-5` or more between groups).
2. A change of surface (`--paper-2` or `--wash` background) for a whole band.
3. A 1px `--rule` line.
Avoid heavy rules, double borders and boxed sections.

## Shape
- `--radius` (0.5rem) for cards, fields, panels and code. `--radius-pill` only for the filled app button, tags and the floating nav bar.
- 1px lines: `--rule` for hairlines, `--rule-strong` for card and field borders.
- `--shadow-float` for soft shadows. Use it for things that float (menus, sheets, dialogs, the pill bar) and sparingly elsewhere.

## Responsive
One fluid layout. Use `clamp()` for type and padding; add a breakpoint only where the layout breaks (the shell collapses below 56rem). Touch targets at least 44px.

## Check before you finish
- Is there one obvious first thing on each screen, with space around it?
- Any centred paragraphs? Left-align them.
- Any boxes or rules that space could replace?
- Any spacing values that aren't tokens?
