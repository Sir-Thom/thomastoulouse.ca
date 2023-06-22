import { useState } from "react";
import { FaBars } from "react-icons/fa";
import DownloadButton from "./DownloadButton";
import ThemeToggle from "./ToggleTheme";
import ContactMe from "./ContactMe";
import LanguagesSelector from "./LanguagesSelector";
import "../../global.css";
import { getLangFromUrl, getURLFormReact, useTranslations } from "../../i18n/utils";
const lang = getURLFormReact();
const t = useTranslations(lang);

interface FirebaseProps {
	VITE_FIREBASE_API_KEY: string;
	VITE_FIREBASE_AUTH_DOMAIN: string;
	VITE_FIREBASE_PROJECT_ID: string;
	VITE_FIREBASE_STORAGE_BUCKET: string;
	VITE_FIREBASE_MESSAGING_SENDER_ID: string;
	VITE_FIREBASE_APP_ID: string;
	VITE_FIREBASE_MEASUREMENT_ID: string;
}

export default function Navbar(props: FirebaseProps) {
	const {
		VITE_FIREBASE_API_KEY,
		VITE_FIREBASE_AUTH_DOMAIN,
		VITE_FIREBASE_PROJECT_ID,
		VITE_FIREBASE_STORAGE_BUCKET,
		VITE_FIREBASE_MESSAGING_SENDER_ID,
		VITE_FIREBASE_APP_ID,
		VITE_FIREBASE_MEASUREMENT_ID
	} = props;

	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<nav className="fixed top-0 z-30 flex w-full flex-wrap items-center justify-between bg-LapisLazuli-400 py-2 font-futura-pt text-white lg:flex-wrap lg:justify-start lg:py-4">
				<div className="flex w-full flex-wrap items-center justify-between px-3">
					<a
						href="/"
						className="hover:underline-gradiant justify-center text-center font-futura-pt text-xl font-bold transition-all duration-300 hover:scale-110 active:scale-90 dark:text-white"
					>
						Thomas Toulouse
					</a>
					<div className="ml-auto lg:hidden">
						<ThemeToggle />
					</div>
					<div className=" lg:hidden">
						<LanguagesSelector />
					</div>

					<button className="ml-6 lg:hidden" onClick={toggleMenu} aria-label="Menu">
						<FaBars className="h-6 w-6" />
					</button>

					<div
						className={`${
							isMenuOpen ? "block" : "hidden"
						} w-full lg:flex lg:w-auto lg:items-center`}
					>
						<div className="h-fit w-fit justify-center lg:flex-grow">
							<a
								href="#apropos"
								className="hover:underline-gradiant mr-4 mt-4 block font-futura-pt font-semibold transition-all duration-300 hover:scale-110 active:scale-90 lg:mt-0 lg:inline-block"
							>
								{t("about.title")}
							</a>
							<a
								href="#skillSection"
								className="hover:underline-gradiant mr-4 mt-4 block font-futura-pt font-semibold transition-all duration-300 hover:scale-110 active:scale-90 lg:mt-0 lg:inline-block"
							>
								{t("skills.title")}
							</a>
							<a
								href="#experienceSection"
								className="hover:underline-gradiant mr-4 mt-4 block font-futura-pt font-semibold transition-all duration-300 hover:scale-110 active:scale-90 lg:mt-0 lg:inline-block"
							>
								{t("experience.title")}
							</a>
							<a
								href="#educationSection"
								className="hover:underline-gradiant mr-4 mt-4 block font-futura-pt font-semibold transition-all duration-300 hover:scale-110 active:scale-90 lg:mt-0 lg:inline-block"
							>
								{t("education.title")}
							</a>
							<a
								href="#projectSection"
								className="hover:underline-gradiant mr-4 mt-4 block font-futura-pt font-semibold transition-all duration-300 hover:scale-110 active:scale-90 lg:mt-0 lg:inline-block"
							>
								{t("project.title")}
							</a>
							<DownloadButton
								VITE_FIREBASE_API_KEY={VITE_FIREBASE_API_KEY}
								VITE_FIREBASE_APP_ID={VITE_FIREBASE_APP_ID}
								VITE_FIREBASE_AUTH_DOMAIN={VITE_FIREBASE_AUTH_DOMAIN}
								VITE_FIREBASE_MEASUREMENT_ID={VITE_FIREBASE_MEASUREMENT_ID}
								VITE_FIREBASE_MESSAGING_SENDER_ID={VITE_FIREBASE_MESSAGING_SENDER_ID}
								VITE_FIREBASE_PROJECT_ID={VITE_FIREBASE_PROJECT_ID}
								VITE_FIREBASE_STORAGE_BUCKET={VITE_FIREBASE_STORAGE_BUCKET}
							/>
							<ContactMe />
						</div>
						<div className="hidden  sm:hidden md:hidden lg:block">
							<ThemeToggle />
						</div>
						<div className="divide-x"> </div>
						<div className="hidden sm:hidden md:hidden lg:block">
							<LanguagesSelector />
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
