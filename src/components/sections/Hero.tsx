
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="top" className="py-20 bg-gray-800/50">
      <header className="container mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Crafting Digital Experiences Through
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              Modern Technology
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full-stack developer specializing in scalable cloud solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="border border-blue-500 hover:bg-blue-500/10 text-blue-500 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Hero;
