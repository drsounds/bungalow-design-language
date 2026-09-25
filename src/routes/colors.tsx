import { createFileRoute } from "@tanstack/react-router";
import { ColorsPage } from "@/showcase/colors";

export const Route = createFileRoute("/colors")({
  head: () => ({ meta: [
    { title: "Colors · Bungalow Design System" },
    { name: "description", content: "Semantic color tokens for the Bungalow design system." },
    { property: "og:title", content: "Bungalow Color Tokens" },
    { property: "og:description", content: "Semantic color tokens for the Bungalow design system." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ColorsPage,
});