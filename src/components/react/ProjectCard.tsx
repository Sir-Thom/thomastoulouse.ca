import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  Url: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  url,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className=" bg-light-400 dark:bg-dark-600 rounded-lg transition-all hover:scale-110 active:scale-90    shadow-LapisLazuli-800 shadow-lg p-6"
    >
      <img
        src={imageUrl}
        alt={title}
        decoding="async"
        loading="lazy"
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>

      <AiOutlineGithub className="inline-block mr-2" />
    </a>
  );
};

export default ProjectCard;
