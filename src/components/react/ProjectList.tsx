import React from "react";
import ProjectCard from "./ProjectCard"; // Assuming you have a ProjectCard component
import { getLangFromUrl, getURLFormReact, useTranslations } from "../../i18n/utils";
const lang = getURLFormReact();
const t = useTranslations(lang);
interface Project {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	url: string;
}

interface ProjectListProps {
	projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
	return (
		<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
			{projects.map((project) => (
				<ProjectCard
					title={project.title}
					key={project.id}
					description={project.description}
					imageUrl={project.imageUrl}
					url={project.url}
				/>
			))}
		</div>
	);
};

export default ProjectList;
