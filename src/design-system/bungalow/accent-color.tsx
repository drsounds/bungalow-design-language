import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { AccentColorContext, ACCENT_COLOR_STORAGE_KEY, DEFAULT_ACCENT_COLOR } from "./accent-color-context";

export function AccentColorProvider({ children }: { children: ReactNode }) {
  const [accentColor, setAccentColorState] = useState(DEFAULT_ACCENT_COLOR);

  // Read the saved preference after mount only: this is an SSR app, and
  // localStorage isn't available on the server, so a mismatch here would
  // desync hydration if read during render.
  useEffect(() => {
    const stored = window.localStorage.getItem(ACCENT_COLOR_STORAGE_KEY);
    if (stored) setAccentColorState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--bungalow-color-accent", accentColor);
  }, [accentColor]);

  const setAccentColor = useCallback((color: string) => {
    setAccentColorState(color);
    window.localStorage.setItem(ACCENT_COLOR_STORAGE_KEY, color);
  }, []);

  const resetAccentColor = useCallback(() => {
    setAccentColorState(DEFAULT_ACCENT_COLOR);
    window.localStorage.removeItem(ACCENT_COLOR_STORAGE_KEY);
  }, []);

  const value = useMemo(
    () => ({ accentColor, setAccentColor, resetAccentColor }),
    [accentColor, setAccentColor, resetAccentColor],
  );

  return <AccentColorContext.Provider value={value}>{children}</AccentColorContext.Provider>;
}
