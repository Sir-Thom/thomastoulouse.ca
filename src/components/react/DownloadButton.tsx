import firebase from "firebase/compat/app";
import { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { IFirebaseProps } from "../../interfaces/IInterface";
import { getURLFormReact, useTranslations } from "../../i18n/utils";
import React from "react";

const lang = getURLFormReact();
const t = useTranslations(lang);

function DownloadButton(props: IFirebaseProps) {
	const {
		VITE_FIREBASE_API_KEY,
		VITE_FIREBASE_AUTH_DOMAIN,
		VITE_FIREBASE_PROJECT_ID,
		VITE_FIREBASE_STORAGE_BUCKET,
		VITE_FIREBASE_MESSAGING_SENDER_ID,
		VITE_FIREBASE_APP_ID,
		VITE_FIREBASE_MEASUREMENT_ID
	} = props;

	useEffect(() => {
		const firebaseConfig = {
			apiKey: VITE_FIREBASE_API_KEY,
			authDomain: VITE_FIREBASE_AUTH_DOMAIN,
			projectId: VITE_FIREBASE_PROJECT_ID,
			storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
			messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
			appId: VITE_FIREBASE_APP_ID,
			measurementId: VITE_FIREBASE_MEASUREMENT_ID
		};

		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}

		return () => {
			firebase.app().delete();
		};
	}, []);

	const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

	useEffect(() => {
		const getDownloadUrl = async () => {
			const storage = firebase.storage().ref();
			const cvUrl = await storage.child("cv.docx").getDownloadURL();

			setDownloadUrl(cvUrl);
		};

		getDownloadUrl();
	}, []);

	useEffect(() => {
		if (downloadUrl) {
			const prefetchLink = document.createElement("link");
			prefetchLink.href = downloadUrl;
			prefetchLink.rel = "prefetch";
			document.head.appendChild(prefetchLink);
		}
	}, [downloadUrl]);

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = downloadUrl!;
		link.setAttribute("download", "cv.docx");
		link.style.display = "none";
		document.body.appendChild(link);
		link?.click();
		document.body.removeChild(link);
	};

	return (
		<>
			<button
				className="mr-4 mt-4  flex items-center rounded bg-IlluminatingEmerald-normal px-6 py-2 font-semibold transition-all duration-300 hover:scale-110 hover:bg-IlluminatingEmerald-hover hover:text-white active:scale-90 active:bg-IlluminatingEmerald-pressed lg:mt-0 lg:inline-flex"
				onClick={handleDownload}
			>
				{t("btn.downloadcv")}
				<span className="ml-2">
					<FiDownload />
				</span>
			</button>
		</>
	);
}

export default DownloadButton;
