// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Cimetier Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [{ autogenerate: { directory: "guides" } }],
        },
        {
          label: "Future",
          items: [{ autogenerate: { directory: "future" } }],
        },
        {
          label: "Current",
          items: [{ autogenerate: { directory: "current" } }],
        },
        {
          label: "Past",
          items: [{ autogenerate: { directory: "past" } }],
        },
      ],
    }),
  ],
});
