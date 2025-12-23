import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-surface text-center flex flex-col items-center justify-center space-y-4 border-t border-red-100">
      <div className="flex gap-6 mb-2 md:hidden">
         <a href={PERSONAL_INFO.socials.github} className="text-text-light hover:text-primary"><Github size={20} /></a>
         <a href={PERSONAL_INFO.socials.linkedin} className="text-text-light hover:text-primary"><Linkedin size={20} /></a>
         <a href={`mailto:${PERSONAL_INFO.email}`} className="text-text-light hover:text-primary"><Mail size={20} /></a>
      </div>

      <p className="text-text-light font-mono text-xs hover:text-primary transition-colors cursor-default">
        Designed & Built by {PERSONAL_INFO.name}
      </p>
    </footer>
  );
};

export default Footer;