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