# Patterns: assembling pages and screens

Purpose: Build complete pages and app screens from the TW/ds templates, in the right order, with the right content rules.

## Setup
```html
<link rel="stylesheet" href="/tools/ds/tokens.css">
<link rel="stylesheet" href="/tools/ds/components.css">
<link rel="stylesheet" href="/tools/ds/templates.css">
<script>document.documentElement.classList.add('js')</script>
```
Copy the markup from the Patterns page. Each template is one root element with a `t-` class. Set `data-context` on the page or the section.

## Template catalogue
Web: `.t-topbar` (mark and navigation), `.t-hero` (eyebrow, poster headline, lede, one `.cta`), `.t-statement` (heading left, paragraphs right), `.t-work` (grid of `.card` with duotone images), `.t-stats` (three or four real numbers), `.t-themes` (numbered list with big numerals), `.t-quote` (pull quote), `.t-article` (long-form), `.t-contact` (heading and form), `.t-footer`.
App (desktop): `.t-app` (rail and main), `.t-dash` (stat tiles), `.t-list` (rows with inline decisions), `.t-form` (form with `.summary` errors), `.t-empty`.
Mobile app: `.t-phone` (frame with `{{status}}`-style status bar, `.t-phone__body`, `.t-phone__title`, `.pillbar`) containing a welcome note (`.t-welcome`), a dashboard home (`.tiles` of `.stat`), rows (`.t-row`), a swipe action (`.t-swipe`), a detail screen (`.t-back`, `.quote`), settings with toggles (`.t-toggle`), and an empty state.

## Page recipes
- **Portfolio home:** topbar → hero → statement → work → stats → quote → contact → footer.
- **Case study:** topbar → hero (headline states the outcome) → stats → article → quote → work (next stories) → footer.
- **Article or note:** topbar → article → contact or footer.
- **App overview:** app shell → dashboard tiles → list.
- **Settings:** app shell → form.
- **First run:** welcome note, then the overview.
- **Mobile app:** welcome note → home dashboard → list (with swipe actions) → detail → settings, with the floating pill bar for navigation.

## Composition rules
- One hero per page, one primary action per view.
- No more than two signature moves per screen (registration marks, a drawn underline, big numerals).
- Accent blocks only on marketing pages, at most one per page.
- Sections are separated by space, not lines. Alternate a `--paper-2` band at most once or twice per page if a change of surface helps.
- Stats bands use three or four numbers, never one or six.

## Content rules
- Use real content. If you don't have it, use marked placeholders (`[number]`, `[project name]`) and ask Ted. Never invent figures.
- Headlines state the idea or outcome in sentence case.
- Photographs are duotone and have alt text.
- The first-run note is written by Ted, not generated. Leave the placeholder.

## Accessibility checks
- Landmarks: `header`, `nav` with `aria-label`, `main`, `footer`.
- Every field has a `<label>`; floating labels need `placeholder=" "`.
- Error summaries use `role="alert"` and link to their fields.
- Icon-only buttons have `aria-label`. Focus is visible (2px ink outline, offset 3px).
- The page reads fully without JavaScript.

## Matching tedw.co.uk
When making cards and numbers for Ted's portfolio or anything near it, mirror the site rather than the generic components:
- Cards are square, 1px `--rule` border, a faint warm shadow, a 16:10 photo with a 1px line beneath it, a small uppercase label, then a large tight headline (`.t-work .card`). Photos arrive already treated; don't add a second duotone.
- Numbers are large, light-weight, tabular, in the accent, with a small uppercase label beneath (`.t-stats`).
- Numbered sections use a circled Roman numeral (`.num--circle`).

## Native mobile
- Respect platform conventions: large title, safe areas, 44pt targets, standard back gestures; layer Ted's type and colour on top.
- Use haptics sparingly on key moments, swipe actions on rows, pull to refresh on lists, and a hidden gesture or two (with a visible route to the same action).
- Provide dark mode that follows the device.
