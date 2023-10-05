/// <reference types="astro/client" />
interface ImportMetaEnv {
	VITE_DOWNLOAD_URL: string;
}
interface ImportMeta {
	readonly env: ImportMetaEnv;
}
