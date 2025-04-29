import { getURLFormReact, useTranslations } from "../../i18n/utils";
const lang = getURLFormReact();
const t = useTranslations(lang);
export default function ContactMe() {
	const email = "Sir-Thom1702@proton.me";
	const EmailMe = () => {
		window.location.href = `mailto:${email}?subject=Offre de stage/Emplois`;
	};

	return (
		<>
			<button
				className="bg-illuminating-emerald-normal hover:bg-illuminating-emerald-hover active:bg-illuminating-emerald-pressed mt-4 mr-4 flex items-center rounded px-4 py-2 font-semibold font-sans  transition-all duration-300 hover:scale-110 hover:text-white active:scale-90 lg:mt-0 lg:inline-flex"
				onClick={EmailMe}
			>
				{t("btn.contactme")}
				<div className="ml-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="1em"
						viewBox="0 0 512 512"
						fill="currentColor"
					>
						<path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
					</svg>
				</div>
			</button>
		</>
	);
}
