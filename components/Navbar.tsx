import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="px-6 md:px-12 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-primary font-bold text-2xl font-mono border-2 border-primary rounded-lg w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
          G
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a 
                  href={link.href} 
                  className="text-text-light hover:text-primary font-mono text-sm transition-colors"
                >
                  <span className="text-primary text-xs mr-1">0{i + 1}.</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href={PERSONAL_INFO.resumeLink} 
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded text-primary border border-primary font-mono text-sm hover:bg-surface-dark transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white flex flex-col justify-center items-center transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <ul className="space-y-8 text-center">
             {navLinks.map((link, i) => (
              <li key={i}>
                <a 
                  href={link.href} 
                  className="text-text hover:text-primary font-mono text-2xl flex flex-col items-center gap-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-primary text-base">0{i + 1}.</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href={PERSONAL_INFO.resumeLink} 
            className="mt-12 px-8 py-4 rounded text-primary border border-primary font-mono text-lg hover:bg-surface-dark"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;