import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { getURLFormReact, useTranslations } from "../../i18n/utils";

function DownloadButton() {
	const lang = getURLFormReact();
	const t = useTranslations(lang);

	const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

	useEffect(() => {
		const getDownloadUrl = async () => {
			try {
				const response = await fetch("/api/file", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ lang })
				});

				const data = await response.json();
				if (data.fileUrl) {
					setDownloadUrl(data.fileUrl);
				} else {
					console.error("No download URL found.");
				}
			} catch (error) {
				console.error("Error fetching download URL:", error);
			}
		};

		getDownloadUrl();
	}, [lang]);

	const handleDownload = () => {
		if (!downloadUrl) {
			console.error("No download URL available");
			return;
		}

		const link = document.createElement("a");
		link.href = downloadUrl;
		link.setAttribute("download", lang === "en" ? "cv-EN.pdf" : "cv-FR.pdf");
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<button
			className="bg-illuminating-emerald-normal hover:bg-illuminating-emerald-hover active:bg-illuminating-emerald-pressed mt-4 mr-4 inline-flex items-center rounded px-6 py-2 font-sans font-semibold text-white transition-all duration-300 hover:scale-110 active:scale-90 lg:mt-0"
			onClick={handleDownload}
			aria-label={t("btn.downloadcv")}
		>
			{t("btn.downloadcv")}
			<FiDownload className="ml-2 size-4" />
		</button>
	);
}

export default DownloadButton;
