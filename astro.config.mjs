import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [mdx(), sitemap()],
  site: "https://www.rdhar.dev",
  vite: { plugins: [tailwindcss()] },
});
