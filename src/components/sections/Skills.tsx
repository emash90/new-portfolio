
import React from 'react';
import { Server, Globe, Database, Cloud } from 'lucide-react';
import SkillCard from '../ui/SkillCard';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            icon={<Server className="w-8 h-8 text-blue-400" />}
            title="Backend Development"
            description="Building robust APIs and services"
            technologies={['Node.js', 'Express', 'Fastify', 'NestJS']}
          />
          <SkillCard
            icon={<Globe className="w-8 h-8 text-blue-400" />}
            title="Frontend Development"
            description="Crafting modern, typed web interfaces"
            technologies={['React', 'TypeScript', 'Next.js']}
          />
          <SkillCard
            icon={<Database className="w-8 h-8 text-blue-400" />}
            title="Database Management"
            description="Efficient data storage and retrieval"
            technologies={['MongoDB']}
          />
          <SkillCard
            icon={<Cloud className="w-8 h-8 text-blue-400" />}
            title="Cloud & DevOps"
            description="Certified cloud solutions and containerization"
            technologies={['AWS (Certified)', 'Docker', 'Microservices']}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
