import { test, expect } from "@playwright/test";
test("test license french", async ({ page }) => {
	await page.goto("http://localhost:3000/fr/License");
	await page
		.getByRole("link", { name: "https://github.com/Sir-Thom/thomastoulouse.ca" })
		.isVisible();
	await page.getByRole("link", { name: "BSD-3-Clause license" }).isVisible();
	await page
		.getByText("La Licence BSD 3-Clause Copyright © 2023, Thomas Toulouse La redistribution et l")
		.isVisible();
	await page.getByRole("heading", { name: "La Licence BSD 3-Clause" }).isVisible();
	await page.getByText("Copyright © 2023, Thomas Toulouse").isVisible();
	await page.getByText("Copyright © 2023, Thomas Toulouse").isVisible();
	await page
		.getByText("La redistribution et l'utilisation sous forme source et binaire, avec ou sans mo")
		.isVisible();
	await page
		.getByText("Les redistributions du code source doivent conserver la mention de droit d'auteu")
		.isVisible();
	await page
		.getByText("Les redistributions sous forme binaire doivent reproduire la mention de droit d'")
		.isVisible();
	await page
		.getByText("Ni le nom du titulaire du droit d'auteur ni les noms des contributeurs ne peuven")
		.isVisible();
	await page
		.getByText("CE LOGICIEL EST FOURNI PAR LES TITULAIRES DU DROIT D'AUTEUR ET LES CONTRIBUTEURS")
		.isVisible();
	await page.getByRole("contentinfo").click();

	await page.getByRole("contentinfo").getByRole("link", { name: "À propos de moi" }).click();
	await page.getByRole("contentinfo").getByRole("link", { name: "Talents" }).click();
	await page.getByRole("contentinfo").getByRole("link", { name: "Expérience" }).click();
	await page.getByRole("contentinfo").getByRole("link", { name: "Éducation" }).click();
	await page.getByRole("contentinfo").getByRole("link", { name: "Projets" }).click();
	await page.locator("div").filter({ hasText: "418-957-0141" }).nth(2).isVisible();
	await page.locator("div").filter({ hasText: "Sir-Thom1702@proton.me" }).nth(2).click();
});
