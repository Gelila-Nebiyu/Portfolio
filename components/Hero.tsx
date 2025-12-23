import React from 'react';
import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-surface to-white">
      <div className="max-w-4xl w-full space-y-6">
        <p className="text-primary font-mono text-lg animate-fade-in-down font-medium" style={{animationDelay: '100ms'}}>
          Hi, my name is
        </p>
        
        <h1 className="text-5xl md:text-7xl font-bold text-text tracking-tight animate-fade-in-up" style={{animationDelay: '200ms'}}>
          {PERSONAL_INFO.name}.
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-bold text-text-light/60 animate-fade-in-up" style={{animationDelay: '300ms'}}>
          I build things for the web.
        </h2>
        
        <p className="max-w-xl text-lg text-text-light mt-6 leading-relaxed animate-fade-in-up" style={{animationDelay: '400ms'}}>
          {PERSONAL_INFO.about}
        </p>

        <div className="flex flex-wrap gap-4 pt-8 animate-fade-in-up" style={{animationDelay: '500ms'}}>
          <a 
            href="#projects"
            className="px-6 py-4 rounded-lg bg-primary text-white font-mono hover:bg-primary-hover transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-red-200"
          >
            Check out my work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex items-center gap-4 ml-4">
             <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="text-text-light hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
               <Github size={24} />
             </a>
             <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="text-text-light hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
               <Linkedin size={24} />
             </a>
             <a href={PERSONAL_INFO.resumeLink} target="_blank" rel="noreferrer" className="text-text-light hover:text-primary transition-colors hover:-translate-y-1 transform duration-300" title="Resume">
               <FileText size={24} />
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;