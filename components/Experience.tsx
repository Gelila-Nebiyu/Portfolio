import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary font-mono text-xl">02.</span>
        <h2 className="text-3xl font-bold text-text">Where I've Worked</h2>
        <div className="h-px bg-surface-dark flex-grow max-w-xs"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Tabs */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-surface-dark min-w-max">
          {EXPERIENCE.map((job, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 text-left font-mono text-sm transition-all duration-300 border-l-2 -ml-[2px] hover:bg-surface hover:text-primary ${
                activeTab === idx 
                  ? 'border-primary text-primary bg-surface' 
                  : 'border-transparent text-text-light'
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 min-h-[300px]">
          <div className="animate-fade-in space-y-4">
            <div>
              <h3 className="text-xl font-bold text-text">
                {EXPERIENCE[activeTab].role} <span className="text-primary">@ {EXPERIENCE[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-text-light mt-1 mb-4">{EXPERIENCE[activeTab].period}</p>
            </div>

            <ul className="space-y-4">
              {EXPERIENCE[activeTab].description.map((point, i) => (
                <li key={i} className="flex gap-3 text-text-light">
                  <span className="text-primary mt-1.5 text-xs">▹</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap gap-2">
               {EXPERIENCE[activeTab].skills.map((skill, i) => (
                 <span key={i} className="text-xs font-mono text-primary bg-surface-dark px-2 py-1 rounded">
                   {skill}
                 </span>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;