import { ui, defaultLang } from "./ui.ts";

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
