import { ui, defaultLang, license } from "./ui";

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
export function useTranslationsLicense(lang: string | number) {
	return function t(key: string) {
		const nestedKeys: any = key.split(".");
		let translation: any = license[lang];

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

export function useTranslations(lang: string) {
	return function t(key: string) {
		const nestedKeys: any = key.split(".");
		let translation: any = ui[lang as keyof typeof ui];

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
