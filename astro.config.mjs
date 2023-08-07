import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { loadEnv } from "vite";
import dotenv from "dotenv";
import netlify from "@astrojs/netlify/functions";
import compress from "astro-compress";
dotenv.config();
const { VITE_FIREBASE_API_KEY } = loadEnv(import.meta.env.VITE_FIREBASE_API_KEY, process.cwd(), "");
const { VITE_FIREBASE_AUTH_DOMAIN } = loadEnv(
	import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	process.cwd(),
	""
);
const { VITE_FIREBASE_PROJECT_ID } = loadEnv(
	import.meta.env.VITE_FIREBASE_PROJECT_ID,
	process.cwd(),
	""
);
const { VITE_FIREBASE_STORAGE_BUCKET } = loadEnv(
	import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	process.cwd(),
	""
);
const { VITE_FIREBASE_MESSAGING_SENDER_ID } = loadEnv(
	import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	process.cwd(),
	""
);
const { VITE_FIREBASE_APP_ID } = loadEnv(import.meta.env.VITE_FIREBASE_APP_ID, process.cwd(), "");
const { VITE_FIREBASE_MEASUREMENT_ID } = loadEnv(
	import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
	process.cwd(),
	""
);

// https://astro.build/config
export default defineConfig({
	site: "https://www.thomastoulouse.ca",
	integrations: [tailwind(), react()],
	output: "hybrid",
	adapter: netlify(),
	env: {
		// Define your environment variables here
		API_KEY: VITE_FIREBASE_API_KEY,
		AUTH_DOMAIN: VITE_FIREBASE_AUTH_DOMAIN,
		PROJECT_ID: VITE_FIREBASE_PROJECT_ID,
		STORAGE_BUCKET: VITE_FIREBASE_STORAGE_BUCKET,
		MESSAGING_SENDER_ID: VITE_FIREBASE_MESSAGING_SENDER_ID,
		APP_ID: VITE_FIREBASE_APP_ID,
		MEASUREMENT_ID: VITE_FIREBASE_MEASUREMENT_ID
	}
});
