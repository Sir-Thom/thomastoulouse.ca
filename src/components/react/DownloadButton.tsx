import firebase from "firebase/compat/app";
import { useState, useEffect } from "react";
import "firebase/compat/firestore";
import "firebase/compat/storage";

interface FirebaseProps {
  VITE_FIREBASE_API_KEY: string;
  VITE_FIREBASE_AUTH_DOMAIN: string;
  VITE_FIREBASE_PROJECT_ID: string;
  VITE_FIREBASE_STORAGE_BUCKET: string;
  VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  VITE_FIREBASE_APP_ID: string;
  VITE_FIREBASE_MEASUREMENT_ID: string;
}

function DownloadButton(props: FirebaseProps) {
  const {
    VITE_FIREBASE_API_KEY,
    VITE_FIREBASE_AUTH_DOMAIN,
    VITE_FIREBASE_PROJECT_ID,
    VITE_FIREBASE_STORAGE_BUCKET,
    VITE_FIREBASE_MESSAGING_SENDER_ID,
    VITE_FIREBASE_APP_ID,
    VITE_FIREBASE_MEASUREMENT_ID,
  } = props;

  useEffect(() => {
    const firebaseConfig = {
      apiKey: VITE_FIREBASE_API_KEY,
      authDomain: VITE_FIREBASE_AUTH_DOMAIN,
      projectId: VITE_FIREBASE_PROJECT_ID,
      storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: VITE_FIREBASE_APP_ID,
      measurementId: VITE_FIREBASE_MEASUREMENT_ID,
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  const getDownloadUrl = async () => {
    const storage = firebase.storage().ref();
    const cvUrl = await storage.child("cv.docx").getDownloadURL();

    setDownloadUrl(cvUrl);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = downloadUrl!;
    link.setAttribute("download", "cv.docx");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    getDownloadUrl();
  }, []);

  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  return (
    <button
      className=" block  bg-IlluminatingEmerald-normal active:bg-IlluminatingEmerald-pressed hover:bg-IlluminatingEmerald-hover text-neutral-100 hover:text-white py-2 px-4 rounded font-semibold transition-all hover:scale-110 active:scale-90  duration-300 mt-4 lg:inline-block lg:mt-0 mr-4"
      onClick={handleDownload}
    >
      Télécharger mon CV
    </button>
  );
}

export default DownloadButton;
