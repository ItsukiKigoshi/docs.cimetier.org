// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.cimtier.org/',
  integrations: [
    starlight({
      title: "Cimetier Docs",
      editLink: {
        baseUrl: 'https://gitlab.com/itsukikigoshi/docs.cimetier.org/-/blob/main/'
      },
      favicon: '/favicon.ico',
      // social: [
      //   {
      //     icon: "github",
      //     label: "GitHub",
      //     href: "https://github.com/withastro/starlight",
      //   },
      // ],
      sidebar: [
        {
          label: "Guides",
          items: [{ autogenerate: { directory: "guides" } }],
        },
        {
          label: "Core",
          items: [{ autogenerate: { directory: "core" } }],
        },
        {
          label: "Future",
          items: [{ autogenerate: { directory: "future" } }],
        },
        {
          label: "Past",
          items: [{ autogenerate: { directory: "past" } }],
        },
      ],
    }),
  ],
});
