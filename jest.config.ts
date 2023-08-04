import { transform } from "framer-motion";
import type { Config } from "jest";

const config: Config = {
	verbose: true,
	testPathIgnorePatterns: ["/node_modules/", "/dist/", "/tests/*,/src/components/"]
};

export default config;
