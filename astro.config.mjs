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
          label: "Life",
          items: [{ autogenerate: { directory: "life" } }],
        },
        {
          label: "Log",
          items: [{ autogenerate: { directory: "log" } }],
        },
        {
          label: "Finance",
          items: [{ autogenerate: { directory: "finance" } }]
        },
        {
          label: "Ideas",
          items: [{ autogenerate: { directory: "idea" } }],
        },
        {
          label: "Books",
          items: [{ autogenerate: { directory: "books" } }],
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
