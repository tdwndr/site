# Principles: how to decide like Ted

Purpose: Turn Ted Winder's principles into decisions, checks and questions when you generate anything for him.

Status: a default steer, not a set of absolutes. Ted's view is nuanced; use judgement and treat these as strong defaults. The brief, a client's brand or more specific direction from Ted always outrank it. Use these to fill gaps and break ties, never to overrule a decision that's already been made.

## The order of authority
1. The brief and anything Ted has said in this conversation.
2. Established character in the thing you're editing (match it; don't restyle it).
3. These principles.
4. The rest of TW/ds (character, type, colour, space, imagery, motion, voice, patterns).

When two principles conflict, the lower number wins: 1 Detail, 2 Opinion, 3 Plain language, 4 Space, 5 Own it.

## Turning each principle into checks

### 1. Delight lives in details, not features
Before building, name where the finish goes (usually the first screen, the most repeated action, the headline). Then check your output for:
- Curly quotes and apostrophes (’ “ ”), never straight ones, in visible copy.
- A true minus sign (−, U+2212) for negative numbers; consistent decimals within a column; `font-variant-numeric: tabular-nums` on figures in tables.
- `text-wrap: balance` on headlines so no word sits alone on the last line.
- Designed empty, loading, error and focus states for every interactive component you add.
If time or scope is short, cut a feature rather than shipping it half-finished.

### 2. Have an opinion, then defend it
- Usually one primary action per view (`.btn` or `.cta`), with the rest visibly secondary (`.btn--quiet`, text links).
- Headings state the idea or the finding, not the topic. "Sessions are up 103% on last year", not "Sessions".
- When you present options to Ted, lead with a recommendation and one line of reasoning.
- If you can't give a one-line reason for a design choice, choose differently.

### 3. Plain language wins
- Write the copy before styling it. Layout serves the words.
- Prefer short sentences. If a sentence needs rereading, split it.
- Remove woolly, corporate phrasing: if the sentence could sit in any company's annual report unchanged, rewrite it with something specific.
- Use a word instead of an icon unless the icon is universal (search, close, home).

### 4. Space is not wasted
- Default to generous spacing, then tighten only for app and data contexts.
- Separate groups with space before adding lines, borders or boxes.
- Keep reading text near 70 characters wide.
- If a screen feels busy, remove something before shrinking anything.

### 5. Own it
- Never leave a template or component in its default state: every page needs at least one considered, recognisable choice from TW/ds.
- Signature moves, at most one or two per screen: the registration-mark frame, one drawn underline in a headline, a big numeral.
- Sign things: the TW/ds mark in the corner, a byline on writing, a short personal note on first run.

## Beliefs underneath (in Ted's words)
- "We'll learn by making things, not by talking about them." Build a working version early; iterate in code.
- "Doing what it takes ... without getting protective about process, craft or title." Be pragmatic; the system bends to the brief.
- "The tools will change ... the importance of inclusion, trust, utility — that's more enduring." Prefer timeless choices; accessibility is non-negotiable.
- "None of our work means anything unless we can show it's adding tangible value." Make outcomes visible with real numbers.
- "Success will come through democratisation, not protectionism." Show the working; make things easy to reuse.

## The aim
People should feel impressed, informed and curious. They must never feel sold to, overwhelmed, or that something is clever for its own sake. The best compliment Ted can get: "It made something complicated feel simple."

## Ted's own warning
From the very first brief for this system: nothing should feel like a default or an AI-generated style choice. Signs you're drifting there:
- A centred hero with two equal buttons and a gradient blob behind it.
- Purple-to-blue gradients, glassmorphism everywhere, glowing borders.
- Emoji used as section icons in an interface; sparkle icons as decoration.
- A three-column grid of identical icon-title-text "feature" cards.
- Generic copy ("Unlock your potential", "Seamless experiences").
- Inter or another default system-looking font for everything.

## Never invent
Ted's writing and work rely on real specifics. Do not make up numbers, names, quotes, dates, clients or outcomes. Use a clearly marked placeholder like `[number]` or `[name]` and ask Ted for the real thing.

## Final self-review
Before you hand anything back, answer each with yes:
- Does every screen have one obvious primary action and an obvious first thing to read?
- Would someone feel informed, not sold to?
- Is there room around the main thing?
- Are quotes, numbers and states finished properly?
- Is there one recognisable TW/ds choice, and no more than two?
- Is every fact real or clearly marked as a placeholder?
