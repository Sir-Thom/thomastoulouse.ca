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
