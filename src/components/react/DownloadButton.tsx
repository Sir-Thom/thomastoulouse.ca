import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { getURLFormReact, useTranslations } from "../../i18n/utils";
import { UPLOADTHING_SECRET } from "astro:env/client";

function DownloadButton() {
  const lang = getURLFormReact();
  const t = useTranslations(lang);

  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  useEffect(() => {
    const getDownloadUrl = async () => {
      try {
        // List files using utapi (make sure this is running server-side)
        console.log(import.meta.env.UPLOADTHING_URL);

        // English files
        if (lang === "en") {
          const cvUrl = await fetch("https://api.uploadthing.com/v6/listFiles", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Uploadthing-Api-Key": `${UPLOADTHING_SECRET}`,
            },
            body: JSON.stringify({}),
          });

          const data = await cvUrl.json();
          console.log(data);
          
          if (data.files && data.files.length > 0) {
            setDownloadUrl(`https://utfs.io/f/${data.files[1].key}`);
          } else {
            console.error("No files found for download.");
          }
        } else if (lang === "fr") {
          const cvUrl = await fetch("https://api.uploadthing.com/v6/listFiles", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Uploadthing-Api-Key": `${UPLOADTHING_SECRET}`,
            },
            body: JSON.stringify({}),
          });

          const data = await cvUrl.json();
          console.log(data);
          
          if (data.files && data.files.length > 0) {
            setDownloadUrl(`https://utfs.io/f/${data.files[0].key}`); // Assuming second file for French
          } else {
            console.error("No files found for download.");
          }
        }
      } catch (error) {
        console.error("Error fetching download URL:", error);
      }
    };

    getDownloadUrl();
  }, [lang]);

  useEffect(() => {
    if (downloadUrl) {
      const prefetchLink = document.createElement("link");
      prefetchLink.href = downloadUrl;
      prefetchLink.rel = "prefetch";
      document.head.appendChild(prefetchLink);
    }
  }, [downloadUrl]);

  const handleDownload = () => {
    if (!downloadUrl) {
      return;
    }

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "cv.pdf"); // Adjust filename if needed
    link.style.display = "none";
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
