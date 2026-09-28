import type { FormEvent, MouseEvent, ReactNode } from "react";

export interface EntitySheetProps {
  title: ReactNode;
  subtitle?: ReactNode;
  onClose: () => void;
  closeLabel: string;
  /** Right-hand panel shown alongside the form on wide screens (preview, calculations, totals, ...).
   *  Always renders in a fixed dark treatment, independent of the app's light/dark theme — see
   *  `.bungalow-sheet__preview` in theme.css. Omitted entirely on narrow screens (no stacking). */
  preview?: ReactNode;
  /** Footer actions, e.g. <FormActions/>. Spans the sheet's full width, below both columns. */
  footer?: ReactNode;
  /** When set, the body and footer are wrapped in a <form>, so both Enter and the footer's submit
   *  button trigger it. Omit for a sheet with no form (e.g. a confirmation). */
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

/**
 * The design system's create/edit modal — see the "Create or update entity" pattern in the
 * showcase (`/patterns`) and `.lovable/system.md` for the convention this implements: a
 * full-width header, a two-column body on wide screens (scrollable form left, fixed-dark preview
 * right), and a full-width footer with the primary save action bottom-right.
 *
 * This is a *sub-route-driven modal*, not an inline form: mount it from a dedicated create/edit
 * route (e.g. `/entity/new`, `/entity/$id/edit`) rather than swapping a list row for a form or
 * saving individual fields on blur.
 */
export function EntitySheet({ title, subtitle, onClose, closeLabel, preview, footer, onSubmit, children }: EntitySheetProps) {
  function stop(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
  }

  const body = (
    <div className="bungalow-sheet__body">
      <div className="bungalow-sheet__scroll">{children}</div>
      {preview ? <div className="bungalow-sheet__preview">{preview}</div> : null}
    </div>
  );
  const footerRow = footer ? <div className="bungalow-sheet__footer">{footer}</div> : null;

  return (
    <div className="bungalow-sheet-backdrop" onClick={onClose}>
      <div className={preview ? "bungalow-sheet bungalow-sheet--split" : "bungalow-sheet"} role="dialog" aria-modal="true" onClick={stop}>
        <div className="bungalow-sheet__header">
          <div>
            <h2 className="bungalow-sheet__title">{title}</h2>
            {subtitle ? <p className="bungalow-sheet__subtitle">{subtitle}</p> : null}
          </div>
          <button type="button" className="bungalow-sheet__close" onClick={onClose} aria-label={closeLabel}>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        {onSubmit ? (
          <form className="bungalow-sheet__form-shell" onSubmit={onSubmit}>
            {body}
            {footerRow}
          </form>
        ) : (
          <>
            {body}
            {footerRow}
          </>
        )}
      </div>
    </div>
  );
}
