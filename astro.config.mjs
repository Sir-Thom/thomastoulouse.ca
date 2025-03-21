import { defineConfig ,envField} from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { loadEnv } from "vite";
import netlify from "@astrojs/netlify";

const { DOWNLOAD_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");
const { UPLOADTHING_SECRET } = loadEnv(process.env.NODE_ENV, process.cwd(), "");


// https://astro.build/config
export default defineConfig({

	env: {  
		schema: {
			DOWNLOAD_URL: envField.string({ context: "server", access: "secret" , default: DOWNLOAD_URL}),
			UPLOADTHING_SECRET: envField.string({ context:  "server", access: "secret"  , default: UPLOADTHING_SECRET}),
		}
	  },
	site: "https://www.thomastoulouse.ca",
	integrations: [tailwind(), react()],
	output: "server",
	output: "server",
	adapter: netlify(),
	vite: {
		build: {
		  rollupOptions: {
			external: ['uploadthing/server'], // Exclude the server-side module
		  },
		},
	  },
});

