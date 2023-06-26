import React from "react";
import ProjectCard from "./ProjectCard";

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
					Url={project.url}
				/>
			))}
		</div>
	);
};

export default ProjectList;
