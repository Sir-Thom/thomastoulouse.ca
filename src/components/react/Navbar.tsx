import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import firebase from "firebase/compat/app";

// Import additional Firebase services if needed
import "firebase/compat/firestore";
import "firebase/compat/storage";

async function getDownloadUrl() {
  const data = await db(import.meta.env.FIREBASE_API_KEY);
  const i = await db(import.meta.env.VITE_FIREBASE_API_KEY);
  console.log(i);
  console.log(import.meta.env.FIREBASE_API_KEY);
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const cvRef = storageRef.child("cv.docx");
  //const data = await cvRef.getDownloadURL();
}
//dotenv.config();
export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

  useEffect(() => {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    };
    console.log(firebaseConfig);
    console.log(apiKey);
    firebase.initializeApp(firebaseConfig);
    getDownloadUrl();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className=" z-30 font-futura-pt fixed top-0 flex w-full flex-wrap items-center justify-between bg-LapisLazuli-500 py-2 text-white lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <span className=" text-xl font-bold  justify-center font-futura-pt text-center dark:text-white">
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
                className="block font-semibold font-futura-pt mt-4 lg:inline-block lg:mt-0 hover:text-light-100 mr-4"
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

function db(FIREBASE_API_KEY: any) {
  console.log(FIREBASE_API_KEY);
}
