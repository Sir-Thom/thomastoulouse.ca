/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	testPathIgnorePatterns: ["/node_modules/", "/dist/", "/tests/"],

	// Jest transformations -- this adds support for TypeScript

	// using ts-jest

	transform: {
		"^.+\\.tsx?$": "ts-jest"
	},

	// Runs special logic, such as cleaning up components

	// when using React Testing Library and adds special

	// extended assertions to Jest

	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

	// Test spec file resolution pattern

	// Matches parent folder `__tests__` and filename

	// should contain `test` or `spec`.
	testRegex: "(/src/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	// Module file extensions for importing

	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
