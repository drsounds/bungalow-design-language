import { createFileRoute } from "@tanstack/react-router";
import { OverviewPage } from "@/showcase/overview";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Bungalow Design System" },
    { name: "description", content: "Bungalow's compact, warm and direct interface system." },
    { property: "og:title", content: "Bungalow Design System" },
    { property: "og:description", content: "Bungalow's compact, warm and direct interface system." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: OverviewPage,
});
