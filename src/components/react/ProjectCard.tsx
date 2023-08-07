import React from "react";
import { IProjectCardProps } from "../../interfaces/IProjectCard";

const ProjectCard: React.FC<IProjectCardProps> = ({
	title,
	description,
	imageUrl,
	imageUrlSmall,
	Url
}) => {
	return (
		<a
			href={Url}
			target="_blank"
			rel="noopener noreferrer"
			className="mb-2 scale-100 rounded-lg bg-light-400 p-6 shadow-lg shadow-LapisLazuli-800 transition-all active:scale-90 dark:bg-dark-600"
		>
			<img
				src={imageUrlSmall}
				srcSet={`${imageUrlSmall} 480w, ${imageUrl} 800w`}
				sizes="(max-width: 480px) 480px, 800px"
				alt={title}
				decoding="async"
				loading="lazy"
				className="mb-4 h-fit w-fit rounded-md object-cover"
			/>
			<h2 className="mb-2 text-xl font-semibold">{title}</h2>
			<p className="text-gray-600">{description}</p>

			<svg
				className="mr-2 mt-2 inline-block h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				height="1em"
				viewBox="0 0 496 512"
				fill="currentColor"
			>
				{/* SVG path data */}
			</svg>
		</a>
	);
};

export default ProjectCard;
