import { createContext, useContext } from "react";

export const ACCENT_COLOR_STORAGE_KEY = "bungalow-accent-color";
export const DEFAULT_ACCENT_COLOR = "#dbbb67";

export interface AccentColorContextValue {
  accentColor: string;
  setAccentColor: (color: string) => void;
  resetAccentColor: () => void;
}

export const AccentColorContext = createContext<AccentColorContextValue | null>(null);

export function useAccentColor() {
  const context = useContext(AccentColorContext);
  if (!context) throw new Error("useAccentColor must be used within an AccentColorProvider");
  return context;
}
