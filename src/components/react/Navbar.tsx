import { useState, lazy, Suspense } from "react";
import { FaBars } from "react-icons/fa";
import { useTranslations, getURLFormReact } from "../../i18n/utils";
import "../../global.css";

import ThemeToggle from "./ToggleTheme";
import LanguagesSelector from "./LanguagesSelector";

const lang = getURLFormReact();

export default function Navbar() {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const t = useTranslations(lang);

	const LazyDownloadButton = lazy(() => import("./DownloadButton"));
	const LazyContactMe = lazy(() => import("./ContactMe"));

	return (
		<nav className="bg-lapis-lazuli-400 fixed top-0 z-30 flex w-full flex-wrap items-center justify-between py-2 font-sans text-white lg:flex-wrap lg:justify-start lg:py-4">
			<div className="flex w-full flex-wrap items-center justify-between px-3">
				<a
					rel="prefetch-intent"
					href={`/${lang}/`}
					className="underline-gradient-hover justify-center text-center font-sans text-xl font-bold transition-all duration-300 hover:scale-110 active:scale-90 dark:text-white"
				>
					Thomas Toulouse
				</a>
				<div className="ml-auto lg:hidden">
					<ThemeToggle />
				</div>
				<div className="lg:hidden">
					<LanguagesSelector />
				</div>

				<button className="ml-6 lg:hidden" onClick={toggleMenu} aria-label="Menu">
					<FaBars className="size-6" />
				</button>

				<div
					className={`${isMenuOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto lg:items-center`}
				>
					<div className="h-fit w-fit justify-center lg:grow">
						<a
							href={`#apropos`}
							className="underline-gradient-hover mt-4 mr-4 block font-sans font-semibold transition-all duration-300 hover:scale-110 active:scale-90 lg:mt-0 lg:inline-block"
						>
							{t("about.title")}
						</a>
						<a
							href={`#skillSection`}
							className="underline-gradient-hover mt-4 mr-4 block font-sans font-semibold transition-all duration-300 hover:scale-110 active:scale-90 lg:mt-0 lg:inline-block"
						>
							{t("skills.title")}
						</a>
						<a
							href={`#experienceSection`}
							className="underline-gradient-hover mt-4 mr-4 block font-sans font-semibold transition-all duration-300 hover:scale-110 active:scale-90 lg:mt-0 lg:inline-block"
						>
							{t("experience.title")}
						</a>
						<a
							href={`#educationSection`}
							className="underline-gradient-hover mt-4 mr-4 block font-sans font-semibold transition-all duration-300 hover:scale-110 active:scale-90 lg:mt-0 lg:inline-block"
						>
							{t("education.title")}
						</a>
						<a
							href={`#projectSection`}
							className="underline-gradient-hover mt-4 mr-4 block font-sans font-semibold transition-all duration-300 hover:scale-110 active:scale-90 lg:mt-0 lg:inline-block"
						>
							{t("project.title")}
						</a>
						<Suspense fallback={<div>Loading...</div>}>
							<LazyDownloadButton />
							<LazyContactMe />
						</Suspense>
					</div>
					<div className="hidden lg:block">
						<ThemeToggle />
					</div>
					<div className="divide-x"> </div>
					<div className="hidden lg:block">
						<LanguagesSelector />
					</div>
				</div>
			</div>
		</nav>
	);
}
