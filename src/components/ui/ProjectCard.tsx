
import React from 'react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a 
    href={project.githubUrl || '#'} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] hover:bg-gray-750 cursor-pointer"
    >
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 rounded-full text-xs ${
                project.title === 'Our Package Project'
                  ? 'bg-teal-500/20 text-teal-400'
                  : 'bg-blue-500/20 text-blue-400'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;
