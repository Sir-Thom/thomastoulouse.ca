import { useState } from "react";
import { FaBars } from "react-icons/fa";
import DownloadButton from "./DownloadButton";
import ThemeToggle from "./ToggleTheme";
import ContactMe from "./ContactMe";
import "../../global.css";

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
    VITE_FIREBASE_MEASUREMENT_ID,
  } = props;

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="z-30 font-futura-pt fixed top-0 flex w-full flex-wrap items-center justify-between bg-LapisLazuli-400 py-2 text-white lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <a
            href="/"
            className="transition-all hover:scale-110 active:scale-90 duration-300 text-xl font-bold hover:underline-gradiant justify-center font-futura-pt text-center dark:text-white"
          >
            Thomas Toulouse
          </a>
          <div className="ml-auto lg:hidden">
            <ThemeToggle />
          </div>
          <button
            className="ml-6 lg:hidden"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <FaBars className="w-6 h-6" />
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto`}
          >
            <div className="lg:flex-grow">
              <a
                href="#apropos"
                className="transition-all hover:scale-110 active:scale-90 duration-300 block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:underline-gradiant mr-4"
              >
                À propos de moi
              </a>
              <a
                href="#skillSection"
                className="transition-all hover:scale-110 active:scale-90 duration-300 block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:underline-gradiant mr-4"
              >
                Talents
              </a>
              <a
                href="#experienceSection"
                className="transition-all hover:scale-110 active:scale-90 duration-300 block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:underline-gradiant mr-4"
              >
                Expériences
              </a>
              <a
                href="#educationSection"
                className="transition-all hover:scale-110 active:scale-90 duration-300 block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:underline-gradiant mr-4"
              >
                Éducation
              </a>
              <a
                href="#projectSection"
                className="transition-all hover:scale-110 active:scale-90 duration-300 block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:underline-gradiant mr-4"
              >
                Projets
              </a>
              <DownloadButton
                VITE_FIREBASE_API_KEY={VITE_FIREBASE_API_KEY}
                VITE_FIREBASE_APP_ID={VITE_FIREBASE_APP_ID}
                VITE_FIREBASE_AUTH_DOMAIN={VITE_FIREBASE_AUTH_DOMAIN}
                VITE_FIREBASE_MEASUREMENT_ID={VITE_FIREBASE_MEASUREMENT_ID}
                VITE_FIREBASE_MESSAGING_SENDER_ID={
                  VITE_FIREBASE_MESSAGING_SENDER_ID
                }
                VITE_FIREBASE_PROJECT_ID={VITE_FIREBASE_PROJECT_ID}
                VITE_FIREBASE_STORAGE_BUCKET={VITE_FIREBASE_STORAGE_BUCKET}
              />
              <ContactMe />
            </div>
            <div className="hidden md:hidden sm:hidden lg:block">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
