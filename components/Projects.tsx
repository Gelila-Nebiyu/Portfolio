import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto bg-gradient-to-t from-surface to-white">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary font-mono text-xl">03.</span>
        <h2 className="text-3xl font-bold text-text">Featured Projects</h2>
        <div className="h-px bg-red-100 flex-grow max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-xl shadow-md border border-red-50 p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group cursor-default"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-surface-dark rounded-lg text-primary">
                <Folder size={24} />
              </div>
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-text-light hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-text-light hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-text-light text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-red-50">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="text-xs font-mono text-primary bg-surface px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;