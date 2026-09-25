# Bungalow — Guidelines

## Components

The design system exports these components — import them from `@ws-cpsyxilfhv8iyyuvjrge/84f27dd1-5367-4130-a0ca-672d4ce498b3` and compose them before building anything from scratch:

`Accordion`, `Alert`, `Badge`, `Button`, `Card`, `Checkbox`, `Input`, `Select`, `Toast`

Per-component details (import stanzas, props, variants, examples) live in `.lovable/rules/libraries/{slug}/components.md` — on disk, not auto-loaded. Read that file or the component source when the name alone isn't enough.

## Theme Files

The design system's theme is delivered through the following files. The author's original source files carry the full wiring the design system needs — variable declarations, framework-specific directives, provider objects, etc. — and are the canonical import target.

- `@ws-cpsyxilfhv8iyyuvjrge/84f27dd1-5367-4130-a0ca-672d4ce498b3/design-system/bungalow/styles/theme.css` (source — preferred import)
- `@ws-cpsyxilfhv8iyyuvjrge/84f27dd1-5367-4130-a0ca-672d4ce498b3/dist/tokens.css` (auto-generated flat list of CSS custom properties — a raw-values fallback only; does NOT carry framework-specific wiring that the source files above provide)

