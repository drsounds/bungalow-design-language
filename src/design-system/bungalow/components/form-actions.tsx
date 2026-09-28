import type { ReactNode } from "react";
import { Button } from "./button";

export interface FormActionsProps {
  onCancel?: () => void;
  cancelLabel?: ReactNode;
  onDelete?: () => void;
  deleteLabel?: ReactNode;
  deleting?: boolean;
  submitLabel: ReactNode;
  saving?: boolean;
  submitDisabled?: boolean;
}

/**
 * Footer actions for an {@link EntitySheet}: destructive/secondary actions on the left, the
 * primary save action on the right. Pass this as `EntitySheet`'s `footer` prop — don't render it
 * inside the scrollable form body, that's what keeps it pinned full-width at the bottom.
 */
export function FormActions({
  onCancel,
  cancelLabel,
  onDelete,
  deleteLabel,
  deleting,
  submitLabel,
  saving,
  submitDisabled,
}: FormActionsProps) {
  return (
    <div className="bungalow-form-actions">
      <div className="bungalow-form-actions__secondary">
        {onDelete ? (
          <Button type="button" variant="outline" tone="danger" onClick={onDelete} loading={deleting}>
            {deleteLabel}
          </Button>
        ) : null}
        {onCancel ? (
          <Button type="button" variant="outline" tone="default" onClick={onCancel}>
            {cancelLabel}
          </Button>
        ) : null}
      </div>
      <Button type="submit" tone="primary" loading={saving} disabled={submitDisabled}>
        {submitLabel}
      </Button>
    </div>
  );
}
