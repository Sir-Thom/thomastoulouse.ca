import { test, expect } from "@playwright/test";

test("test index french", async ({ page }) => {
	await page.goto("http://localhost:3000/fr/");
	await page.getByRole("navigation").isVisible();
	await page.getByRole("link", { name: "Thomas Toulouse" }).click();
	await page.getByRole("navigation").getByRole("link", { name: "À propos de moi" }).click();
	await page.getByRole("navigation").getByRole("link", { name: "Talents" }).click();
	await page.getByRole("navigation").getByRole("link", { name: "Expérience" }).click();
	await page.getByRole("navigation").getByRole("link", { name: "Éducation" }).click();
	await page.getByRole("navigation").getByRole("link", { name: "Projets" }).click();
	const downloadPromise = page.waitForEvent("download");
	await page.getByRole("button", { name: "Télécharger CV" }).click();
	const download = await downloadPromise;
	await page.getByRole("button", { name: "Contactez-moi" }).click();
	await page.getByRole("button", { name: "Toggle Themes" }).click();
	await page.getByRole("button", { name: "Toggle Themes" }).click();
	await page.getByRole("navigation").getByRole("img").nth(3).isVisible();
	await page.getByRole("combobox").selectOption("en");
	await page.getByRole("combobox").selectOption("en");
	await page.getByRole("combobox").selectOption("fr");
	await page.getByRole("combobox").selectOption("fr");
	await page
		.locator("div")
		.filter({
			hasText: "Bonjour je m'appelle Thomas Toulouse Je suis un étudiant de troisième année en i"
		})
		.first()
		.isVisible();
	await page
		.getByText("Bonjour je m'appelle Thomas Toulouse Je suis un étudiant de troisième année en i")
		.isVisible();
	await page.locator("canvas").click({
		position: {
			x: 145,
			y: 23
		}
	});
	await page.locator("#skillSection").isVisible();
	await page
		.locator("#skillSection astro-island div")
		.filter({
			hasText: "BashBash est un shell et un langage de script utilisé principalement dans les sy"
		})
		.nth(2)
		.isVisible();
	await page.getByLabel("Previous card").isVisible();
	await page.getByLabel("Next card").isVisible();
	await page
		.getByText("BashBash est un shell et un langage de script utilisé principalement dans les sy")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("C ++C++ est un langage de programmation polyvalent et puissant. Il permet un con")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("CSharpC# est un langage de programmation orienté objet développé par Microsoft. ")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("CSSCSS (Cascading Style Sheets) est un langage de style utilisé pour décrire la ")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("HTMLHTML (HyperText Markup Language) est le langage de balisage utilisé pour str")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("JavaScriptJavaScript est un langage de programmation principalement utilisé pour")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("PHPPHP est un langage de programmation populaire et largement utilisé pour dével")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("PowerShellPowerShell est un puissant shell et langage de script développé par Mi")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("PythonPython est un langage de programmation polyvalent et facile à apprendre. I")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("ReactReact.js est une bibliothèque JavaScript utilisée pour créer des interfaces")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.getByText("RustRust est un langage de programmation moderne conçu pour offrir à la fois la ")
		.isVisible();
	await page.getByLabel("Next card").click();
	await page
		.locator("div")
		.filter({
			hasText: "Expérience Walmart Préposé aux paniers | 09/2020-aujourd'hui Fromagerie La Pépit"
		})
		.first()
		.isVisible();
	await page.getByRole("heading", { name: "Expérience" }).isVisible();
	await page.getByText("Walmart Préposé aux paniers | 09/2020-aujourd'hui").isVisible();
	await page
		.getByText("Fromagerie La Pépite d’or Emballage et fabrication de fromage | 06/2019-08/2019")
		.isVisible();
	await page.getByRole("heading", { name: "Éducation" }).isVisible();
	await page
		.getByText("Diplôme d'étude secondaire Polyvalente Saint-Georges | 2017-2021")
		.isVisible();
	await page
		.getByText("DEC en informatique Cégep Beauce Appalaches | 2021-aujourd'hui")
		.isVisible();
	await page.getByRole("heading", { name: "Projets" }).isVisible();
	const page1Promise = page.waitForEvent("popup");
	await page
		.getByRole("link", {
			name: "Magic Eye Magic Eye Une application pour appareil qui a comme système d'opération Linux. Cette application permet à un appareil de se connecter à distance à une caméra."
		})
		.click();
	const page1 = await page1Promise;
	const page2Promise = page.waitForEvent("popup");
	await page
		.getByRole("link", {
			name: "Mgt-lite Mgt-lite Une application graphique qui est une version simplifiée du Magic the Gathering."
		})
		.click();
	const page2 = await page2Promise;
	const page3Promise = page.waitForEvent("popup");
	await page
		.getByRole("link", {
			name: "Dragon Music Dragon Music Mon Projet de développement web 3. Un site web qui permet de jouer de la musique et d'en ajouter (Spotify clone)."
		})
		.click();
	const page3 = await page3Promise;
	const page4Promise = page.waitForEvent("popup");
	await page
		.getByRole("link", {
			name: "Terminaux Terminaux Un émulateur de console pour PC fait avec TypeScript et Tauri."
		})
		.click();
	const page4 = await page4Promise;
	const page5Promise = page.waitForEvent("popup");
	await page
		.getByRole("link", {
			name: "Rustyfetch Rustyfetch Une Application console qui affiche des informations sur le système d'opération. (neofetch clone)"
		})
		.click();
	const page5 = await page5Promise;
	await page.getByRole("contentinfo").getByText("Thomas Toulouse").isVisible();
	await page.getByRole("contentinfo").click();
	await page.getByRole("link", { name: "BSD-3-Clause license" }).isVisible();
	await page.getByRole("main").click();
	await page
		.getByRole("link", { name: "https://github.com/Sir-Thom/thomastoulouse.ca" })
		.isVisible();
	await page.getByRole("contentinfo").getByRole("link", { name: "À propos de moi" }).click();
	await page.getByRole("contentinfo").getByRole("link", { name: "Talents" }).click();
	await page.getByRole("contentinfo").getByRole("link", { name: "Expérience" }).click();
	await page.getByRole("contentinfo").getByRole("link", { name: "Éducation" }).click();
	await page.getByRole("contentinfo").getByRole("link", { name: "Projets" }).click();
	await page.locator("div").filter({ hasText: "418-957-0141" }).nth(2).isVisible();
	await page.locator("div").filter({ hasText: "Sir-Thom1702@proton.me" }).nth(2).click();
});
