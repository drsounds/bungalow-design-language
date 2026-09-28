import { createFileRoute } from "@tanstack/react-router";
import { PatternsPage } from "@/showcase/patterns";

export const Route = createFileRoute("/patterns")({
  head: () => ({ meta: [
    { title: "Patterns · Bungalow Design System" },
    { name: "description", content: "Composed UI patterns, like the create/edit modal, in the Bungalow design system." },
    { property: "og:title", content: "Bungalow Patterns" },
    { property: "og:description", content: "Composed UI patterns, like the create/edit modal, in the Bungalow design system." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PatternsPage,
});
