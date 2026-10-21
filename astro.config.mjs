import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rdhar.dev",
  trailingSlash: "always",
  build: { inlineStylesheets: "always" },
  integrations: [sitemap()],
  markdown: { syntaxHighlight: false },
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Libron",
      cssVariable: "--font-libron",
      fallbacks: ["serif"],
      options: {
        variants: [
          { src: ["./src/fonts/libron/Libron-Regular.woff2"], weight: 400, style: "normal" },
          { src: ["./src/fonts/libron/Libron-Italic.woff2"], weight: 400, style: "italic" },
          { src: ["./src/fonts/libron/Libron-Bold.woff2"], weight: 700, style: "normal" },
          { src: ["./src/fonts/libron/Libron-BoldItalic.woff2"], weight: 700, style: "italic" },
        ],
      },
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
        resources: ["'self'", "'inline-speculation-rules'"],
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
      "Permissions-Policy": "camera=(), geolocation=(), microphone=()",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
});
