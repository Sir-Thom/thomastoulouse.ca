import { ui, defaultLang, license } from "./ui.ts";

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split("/");
	if (lang in ui) return lang as keyof (typeof ui)[];
	console.warn(`Language ${lang} not found, using default language ${defaultLang}`);
	return defaultLang;
}
export function getURLFormReact(): string {
	if (typeof window !== "undefined") {
		const url = new URL(window.location.href);
		const [, lang] = url.pathname.split("/");
		if (lang in ui) return lang as keyof typeof ui;
	}

	console.warn(`Language not found, using default language ${defaultLang}`);
	return defaultLang;
}
export function useTranslationsLicense(lang) {
	return function t(key) {
		const nestedKeys = key.split(".");
		let translation = license[lang];

		for (const nestedKey of nestedKeys) {
			if (!translation.hasOwnProperty(nestedKey)) {
				translation = ui[defaultLang];
				break;
			}

			translation = translation[nestedKey];
		}

		return translation;
	};
}

export function useTranslations(lang) {
	return function t(key) {
		const nestedKeys = key.split(".");
		let translation = ui[lang];

		for (const nestedKey of nestedKeys) {
			if (!translation.hasOwnProperty(nestedKey)) {
				translation = ui[defaultLang];
				break;
			}

			translation = translation[nestedKey];
		}

		return translation;
	};
}
export function getLicenseURL(lang: keyof typeof ui): string {
	const baseURL = typeof window !== "undefined" ? window.location.origin : "";
	const licensePath = `/${lang}/License`;
	return `${baseURL}${licensePath}`;
}
