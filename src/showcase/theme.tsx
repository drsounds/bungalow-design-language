import { AccentColorPicker, Alert, Badge, Button, Checkbox } from "@/design-system/bungalow";
import { ShowcaseLayout, Specimen } from "./showcase-layout";

export function ThemePage() {
  return (
    <ShowcaseLayout eyebrow="Foundations / Theme" title="Make it yours.">
      <p className="page-lede">
        Pick an accent color and every element below re-renders with it — buttons, badges, alerts, and checkboxes.
        Text on top of your accent is computed live with the CSS <code>contrast-color()</code> function, so it stays
        readable whatever color you choose.
      </p>
      <Specimen label="Accent color">
        <AccentColorPicker />
      </Specimen>
      <Specimen label="Button">
        <Button tone="accent">Confirm stay</Button>
        <Button tone="accent" variant="outline">
          View booking
        </Button>
        <Button tone="accent" variant="ghost">
          Dismiss
        </Button>
      </Specimen>
      <Specimen label="Badge">
        <Badge tone="accent">Accent</Badge>
      </Specimen>
      <Specimen label="Alert">
        <Alert tone="accent">Your accent color is applied across the system.</Alert>
      </Specimen>
      <Specimen label="Checkbox">
        <Checkbox label="Use my accent color" defaultChecked />
      </Specimen>
    </ShowcaseLayout>
  );
}
