import React from "react";
import type { IProjectCardProps } from "../../interfaces/IProjectCard";
import {
	PythonPlain,
	PhpPlain,
	CsharpOriginal,
	RustOriginal,
	JavascriptOriginal,
	TypescriptOriginal
} from "devicons-react";

const ProjectCard: React.FC<IProjectCardProps> = ({
	title,
	description,
	imageUrl,
	imageUrlSmall,
	Url,
	languages
}) => {
	const languageIcons: Record<string, any> = {
		Python: <PythonPlain />,
		JavaScript: <JavascriptOriginal size={20} />,
		TypeScript: <TypescriptOriginal size={20} />,
		CSharp: <CsharpOriginal size={24} />,
		PHP: <PhpPlain size={20} />,
		Rust: <RustOriginal size={24} />
	};
	const showGithubIcon = title === "Will it end";
	const languageIconsList =
		languages && Array.isArray(languages)
			? languages.map((language, index) => (
					<span key={index} className="m-2 text-white" title={language}>
						{languageIcons[language]}
					</span>
				))
			: null;
	return (
		<a
			href={Url}
			target="_blank"
			rel="noopener noreferrer"
			className="bg-light-400 shadow-lapis-lazuli-800 hover:bg-light-500 dark:bg-dark-600 hover:dark:bg-dark-700 mb-2 scale-100 rounded-lg p-6 shadow-lg transition-all active:scale-90"
		>
			<img
				src={imageUrl}
				srcSet={`${imageUrlSmall} 480w, ${imageUrl} 800w`}
				sizes="(max-width: 480px) 480px, 800px"
				alt={title}
				decoding="async"
				loading="lazy"
				className="mb-4 h-fit w-fit rounded-md object-cover"
			/>
			<h2 className="mb-2 text-xl font-semibold">{title}</h2>
			<p className="text-gray-200">{description}</p>

			<div className="rounded-mdl absolute right-0 bottom-0 m-2 p-2 text-white">
				<div className="text-xxl flex font-semibold font-sans  text-white">{languageIconsList}</div>
			</div>
			{!showGithubIcon && (
				<svg
					className="mt-2 mr-2 inline-block h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					height="1em"
					viewBox="0 0 496 512"
					fill="currentColor"
				>
					<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
				</svg>
			)}
		</a>
	);
};

export default ProjectCard;
