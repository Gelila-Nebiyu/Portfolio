import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-text selection:bg-surface-dark selection:text-primary">
      <Navbar />
      
      <main className="flex flex-col">
        <Hero />
        
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-primary font-mono text-xl">01.</span>
            <h2 className="text-3xl font-bold text-text">About Me</h2>
            <div className="h-px bg-surface-dark flex-grow max-w-xs"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4 text-text-light leading-relaxed">
              <p>
                Hello! My name is Gelila Nebiyu. I am currently a 5th-year Software Engineering student at <span className="text-primary font-medium">Addis Ababa Science and Technology University</span>. My journey into technology is driven by a curiosity to solve local problems using advanced digital tools.
              </p>
              <p>
                I recently completed an intensive AI internship where I worked on <span className="text-primary font-medium">Optical Character Recognition (OCR)</span>, bridging the gap between physical documents and digital intelligence.
              </p>
              <p>Beyond coding, I am an innovator recognized by the <span className="text-primary font-medium">Women Startup Founders Program</span>, where I am developing Alora—a vision for sustainable fashion e-commerce.</p>
              <p>Here are a few technologies I've been working with recently:</p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> Python (AI/ML)</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> JavaScript (Node.js/React)</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> OpenCV & YOLO</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> UI/UX Design</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> C++ / PHP</li>
                <li className="flex items-center gap-2"><span className="text-primary">▹</span> Software Testing</li>
              </ul>
            </div>
            <div className="relative group">
               <div className="w-full h-64 bg-surface-dark rounded-lg absolute translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300 border-2 border-primary"></div>
               <div className="w-full h-64 bg-white rounded-lg relative z-10 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <img src="https://picsum.photos/400/400?grayscale" alt="Gelila Nebiyu" className="object-cover w-full h-full hover:scale-105 transition-all duration-500" />
               </div>
            </div>
          </div>
        </section>

        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>

      <ChatWidget />
    </div>
  );
};

export default App;