// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.cimtier.org/",

  integrations: [
    starlight({
      title: "Cimetier Docs",
      customCss: ["./src/styles/global.css"],
      components: {
              Footer: './src/components/CustomFooter.astro',
            },
      editLink: {
        baseUrl:
          "https://gitlab.com/itsukikigoshi/docs.cimetier.org/-/blob/main/",
      },
      favicon: "/favicon.ico",
      lastUpdated: true,
      social: [
        {
          icon: "gitlab",
          label: "GitLab",
          href: "https://gitlab.com/itsukikigoshi/docs.cimetier.org/",
        },
      ],
      sidebar: [
        { slug: "index" },
        {
          label: "Core",
          items: [{ autogenerate: { directory: "core" } }],
        },
        {
          label: "Future",
          items: [
            { autogenerate: { directory: "future" } },
            {
              label: "Ideas",
              items: [{ autogenerate: { directory: "idea" } }],
            },
          ],
        },
        {
          label: "Ongoing",
          items: [{ autogenerate: { directory: "ongoing" } }],
        },
        {
          label: "Past",
          items: [{ autogenerate: { directory: "past" } }],
        },
        {
          label: "自省",
          items: [{ autogenerate: { directory: "self" } }],
        },
        {
          label: "Random",
          items: [{ autogenerate: { directory: "random" } }],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
