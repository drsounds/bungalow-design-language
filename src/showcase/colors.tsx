import { ShowcaseLayout } from "./showcase-layout";

const semantic = [
  ["canvas", "Page and control background"], ["ink", "Primary text and contrast"], ["surface", "Quiet grouped surface"], ["surface-strong", "Disabled and default state"], ["border", "Control and section boundary"], ["primary", "Warm brand action"], ["success", "Positive confirmation"], ["warning", "Action needs attention"], ["danger", "Error and destructive action"], ["info", "Neutral information"],
];

export function ColorsPage() {
  return <ShowcaseLayout eyebrow="Foundations / Color" title="Color with a job to do."><p className="page-lede">Every color maps to a clear interface role. Use the semantic name rather than choosing by appearance.</p><section className="swatch-grid">{semantic.map(([name, role]) => <article className="swatch" key={name}><div className={`swatch-color swatch-${name}`} /><div><code>--bungalow-color-{name}</code><p>{role}</p></div></article>)}</section><section className="contrast-band"><div><span>Foreground on canvas</span><strong>Clear, familiar, readable.</strong></div><div className="contrast-inverse"><span>Canvas on ink</span><strong>Strong contrast for key moments.</strong></div></section></ShowcaseLayout>;
}