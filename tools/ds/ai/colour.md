# Colour: tokens, budgets and swaps

Purpose: Use colour the way Ted does: paper and ink first, colour where it means something, bolder on the front door, with exact tokens and a procedure for changing the hue.

## Tokens (light)
- `--paper` #FAF8F3 warm white: page background.
- `--ink` #2A211B warm black: all body text (14.9:1 on paper).
- `--muted` ink at 72% over paper (#645D57, 6.1:1): secondary text. Never lighter than this.
- `--rule` ink at 14%: hairlines. `--rule-strong` ink at 38%: borders on cards and fields.
- `--accent` #1A33F5 (the tedw.co.uk blue, 7.0:1 on paper): links, arrows, highlights, the key chart series, button hover.
- `--on-accent` #FFFFFF: text on an accent fill.
- `--wash` accent at 9%: tinted chips and tags.
- `--highlighter` #FFD98A: `<mark>` only.
- `--good` #2F6B4F, `--bad` #A63D2F, `--warn` #8A5B00: status, always with a word or icon.
Dark values are generated in `tokens.css` and switch with `prefers-color-scheme` (or `data-theme="dark"` on `<html>`).

## How much colour (a judgement, not a quota)
Ted's default is restraint: colour should point at something. How loud depends on the context.
- Long reads, data and most app screens: mostly paper and ink, with the accent on links, highlights, the key data point and the primary action.
- Portfolio, marketing and launch moments: bolder is welcome. Big accent blocks, full-bleed bands and duotone imagery all work here (this site's page headers are an example).
- One accent plus the highlighter is the usual palette. A project with its own palette can use more colours; keep each one purposeful.
- If a screen starts to feel like it's shouting or selling, pull it back.

## Charts
Default: the key series in `var(--accent)`, everything else in `var(--rule-strong)`, labelled directly at the line end. If a chart genuinely needs several series to be told apart, use as few hues as possible and still label directly.

## Swapping the accent for another project
1. Set `--accent` on `:root` (or on a container with `data-scope` for a local swap; derived tokens recompute there).
2. Check contrast against `--paper`: text in the accent needs 4.5:1. If it fails, darken the hue (lower lightness in HSL) until it passes, and use that as `--accent`.
3. Set `--on-accent` to `#FFFFFF` for dark accents or `#14161B` for light ones.
4. Keep paper and ink warm, and keep the colour purposeful.

```css
:root { --accent: #0B7A4B; --on-accent: #FFFFFF; }
```

## Texture (marketing surfaces only)
```css
.texture {
  background: linear-gradient(135deg, var(--paper), color-mix(in srgb, var(--accent) 22%, var(--paper)));
  position: relative;
}
.texture::after { content: ""; position: absolute; inset: 0; opacity: .35; mix-blend-mode: multiply;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E"); }
```
Gentle only: if the gradient is the first thing you notice, it's too strong.

## Don't
- Pure #FFFFFF backgrounds or #000000 text.
- Grey text lighter than `--muted`.
- Colour used everywhere at once, so nothing stands out.
- Charts where every series competes for attention.
- Colour as the only signal for state.
