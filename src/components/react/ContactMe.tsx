import { getLangFromUrl, getURLFormReact, useTranslations } from "../../i18n/utils";
const lang = getURLFormReact();
const t = useTranslations(lang);
export default function ContactMe() {
	const email = "Sir-Thom1702@proton.me";
	const EmailMe = () => {
		window.location.href = `mailto:${email}?subject=Offre de stage/Emplois`;
	};

	return (
		<button
			className=" text-neutral-100  mr-4 mt-4 block rounded bg-IlluminatingEmerald-normal px-4 py-2 font-semibold transition-all duration-300 hover:scale-110 hover:bg-IlluminatingEmerald-hover  hover:text-white active:scale-90 active:bg-IlluminatingEmerald-pressed lg:mt-0 lg:inline-block"
			onClick={EmailMe}
		>
			{t("btn.contactme")}
		</button>
	);
}
