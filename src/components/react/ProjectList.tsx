import React from "react";
import ProjectCard from "./ProjectCard"; // Assuming you have a ProjectCard component

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          url={project.url}
        />
      ))}
    </div>
  );
};

export default ProjectList;
