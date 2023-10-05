import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { IENVProps } from "../../interfaces/IEnv";
import { getURLFormReact, useTranslations } from "../../i18n/utils";

function DownloadButton(props: IENVProps) {
	const { DOWNLOAD_URL } = props;

	const lang = getURLFormReact();
	const t = useTranslations(lang);

	const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
	// improve performance by prefetching the download url
	useEffect(() => {
		const getDownloadUrl = async () => {
			if (lang === "en") {
				const cvUrl = DOWNLOAD_URL + "cv-EN.docx";
				setDownloadUrl(cvUrl);
				return;
			} else if (lang === "fr") {
				const cvUrl = DOWNLOAD_URL + "cv-FR.docx";
				setDownloadUrl(cvUrl);
			}
		};

		getDownloadUrl();
	}, []);

	useEffect(() => {
		const getDownloadUrl = async () => {
			if (lang === "en") {
				const cvUrl = DOWNLOAD_URL + "cv-EN.docx";
				setDownloadUrl(cvUrl);
				return;
			} else if (lang === "fr") {
				const cvUrl = DOWNLOAD_URL + "cv-FR.docx";
				setDownloadUrl(cvUrl);
			}
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
