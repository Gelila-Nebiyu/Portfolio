import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12 justify-center">
          <h2 className="text-3xl font-bold text-text">Technical Skills</h2>
          <div className="h-px bg-primary flex-grow max-w-[100px]"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {SKILLS.map((skill, index) => (
            <div 
              key={index}
              className="px-6 py-3 bg-white rounded-full shadow-sm border border-red-100 text-primary font-medium hover:bg-primary hover:text-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;