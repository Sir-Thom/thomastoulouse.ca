/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	testPathIgnorePatterns: ["/node_modules/", "/dist/", "/tests/"],
	transform: {
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				tsconfig: {
					// Use modern module resolution for tests
					moduleResolution: "bundler",
					// Other options to ensure compatibility
					jsx: "react-jsx",
					esModuleInterop: true
				}
			}
		]
	},
	// Add moduleNameMapper to handle path aliases
	moduleNameMapper: {
		"^@components/(.*)$": "<rootDir>/src/components/$1",
		"^@assets/(.*)$": "<rootDir>/src/assets/$1",
		"../../i18n/utils": "<rootDir>/src/i18n/utils.ts"
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
