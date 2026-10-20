import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rdhar.dev",
  trailingSlash: "always",
  integrations: [sitemap()],
  markdown: { syntaxHighlight: false },
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [400, 500],
      subsets: ["latin"],
    },
  ],
  security: {
    csp: {
      directives: [
        "default-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "connect-src 'self' https://rdhar.goatcounter.com/count",
        "img-src 'self'",
        "font-src 'self'",
      ],
      scriptDirective: {
        resources: ["'self'", "https://gc.zgo.at"],
      },
      styleDirective: {
        resources: ["'self'"],
      },
    },
  },
  server: {
    headers: {
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "X-Frame-Options": "DENY",
    },
  },
});
