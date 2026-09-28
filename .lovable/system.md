# Bungalow Design System

Bungalow is a compact, direct interface language with a warm hospitality character. It uses strong black typography, bright semantic status colors, a restrained gold primary accent, white space, and precise controls. The visual voice is calm rather than luxurious, friendly rather than playful, and practical rather than decorative.

## Core rules

- Import public components from `@/design-system/bungalow` after attach.
- Import the canonical `styles/theme.css` once near the application root when the barrel is not used.
- Use Bungalow semantic CSS variables for all color, spacing, radius, typography, focus and shadow decisions. Never introduce raw visual values in product components when a token covers the role.
- Prefer Bungalow components over raw interactive HTML. Compose existing components before creating new parallels.
- Use `tone` for semantic meaning, `variant` for visual emphasis and `size` for scale.
- Keep controls compact and labels concise. Preserve generous white space around groups rather than enlarging individual controls.
- Use pills for actions and status badges. Cards and fields use the restrained small radius token.
- Avoid gradients, oversized rounding, decorative shadows, ornamental imagery and one-off accent colors.

## Component patterns

```tsx
import { Alert, Button, Input } from "@/design-system/bungalow";

export function BookingForm() {
  return (
    <form className="booking-form">
      <Input label="Guest name" hint="As shown on the booking" />
      <Alert tone="primary">Your access code arrives before check-in.</Alert>
      <Button type="submit" tone="contrast">Confirm stay</Button>
    </form>
  );
}
```

Use `danger` only for errors or destructive actions, `warning` for recoverable attention, `success` for confirmed outcomes, `info` for neutral notices, `primary` for warm brand emphasis, and `contrast` for the strongest action.

## Create/edit views

Every "create" and "edit" view for any entity is a modal built with `EntitySheet` + `FormActions`,
opened from a dedicated create/edit route — never an inline form expanded under a list, and never
`onBlur`-to-save editing directly in a table cell. See the "Create or update entity" pattern in
the showcase (`/patterns`) for a live demo, and `components/CreateOrUpdateNodeDesktop.svg` /
`CreateOrUpdateNodeMobile.svg` for the original reference wireframes.

Layout, non-negotiable:

- **Header**: full width, title (+ optional subtitle) and a close button. Always present.
- **Body**: on wide screens (≥64rem), split in two — a scrollable form on the **left**
  (`children`) and a **fixed-dark** preview pane on the **right** (`preview` prop), rendered via
  `.bungalow-sheet__preview`, which locally reassigns the standard color tokens to fixed dark
  values so any Bungalow component or `.bungalow-entity-preview` markup inside it just works,
  regardless of the app's own light/dark theme. On narrow screens the preview is **not shown at
  all** (not stacked below) — match the mobile wireframe, don't improvise a stacked layout.
- **Footer**: full width, spans under both columns, via `EntitySheet`'s `footer` prop (a
  `<FormActions/>`). Primary save action bottom-right; secondary/destructive actions (cancel,
  delete) to its left. Pass `onSubmit` on `EntitySheet` itself, not a `<form>` in `children`, so
  Enter and the footer's submit button both work.

```tsx
import { Button, EntitySheet, FormActions, Input } from "@/design-system/bungalow";

function SupplierSheet({ supplier, onClose, onSubmit, saving }: SupplierSheetProps) {
  const [draft, setDraft] = useState(supplier ?? { name: "", org: "" });
  return (
    <EntitySheet
      title={supplier ? supplier.name : "New supplier"}
      onClose={onClose}
      closeLabel="Close"
      onSubmit={(e) => { e.preventDefault(); onSubmit(draft); }}
      footer={<FormActions cancelLabel="Cancel" onCancel={onClose} submitLabel="Save" saving={saving} />}
      preview={
        <div className="bungalow-entity-preview">
          <div>
            <div className="bungalow-entity-preview__kind">Supplier</div>
            <div className="bungalow-entity-preview__label">{draft.name || "Untitled"}</div>
          </div>
        </div>
      }
    >
      <Input label="Name" required value={draft.name} onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))} />
    </EntitySheet>
  );
}
```

Drive the sheet's open/closed/editing-id state from the URL (a route per app, e.g. TanStack
Router's `/entity/new` and `/entity/$id/edit`), not local component state that a refresh or a
shared link would lose — see `financia-gantt-chart`'s `useEntityModal` hook and CLAUDE.md for one
concrete app's implementation of that routing layer on top of this shell.

Exception: a transient, single-use action dialog that isn't really "edit an entity" (a multi-step
import wizard, matching one record against another, logging a quick one-off action) can still use
`EntitySheet` for its shell without a dedicated route — local component state opening it is fine.
Use judgement: if a user would reasonably want to deep-link or refresh into it, it needs a route.

## Accessibility

- Preserve semantic elements, labels, keyboard behavior and forwarded refs.
- Never remove the system focus ring without replacing it with an equally visible token-backed treatment.
- Icon-only controls require an accessible name.
- Do not rely on color alone; pair status color with text or a familiar mark.
- Error text must be programmatically associated with its field.
- Disabled controls remain visually distinct and unavailable to interaction.

## Typography and content

Bungalow Sans is the only brand family. Use regular weight for body content and labels; use bold for headings, actions and key values. Keep sentences plain and concise. Prefer specific actions such as “Confirm stay” or “Save guest details” over generic labels such as “Continue” or “Click here.”

See the generated design-token and component references for the complete public surface.