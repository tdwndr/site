# Motion: timings and safe patterns

Purpose: Add motion that feels deliberate and a little dramatic, without ever hiding content or ignoring reduced-motion settings.

## Timings
- Set pieces (reveals, drawn strokes): `--dur-set` 1.1s with `--ease-out` `cubic-bezier(.16,1,.3,1)`. Stagger related items by about 0.1s.
- Feedback (hover, press, focus, field labels): `--dur-micro` 0.25s with `--ease-ui` `cubic-bezier(.2,.7,.2,1)`.
- Ambient movement: slow and subtle; one element at a time; pause it under reduced motion.

## Where, by context
- Marketing and portfolio: scroll reveals, drawn strokes, an ambient detail.
- Content, app, data: feedback only, plus a line drawing in on a chart if it helps.

## The safe reveal pattern
Content is visible in the HTML. Script adds the motion only when it's allowed:
```html
<script>document.documentElement.classList.add('js')</script>
```
```css
@media (prefers-reduced-motion: no-preference) {
  .js .reveal { opacity: 0; transform: translateY(14px); }
  .js .reveal.is-in { opacity: 1; transform: none;
    transition: opacity var(--dur-set) var(--ease-out), transform var(--dur-set) var(--ease-out); }
}
```
```js
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  els.forEach(el => io.observe(el));
  setTimeout(() => els.forEach(el => el.classList.add('is-in')), 4000); // never leave content hidden
}
```

## Drawn strokes
Give the path `pathLength="1"`, then animate `stroke-dashoffset` from 1 to 0 with `--dur-set` and `--ease-out`, inside the same reduced-motion guard.

## Don't
- Hide content until an animation finishes, or rely on JavaScript to make text visible.
- Scroll-jacking, parallax that fights the scroll, or bouncy springs.
- Animate layout properties (width, height, top) when transform and opacity will do.
- Animate anything when reduced motion is requested.
