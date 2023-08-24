import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { IENVProps } from "../../interfaces/IEnv";
import { getURLFormReact, useTranslations } from "../../i18n/utils";
//import firebase from "firebase/compat/app";
/*import "firebase/compat/firestore";
import "firebase/compat/storage";*/

function DownloadButton(props: IENVProps) {
	const { DOWNLOAD_URL } = props;

	const lang = getURLFormReact();
	const t = useTranslations(lang);

	/*useEffect(() => {
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
	}, []);*/
	const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

	useEffect(() => {
		const getDownloadUrl = async () => {
			//onst storage = firebase.storage().ref();
			//const cvUrl = await storage.child("cv.docx").getDownloadURL();
			const cvUrl = DOWNLOAD_URL;
			setDownloadUrl(cvUrl);
		};

		getDownloadUrl();
	}, []);

	useEffect(() => {
		const getDownloadUrl = async () => {
			//onst storage = firebase.storage().ref();
			//const cvUrl = await storage.child("cv.docx").getDownloadURL();
			const cvUrl = DOWNLOAD_URL;
			setDownloadUrl(cvUrl);
		};

		getDownloadUrl();
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
		<button
			className="mr-4 mt-4 flex items-center rounded bg-IlluminatingEmerald-normal px-6 py-2 font-semibold transition-all duration-300 hover:scale-110 hover:bg-IlluminatingEmerald-hover hover:text-white active:scale-90 active:bg-IlluminatingEmerald-pressed lg:mt-0 lg:inline-flex"
			onClick={handleDownload}
		>
			{t("btn.downloadcv")}
			<span className="ml-2">
				<FiDownload />
			</span>
		</button>
	);
}

export default DownloadButton;
