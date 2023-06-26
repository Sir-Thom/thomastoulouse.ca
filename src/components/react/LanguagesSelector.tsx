import { AiOutlineGlobal } from "react-icons/ai";
import { languages } from "../../i18n/ui";
import { getLangFromUrl, getURLFormReact } from "../../i18n/utils";

const langages = getURLFormReact();
const url = new URL(window.location.href);
const currentLanguage: any = getLangFromUrl(url); // Get the current language from the URL

export default function LanguageSelector() {
	const handleLanguageChange = (event) => {
		const selectedLanguageCode = event.target.value;

		const url = new URL(window.location.href);
		console.log(url);
		let parts = window.location.href.split("/");
		const currentpage = parts[parts.length - 1];
		console.log(currentpage);
		url.href = url.href.replace(url.pathname, `/${selectedLanguageCode}/${currentpage}`);
		window.location.href = url.toString();
	};

	return (
		<div className="flex items-center rounded-xl bg-transparent   dark:bg-transparent ">
			<AiOutlineGlobal size={24} />
			<select
				className="ml-2 rounded-xl bg-transparent  py-2  dark:bg-transparent  "
				aria-label="languages"
				name="languages"
				id="lang"
				onChange={handleLanguageChange}
				value={currentLanguage}
			>
				{Object.entries(languages)
					.map(([lang, label]) => (
						<option aria-label={langages} key={lang} defaultValue={lang} value={lang}>
							{lang}
						</option>
					))
					.sort()}
			</select>
		</div>
	);
}
