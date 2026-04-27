import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  env: {
    schema: {
      DOWNLOAD_URL: envField.string({ context: "server", access: "secret" }),
      UPLOADTHING_SECRET: envField.string({ context: "server", access: "secret" }),
    }
  },
  
  site: "https://www.thomastoulouse.ca",
  output: "server",
  
  // 1. Pass configuration to the adapter to disable sessions
  adapter: netlify({
    edgeMiddleware: false, // Disables Netlify-side session injection
  }),

  // 2. Do NOT include a 'session' block here. 
  // If you must have it, set it to undefined or enabled: false
  session: {
    enabled: false
  },

  integrations: [react(),sitemap()], 
  
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // 3. This is the "Safety Net": force Vite to handle cookie as external
      external: ['cookie'],
    },
    build: {
      rollupOptions: {
        external: ['uploadthing/server'],
      },
    },
  },
});