import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
// import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rdhar.dev",
  integrations: [mdx(), sitemap(), tailwind()]
  // relativeLinks(),
});
