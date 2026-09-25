import { createFileRoute } from "@tanstack/react-router";
import { TypographyPage } from "@/showcase/typography";

export const Route = createFileRoute("/typography")({
  head: () => ({ meta: [
    { title: "Typography · Bungalow Design System" },
    { name: "description", content: "The Bungalow Sans type system and hierarchy." },
    { property: "og:title", content: "Bungalow Typography" },
    { property: "og:description", content: "The Bungalow Sans type system and hierarchy." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: TypographyPage,
});