import { createFileRoute } from "@tanstack/react-router";
import { ComponentsPage } from "@/showcase/components";

export const Route = createFileRoute("/components")({
  head: () => ({ meta: [
    { title: "Components · Bungalow Design System" },
    { name: "description", content: "Interactive components and states in the Bungalow design system." },
    { property: "og:title", content: "Bungalow Components" },
    { property: "og:description", content: "Interactive components and states in the Bungalow design system." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ComponentsPage,
});