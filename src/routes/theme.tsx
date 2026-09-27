import { createFileRoute } from "@tanstack/react-router";
import { ThemePage } from "@/showcase/theme";

export const Route = createFileRoute("/theme")({
  head: () => ({ meta: [
    { title: "Theme · Bungalow Design System" },
    { name: "description", content: "Pick a custom accent color for the Bungalow design system." },
    { property: "og:title", content: "Bungalow Theme" },
    { property: "og:description", content: "Pick a custom accent color for the Bungalow design system." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ThemePage,
});
