import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { loadEnv } from "vite";
import dotenv from "dotenv";
import netlify from "@astrojs/netlify/functions";

// Load environment variables from .env file
dotenv.config();
const { FIREBASE_API_KEY } = loadEnv(
  import.meta.env.FIREBASE_API_KEY,
  process.cwd(),
  ""
);
const { FIREBASE_AUTH_DOMAIN } = loadEnv(
  import.meta.env.FIREBASE_AUTH_DOMAIN,
  process.cwd(),
  ""
);
const { FIREBASE_PROJECT_ID } = loadEnv(
  import.meta.env.FIREBASE_PROJECT_ID,
  process.cwd(),
  ""
);
const { FIREBASE_STORAGE_BUCKET } = loadEnv(
  import.meta.env.FIREBASE_STORAGE_BUCKET,
  process.cwd(),
  ""
);
const { FIREBASE_MESSAGING_SENDER_ID } = loadEnv(
  import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
  process.cwd(),
  ""
);
const { FIREBASE_APP_ID } = loadEnv(
  import.meta.env.FIREBASE_APP_ID,
  process.cwd(),
  ""
);
const { FIREBASE_MEASUREMENT_ID } = loadEnv(
  import.meta.env.FIREBASE_MEASUREMENT_ID,
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: netlify(),
  env: {
    // Define your environment variables here
    API_KEY: FIREBASE_API_KEY,
    AUTH_DOMAIN: FIREBASE_AUTH_DOMAIN,
    PROJECT_ID: FIREBASE_PROJECT_ID,
    STORAGE_BUCKET: FIREBASE_STORAGE_BUCKET,
    MESSAGING_SENDER_ID: FIREBASE_MESSAGING_SENDER_ID,
    APP_ID: FIREBASE_APP_ID,
    MEASUREMENT_ID: FIREBASE_MEASUREMENT_ID,
  },
});
