import { test, expect } from "@playwright/test";
test("test", async ({ page }) => {
	await page.goto("http://localhost:3000/en/License");
	await page
		.getByText("The 3-Clause BSD License Copyright © 2023, Thomas Toulouse Redistribution and us")
		.isVisible();
	await page
		.getByText("The 3-Clause BSD License Copyright © 2023, Thomas Toulouse Redistribution and us")
		.isVisible();

	await page.getByRole("heading", { name: "The 3-Clause BSD License" }).isVisible();
	await page.getByText("Copyright © 2023, Thomas Toulouse").isVisible();
	await page
		.getByText("Redistribution and use in source and binary forms, with or without modification,")
		.isVisible();
	await page
		.getByText("Redistributions of source code must retain the above copyright notice, this list")
		.isVisible();
	await page
		.getByText("Redistributions in binary form must reproduce the above copyright notice, this l")
		.isVisible();
	await page
		.getByText("Neither the name of the copyright holder nor the names of its contributors may b")
		.isVisible();
	await page
		.getByText("THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS' AND ")
		.isVisible();
	await page.getByRole("contentinfo").isVisible();
	await page.getByRole("contentinfo").getByText("Thomas Toulouse").isVisible();
	await page
		.getByRole("link", { name: "https://github.com/Sir-Thom/thomastoulouse.ca" })
		.isVisible();
	await page.getByRole("link", { name: "BSD-3-Clause license" }).isVisible();
	await page.getByRole("contentinfo").getByRole("link", { name: "Skills" }).click();
	await page.getByRole("contentinfo").getByRole("link", { name: "Experience" }).click();
	await page.getByRole("contentinfo").getByRole("link", { name: "Education" }).click();
	await page.getByRole("contentinfo").getByRole("link", { name: "Projects" }).click();
	await page.locator("div").filter({ hasText: "418-957-0141" }).nth(2).isVisible();
	await page.locator("div").filter({ hasText: "Sir-Thom1702@proton.me" }).nth(2).click();
	await page.getByRole("link", { name: "Thomas Toulouse" }).click();
});
