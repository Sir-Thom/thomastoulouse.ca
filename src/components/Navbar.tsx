import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className=" font-futura-pt fixed flex w-full flex-wrap items-center justify-between bg-LapisLazuli-500 py-2 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <span className=" text-xl font-bold  justify-center font-futura-pt text-center dark:text-neutral-200">
            Thomas Toulouse
          </span>
          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <FaBars className="w-6 h-6" />
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto`}
          >
            <div className="lg:flex-grow">
              {/* Add your menu items here */}
              <a
                href="#apropos"
                className="block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:text-neutral-100 mr-4"
              >
                À propos de moi
              </a>
              <a
                href="#"
                className="block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:text-neutral-100 mr-4"
              >
                Talents
              </a>
              <a
                href="#"
                className="block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:text-neutral-100 mr-4"
              >
                Expériences
              </a>
              <a
                href="#"
                className="block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:text-neutral-100 mr-4"
              >
                Éducation
              </a>
              <a
                href="#"
                className="block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:text-neutral-100 mr-4"
              >
                Projets
              </a>
              <a
                href="#"
                className="block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:text-neutral-100 mr-4"
              >
                Projets
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
