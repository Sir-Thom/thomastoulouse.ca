import { test } from "@playwright/test";
// Increase timeout for this test
// @jest-environment playwright
// @jest-environment node

test("test index english", async ({ page }) => {
	await page.goto("http://localhost:3000/en/");
	await page.getByRole("navigation").isVisible();
	await page
		.getByText("Hello, my name is Thomas Toulouse I am a third-year computer science student at ")
		.isVisible();
	await page.locator("canvas").isVisible();
	await page
		.locator("div")
		.filter({
			hasText: "Hello, my name is Thomas Toulouse I am a third-year computer science student at "
		})
		.first()
		.isVisible();
	await page
		.locator("#skillSection astro-island div")
		.filter({
			hasText: "BashBash is a shell and scripting language primarily used in Unix and Linux oper"
		})
		.nth(2)
		.isVisible();
	await page
		.getByText("BashBash is a shell and scripting language primarily used in Unix and Linux oper")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("C ++C++ is a versatile and powerful programming language. It allows precise cont")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("CSharpC# is an object-oriented programming language developed by Microsoft. It i")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("CSSCSS (Cascading Style Sheets) is a style language used to describe the present")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("HTMLHTML (HyperText Markup Language) is the markup language used to structure th")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("JavaScriptJavaScript is a programming language primarily used for web developmen")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("PHPPHP is a popular and widely used programming language for developing dynamic ")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("PowerShellPowerShell is a powerful shell and scripting language developed by Mic")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("PythonPython is a versatile and easy-to-learn programming language. It stands ou")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("ReactReact.js is a JavaScript library used to create interactive and dynamic use")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("RustRust is a modern programming language designed to provide both the performan")
		.isVisible();
	await page.getByLabel("Previous card").click();
	await page.getByRole("heading", { name: "Experience" }).click();
	await page
		.getByText("Walmart shopping cart Attendant | 09/2020-today Fromagerie La Pépite d’or Packag")
		.isVisible();
	await page.getByRole("heading", { name: "Education" }).click();
	await page
		.getByText("High School Diploma Polyvalente Saint-Georges | 2017-2021 DEC in computer scienc")
		.isVisible();
	await page.getByRole("heading", { name: "Projects" }).isVisible();
	const page6Promise = page.waitForEvent("popup");
	await page
		.getByRole("link", {
			name: "Magic Eye Magic Eye A application for a device with Linux operating system. This application allow device to remotely connect to a camera."
		})
		.click();
	const page6 = await page6Promise;
	const page7Promise = page.waitForEvent("popup");
	await page
		.getByRole("link", { name: "Mgt-lite Mgt-lite A simplify version of Magic the Gathering." })
		.click();
	const page7 = await page7Promise;
	const page8Promise = page.waitForEvent("popup");
	await page
		.getByRole("link", {
			name: "Dragon Music Dragon Music My project for web devloppement 3. A website that allow the user to play music and add them (Spotify clone)."
		})
		.click();
	const page8 = await page8Promise;
	const page9Promise = page.waitForEvent("popup");
	await page
		.getByRole("link", {
			name: "Terminaux Terminaux A terminal emulator for PC made with TypeScript and Tauri."
		})
		.click();
	const page9 = await page9Promise;
	const page10Promise = page.waitForEvent("popup");
	await page
		.getByRole("link", {
			name: "Rustyfetch Rustyfetch A terminal application that displays informations about the operating system. (neofetch)"
		})
		.click();
	const page10 = await page10Promise;
	await page.getByRole("contentinfo").isVisible();
	await page.getByRole("contentinfo").getByText("Thomas Toulouse").isVisible();
	await page
		.getByRole("link", { name: "https://github.com/Sir-Thom/thomastoulouse.ca" })
		.isVisible();
	await page.getByRole("contentinfo").getByRole("link", { name: "About me" }).click();

	await page.getByRole("contentinfo").getByRole("link", { name: "Skills" }).click();
	await page.getByRole("contentinfo").getByRole("link", { name: "Experience" }).click();
	await page.getByRole("contentinfo").getByRole("link", { name: "Education" }).click();
	await page.getByRole("contentinfo").getByRole("link", { name: "Projects" }).click();
	await page.locator("div").filter({ hasText: "418-957-0141" }).nth(2).isVisible();
	await page.locator("div").filter({ hasText: "Sir-Thom1702@proton.me" }).nth(2).click();
});
