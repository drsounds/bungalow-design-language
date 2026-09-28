import { useState } from "react";
import { Button, EntitySheet, FormActions, Input, Select } from "@/design-system/bungalow";
import { ShowcaseLayout } from "./showcase-layout";

interface GuestDraft {
  name: string;
  room: string;
  nights: string;
}

const ROOMS = ["Forest bungalow", "Lake bungalow", "Garden bungalow"];

const CODE = `<EntitySheet
  title={guest ? guest.name : "New guest"}
  onClose={onClose}
  closeLabel="Close"
  onSubmit={(event) => { event.preventDefault(); onSubmit(draft); }}
  footer={
    <FormActions
      onDelete={guest ? onDelete : undefined}
      deleteLabel="Delete"
      onCancel={guest ? undefined : onClose}
      cancelLabel="Cancel"
      submitLabel="Save"
      saving={saving}
    />
  }
  preview={
    <div className="bungalow-entity-preview">
      <div>
        <div className="bungalow-entity-preview__kind">{draft.room}</div>
        <div className="bungalow-entity-preview__label">{draft.name || "Untitled"}</div>
      </div>
      <dl className="bungalow-entity-preview__meta">
        <div><dt>Nights</dt><dd>{draft.nights}</dd></div>
      </dl>
    </div>
  }
>
  <Input label="Guest name" required value={draft.name} onChange={...} />
  <Select label="Room" value={draft.room} onChange={...}>...</Select>
  <Input label="Nights" type="number" min={1} value={draft.nights} onChange={...} />
</EntitySheet>`;

export function PatternsPage() {
  const [open, setOpen] = useState<"new" | "edit" | null>(null);
  const [draft, setDraft] = useState<GuestDraft>({ name: "", room: ROOMS[0], nights: "2" });

  function openNew() {
    setDraft({ name: "", room: ROOMS[0], nights: "2" });
    setOpen("new");
  }
  function openEdit() {
    setDraft({ name: "Ana Kovač", room: ROOMS[0], nights: "3" });
    setOpen("edit");
  }

  return (
    <ShowcaseLayout eyebrow="Library / Patterns" title="Create or update entity.">
      <p className="page-lede">
        Every create and edit view is this shell: a full-width header, a scrollable form on the
        left, a fixed-dark preview on the right (desktop only), and a full-width footer with Save
        bottom-right. Drive it from a create/edit route in your app, not local list state — see
        `.lovable/system.md`, "Create/edit views".
      </p>

      <div className="component-layout">
        <div className="component-list">
          <section className="component-section">
            <h2>Create or update entity</h2>
            <p>Built from EntitySheet + FormActions. Try both the create and edit entry points below.</p>
            <div className="specimen">
              <span className="specimen-label">Live demo</span>
              <div className="specimen-stage">
                <Button onClick={openNew}>New guest</Button>
                <Button variant="outline" onClick={openEdit}>Edit existing guest</Button>
              </div>
            </div>
            <details className="code">
              <summary>Code</summary>
              <pre>{CODE}</pre>
            </details>
          </section>
        </div>
      </div>

      {open ? (
        <EntitySheet
          title={open === "edit" ? draft.name : "New guest"}
          onClose={() => setOpen(null)}
          closeLabel="Close"
          onSubmit={(event) => {
            event.preventDefault();
            setOpen(null);
          }}
          footer={
            <FormActions
              onDelete={open === "edit" ? () => setOpen(null) : undefined}
              deleteLabel="Delete"
              onCancel={open === "edit" ? undefined : () => setOpen(null)}
              cancelLabel="Cancel"
              submitLabel="Save"
              submitDisabled={!draft.name.trim()}
            />
          }
          preview={
            <div className="bungalow-entity-preview">
              <div>
                <div className="bungalow-entity-preview__kind">{draft.room}</div>
                <div className="bungalow-entity-preview__label">{draft.name || "Untitled"}</div>
              </div>
              <dl className="bungalow-entity-preview__meta">
                <div>
                  <dt>Nights</dt>
                  <dd>{draft.nights || "—"}</dd>
                </div>
              </dl>
            </div>
          }
        >
          <Input
            label="Guest name"
            required
            value={draft.name}
            onChange={(event) => setDraft((d) => ({ ...d, name: event.target.value }))}
          />
          <Select
            label="Room"
            value={draft.room}
            onChange={(event) => setDraft((d) => ({ ...d, room: event.target.value }))}
          >
            {ROOMS.map((room) => (
              <option key={room} value={room}>
                {room}
              </option>
            ))}
          </Select>
          <Input
            label="Nights"
            type="number"
            min={1}
            value={draft.nights}
            onChange={(event) => setDraft((d) => ({ ...d, nights: event.target.value }))}
          />
        </EntitySheet>
      ) : null}
    </ShowcaseLayout>
  );
}
