import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { loadEnv } from "vite";
import dotenv from "dotenv";
import netlify from "@astrojs/netlify";
dotenv.config();
const {
  DOWNLOAD_URL
} = loadEnv(import.meta.env.DOWNLOAD_URL, process.cwd(), "");


// https://astro.build/config
export default defineConfig({
  site: "https://www.thomastoulouse.ca",
  integrations: [tailwind(), react()],
  output: "hybrid",
  adapter: netlify(),
  server: {
    host: "127.0.0.1",
    port: 8080
  },
  env: {
    DOWNLOAD_URL: DOWNLOAD_URL
  }
});