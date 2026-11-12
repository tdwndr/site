# Typography: exact build guide

Purpose: Set type exactly as Ted expects, with the CSS to do it and the checks that catch common mistakes.

If the brief specifies typefaces or a brand, follow the brief and keep only the behaviours below (roles, hierarchy, details).

## Faces, files and fallbacks
Self-hosted woff2 files live in `/tools/ds/fonts/` (Latin subsets, SIL OFL). Load them with `@font-face` (already in `components.css`) and preload the two you need above the fold:

```html
<link rel="preload" href="/tools/ds/fonts/schibsted-grotesk.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/tools/ds/fonts/ibm-plex-sans.woff2" as="font" type="font/woff2" crossorigin>
```

Outside this site, the same families are free on Google Fonts. Never substitute Inter, Roboto or a system font as the headline face.

## Role map
- Page title (marketing, portfolio): Schibsted Grotesk 500, `font-size: var(--h1-poster)`, `line-height: 1`, `letter-spacing: -0.035em`, max ~14ch.
- Page title (content, app): Schibsted Grotesk 500, `var(--step-4)` content, `var(--step-3)` app.
- Section heading: Schibsted 500, `var(--step-3)`, `letter-spacing: -0.02em`.
- Subheading: Schibsted 500, `var(--step-2)`.
- Lede: Plex 400, `var(--step-1)`, `line-height: 1.45`, max ~40ch, often in `--muted`.
- Reading text: Plex 400, `1rem` to `1.06rem`, `line-height: 1.8`, max `70ch`.
- Interface text: Plex 400 or 500, `line-height: 1.5`.
- Label / eyebrow: class `.eyebrow` (Plex 500, 0.75rem, uppercase, `letter-spacing: 0.22em`, `--muted`).
- Data, metadata, code, tokens: Geist Mono 400; figures `tabular-nums`; right-aligned in tables (`.table .n`).
- Pull quote: class `.quote` (Newsreader italic, `var(--step-2)`, accent left rule). A whole quote or a whole heading can be Newsreader; a single word inside a sans heading cannot.
- Long-form article title: Newsreader 400 roman, `var(--step-4)`, `line-height: 1.08`.
- Emphasis in a headline: one drawn underline (`.pen`) under a single word. Never set a word in Newsreader inside a Schibsted headline; never mix serif and sans in any heading.

## Rules that are easy to get wrong
- Usually no more than three faces on a screen. Display and body are always present; choose mono or serif for the third. If you need both mono and serif on one screen, drop one.
- Sentence case everywhere. Labels are uppercase via CSS (`text-transform`), never typed in capitals in the HTML.
- Never use a handwriting or script font. Hand-drawn marks are SVG.
- Headlines: `text-wrap: balance`. Paragraphs: `text-wrap: pretty`.
- Use `font-weight: 500` for Schibsted headings, not 700. Bold body emphasis is 600.
- Emphasis inside text is `<mark>` (highlighter) or `<strong>`. Do not use colour alone or italics for emphasis in body copy.
- Inline code and token names use `<code>`; it renders as a tinted chip.
- Typographic marks: ’ “ ” – − × … (apostrophe, quotes, en dash for ranges, minus, multiply, ellipsis).

## Scale
Ratio 1.333 (perfect fourth) from 1rem: `--step--1` 0.75, `--step-0` 1, `--step-1` 1.333, `--step-2` 1.777, `--step-3` 2.369, `--step-4` 3.157, `--step-5` 4.209 (rem). Poster: `--h1-poster` (fluid clamp up to about 5.9rem). Use `clamp()` for any custom large sizes so type scales fluidly.

## Snippet
```html
<header data-context="marketing">
  <span class="eyebrow">Design practice · London</span>
  <h1 style="font-size:var(--h1-poster)">Making big things <span class="pen">happen<svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M1 6c14-6 22 4 36-1s24 3 38-1 18 2 25-1"/></svg></span></h1>
  <p class="lede">Connecting product, design and strategy to make sense of the chaos.</p>
</header>
```

## Check before you finish
- Count the families rendered on the screen: three or fewer.
- No headline in Title Case or all caps.
- No straight quotes or hyphen-minus in visible copy.
- Reading text lines are not wider than ~70 characters.
