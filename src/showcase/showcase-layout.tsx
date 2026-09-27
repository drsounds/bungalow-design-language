import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const links = [
  { to: "/", label: "Overview" },
  { to: "/colors", label: "Colors" },
  { to: "/theme", label: "Theme" },
  { to: "/typography", label: "Typography" },
  { to: "/components", label: "Components" },
] as const;

export function ShowcaseLayout({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) {
  return <div className="bungalow-root showcase-shell"><aside className="showcase-nav"><Link to="/" className="showcase-brand"><strong>Bungalow</strong><span>Design system</span></Link><nav aria-label="Showcase navigation">{links.map((link) => <Link key={link.to} to={link.to} activeOptions={{ exact: link.to === "/" }} activeProps={{ className: "is-active" }}>{link.label}</Link>)}</nav><p className="showcase-version">Starter · 1.0</p></aside><main className="showcase-main"><header className="showcase-header"><p>{eyebrow}</p><h1>{title}</h1></header>{children}</main></div>;
}

export function Specimen({ label, children }: { label: string; children: ReactNode }) {
  return <div className="specimen"><span className="specimen-label">{label}</span><div className="specimen-stage">{children}</div></div>;
}