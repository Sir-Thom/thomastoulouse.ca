import { AiOutlineGlobal } from "react-icons/ai";
import { languages } from "../../i18n/ui";
import { getLangFromUrl } from "../../i18n/utils";
import DOMPurify from "dompurify";

export default function LanguageSelector() {
	const url = new URL(window.location.href);
	const currentLanguage: any = getLangFromUrl(url) || "fr"; // Ensure currentLanguage is a string

	const handleLanguageChange = (event) => {
		const selectedLanguageCode = event.target.value;
		const currentPathname = url.pathname;
		const currentHash = url.hash;
		// some big ball regex skill flexing there :D
		const newPathname = currentPathname.replace(/\/\w+(\/|$)/, `/${selectedLanguageCode}$1`);

		const newUrl = `${url.origin}${newPathname}${currentHash}`;

		// Redirect the user to the new URL
		window.location.href = newUrl;
	};

	return (
		<div className="flex items-center rounded-xl bg-transparent dark:bg-transparent">
			<AiOutlineGlobal size={24} />
			<select
				className="ml-2 rounded-xl bg-transparent py-2 dark:bg-transparent"
				aria-label="languages"
				name="languages"
				id="lang"
				onChange={handleLanguageChange}
				value={currentLanguage} // Ensure currentLanguage is a string
			>
				{Object.entries(languages)
					.map(([lang, label]) => (
						<option
							aria-label={label}
							key={lang}
							value={lang}
							className="text-black dark:text-white"
							dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(lang) }} // Sanitize the label
						/>
					))
					.sort()}
			</select>
		</div>
	);
}
