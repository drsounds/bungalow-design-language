# Bungalow Icons font generator

Regenerates `assets/fonts/bungalow-icons.{ttf,woff,woff2}` (plus
`bungalow-icons.json`, a name -> codepoint map for native consumers), the
`.bungalow-icon-*` CSS classes in `styles/theme.css`, and the `IconName`
union in `components/icon.tsx` — all straight from
`src/design-system/bungalow/icons.svg`.

## Running it

```
pip install -r scripts/icon-font/requirements.txt
python3 scripts/icon-font/generate.py
```

That's it — it overwrites the font files and rewrites the generated
sections of `theme.css` and `icon.tsx` in place (marked with
`bungalow-icons:start` / `bungalow-icons:end` comments; everything
outside those markers, including the rest of the `Icon` component, is
left untouched). Review the diff and commit as usual.

## Adding or changing an icon in icons.svg

Each icon in `icons.svg` is just a handful of shapes (paths, rects,
circles, ellipses — drawn with `fill:none` + `stroke` for line art, or a
solid fill for a filled variant like "Like fill") with a `<text>` label
placed directly underneath, roughly centered on the icon horizontally.
The label's text becomes the icon's class name (kebab-cased — "Skip to
next" -> `.bungalow-icon-skip-to-next`), so:

- **New icon**: draw its shapes anywhere on the canvas, then add a
  `<text>` element with its name below it, either in an existing row of
  labels or in a new row further down the canvas — rows are detected
  automatically from label spacing, not from a fixed layout.
- **Edit an existing icon**: just change its shapes; the label stays
  the same so it keeps the same CSS class name.
- **Rename an icon**: edit the `<text>` label; the CSS class and the
  `IconName` union entry follow the new name next run.
- **Numbers drawn as part of an icon** (like the "15" in "jump back
  15s", or the "28" in "Date") are their own `<text>` elements with
  purely numeric content — the script treats those as artwork, not as a
  name label, and bakes them into the glyph as real filled shapes
  (holes and all, so a "0" stays hollow).

The script matches each label to the nearest cluster of shapes above it
by position, since that's all an SVG gives us to go on — it can't read
your intent. If a new icon's shapes are far from its label, spread
across a gap that looks like two icons, or a label doesn't line up with
anything, it prints a `WARNING` explaining exactly what looked
ambiguous instead of silently mismatching the icon set. Read those
before trusting the output; when in doubt, nudge the label or tighten
the shape grouping in Affinity and re-export.

## Why it's not just an SVG-to-font converter

Earlier versions of this font were built by exporting each icon to an
SVG and running a generic SVG->TTF tool over the batch. That round-trip
didn't preserve which contours were holes vs. solid fill once shapes
overlapped or sat close together, so things like the three stacked dots
in "Three dots v" fused into a blob and rings (Stop, Record, the
counter in digit "0") occasionally filled in solid. `generate.py`
expands every stroke into a real filled polygon itself (via `shapely`)
and writes the glyph outlines straight into the font's `glyf` table
with `fontTools`, with contour winding set explicitly so holes always
render as holes — no lossy intermediary.
