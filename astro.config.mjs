import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rdhar.dev",
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  security: {
    csp: {
      directives: {
        "default-src": ["'none'"],
        "base-uri": ["'self'"],
        "form-action": ["'self'"],
        "frame-ancestors": ["'none'"],
        "script-src": ["'self'", "https://gc.zgo.at"],
        "connect-src": ["'self'", "https://rdhar.goatcounter.com/count"],
        "img-src": [
          "'self'",
          "https://github.com",
          "https://private-user-images.githubusercontent.com",
          "https://upload.wikimedia.org",
        ],
        "font-src": ["'self'"],
        "style-src": ["'self'"],
      },
    },
  },
  server: {
    headers: {
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  },
});
