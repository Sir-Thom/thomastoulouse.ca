import React from "react";
import ProjectCard from "./ProjectCard";
import { IProjectListProps } from "../../interfaces/IProjectCard";

const ProjectList: React.FC<IProjectListProps> = ({ projects }) => {
	return (
		<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
			{projects.map((project) => (
				<ProjectCard
					title={project.title}
					key={project.id}
					description={project.description}
					imageUrl={project.imageUrl}
					imageUrlSmall={project.imageUrlSmall}
					Url={project.url}
					languages={project.languages}
				/>
			))}
		</div>
	);
};
export default React.memo(ProjectList);
