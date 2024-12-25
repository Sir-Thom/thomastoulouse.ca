import { defineConfig ,envField} from "astro/config";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

const { DOWNLOAD_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");



// https://astro.build/config
export default defineConfig({
	env: {  
		schema: {
			DOWNLOAD_URL: envField.string({ context: "server", access: "secret" , default: DOWNLOAD_URL}),
		}
	  },
	site: "https://www.thomastoulouse.ca",
	integrations: [tailwind(), react()],
	output: "server",
	adapter: netlify(),

});

