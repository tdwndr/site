# Imagery and ornament: specs and snippets

Purpose: Draw icons, treat photographs, make hand-drawn marks and use print ornament exactly as Ted expects, and know when to stop.

## Icons
- 24×24 viewBox, `fill: none`, `stroke: currentColor`, `stroke-width: 1.75`, round caps and joins. Class `.icon` (1.5rem).
- Lucide-style geometry is compatible; set the stroke width to 1.75.
- Alone only for universal actions (search, close, home, back). Anything else gets a visible word. Icon-only buttons need `aria-label`.
```html
<button class="btn" type="button">
  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>New project
</button>
```

## Photographs
- Duotone in the accent is the go-to treatment for making photographs feel like a set (greyscale image, luminosity blend over the accent). Whatever treatment you choose, apply it consistently across a page.
```html
<div class="duo" style="aspect-ratio:16/10"><img src="photo.webp" alt="What the photo shows"></div>
```
- Meaningful images get descriptive alt text; decorative ones get `alt=""`.
- Use the photographs Ted provides. Don't generate or source stock imagery of people without asking.

## Hand-drawn marks (SVG)
Draw marks as SVG paths, never with a handwriting font.
- Strokes 2 to 3px, `stroke-linecap: round`, no fill.
- Colours: `var(--accent)` or `var(--ink)` only.
- Slightly irregular curves (cubic beziers with uneven control points), never perfect geometry.
- Pen underline under one word:
```html
<span class="pen">count<svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M1 6c14-6 22 4 36-1s24 3 38-1 18 2 25-1"/></svg></span>
```

## Print ornament
- Registration marks: `.reg` with four corner elements.
```html
<div class="reg"><i class="tl"></i><i class="tr"></i><i class="bl"></i><i class="br"></i>Content</div>
```
- Big numerals: `<span class="num">01</span>` (Newsreader, accent). For ordered themes, steps and sections.
- Grid lines: `.gridlines` on a panel background.

## Frequency
One or two kinds of ornament per page, and each used once or twice. A pen underline on every heading stops being a signature.

## Don't
- Emoji or sparkle icons as decoration in an interface.
- Mixed icon styles (filled and outline) on one screen.
- 3D illustration, blobs, or gradient-mesh backgrounds.
