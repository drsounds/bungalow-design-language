import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../lib/utils";
import { useAccentColor } from "../accent-color-context";

const PRESETS = ["#dbbb67", "#0797eb", "#14d82c", "#f3132b", "#7c5cff", "#ff5aa5"];

export interface AccentColorPickerProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export const AccentColorPicker = forwardRef<HTMLDivElement, AccentColorPickerProps>(function AccentColorPicker(
  { className, label = "Accent color", ...props },
  ref,
) {
  const { accentColor, setAccentColor, resetAccentColor } = useAccentColor();

  return (
    <div ref={ref} className={cn("bungalow-accent-picker", className)} {...props}>
      <label className="bungalow-label" htmlFor="bungalow-accent-color-input">
        {label}
      </label>
      <div className="bungalow-accent-picker__row">
        <input
          id="bungalow-accent-color-input"
          type="color"
          className="bungalow-accent-picker__swatch-input"
          value={accentColor}
          onChange={(event) => setAccentColor(event.target.value)}
          aria-label={label}
        />
        <div className="bungalow-accent-picker__presets">
          {PRESETS.map((preset) => (
            <button
              key={preset}
              type="button"
              className="bungalow-accent-picker__preset"
              style={{ background: preset }}
              aria-label={`Use ${preset}`}
              aria-pressed={accentColor.toLowerCase() === preset}
              onClick={() => setAccentColor(preset)}
            />
          ))}
        </div>
        <button type="button" className="bungalow-accent-picker__reset" onClick={resetAccentColor}>
          Reset
        </button>
      </div>
    </div>
  );
});
