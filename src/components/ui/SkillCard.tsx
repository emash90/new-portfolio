
import React from 'react';
import { SkillCardProps } from '../../types';

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, technologies }) => (
  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-3">{description}</p>
    {technologies && (
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default SkillCard;
