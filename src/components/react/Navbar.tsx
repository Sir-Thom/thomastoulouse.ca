import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { initializeApp } from "firebase/app";
import dotenv from "dotenv";
import * as functions from "firebase/functions";
import { getAnalytics } from "firebase/analytics";
//dotenv.config();
export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  /*const [cvDownloadUrl, setCvDownloadUrl] = useState(null);
  useEffect(() => {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
      measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const storage = app.getStorage(app);
    const cvRef = ref(storage, "cv.docx");

    storage
      .getDownloadURL(cvRef)
      .then((url) => {
        setCvDownloadUrl(url);
      })
      .catch((error) => {
        console.log("Error getting CV download URL: ", error);
      });
  }, []);*/
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className=" z-30 font-futura-pt fixed top-0 flex w-full flex-wrap items-center justify-between bg-LapisLazuli-500 py-2 text-neutral-200 lg:flex-wrap lg:justify-start lg:py-4"
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
                href="#skillSection"
                className="block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:text-neutral-100 mr-4"
              >
                Talents
              </a>
              <a
                href="#experienceSection"
                className="block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:text-neutral-100 mr-4"
              >
                Expériences
              </a>
              <a
                href="#educationSection"
                className="block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:text-neutral-100 mr-4"
              >
                Éducation
              </a>
              <a
                href="#projectSection"
                className="block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:text-neutral-100 mr-4"
              >
                Projets
              </a>
              <a
                id="cv-link"
                href={"#"}
                className="block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:text-neutral-100 mr-4"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
