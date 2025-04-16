import React from 'react';
import { Code2, Server, Database, Cloud, Layers, Container, Workflow } from 'lucide-react';

const About: React.FC = () => {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href) {
          const targetId = href.replace('#', '');
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      };
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            About Me
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with expertise in building modern web applications.
              I enjoy writing clean, maintainable code and am always looking to upskill my technical abilities.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in cloud technologies as an AWS Certified Cloud Practitioner,
              I specialize in designing and implementing scalable microservices architectures using
              containerization with Docker, message brokers like RabbitMQ, and deploying services
              to cloud environments.
            </p>
            
            <div className="pt-4">
              <a 
                onClick={handleSmoothScroll}
                href="#contact" 
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                Let's collaborate
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
          
          <div className="bg-gray-800/70 rounded-xl p-6 border border-gray-700 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-center">Technical Expertise</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="text-purple-400 mt-1">
                  <Code2 size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Frontend</h4>
                  <p className="text-sm text-gray-400">React, TypeScript</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-purple-400 mt-1">
                  <Server size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Backend</h4>
                  <p className="text-sm text-gray-400">Node.js, Express</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-purple-400 mt-1">
                  <Database size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Database</h4>
                  <p className="text-sm text-gray-400">MongoDB</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-purple-400 mt-1">
                  <Cloud size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Cloud</h4>
                  <p className="text-sm text-gray-400">AWS Certified</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-purple-400 mt-1">
                  <Layers size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Architecture</h4>
                  <p className="text-sm text-gray-400">Microservices</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-purple-400 mt-1">
                  <Container size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">DevOps</h4>
                  <p className="text-sm text-gray-400">Docker, RabbitMQ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;