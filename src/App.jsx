import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-code-bg text-code-text relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-code-bg via-code-surface to-code-bg opacity-90"></div>
        <div className="matrix-rain"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-4 md:pt-14">
          <section id="home" className="min-h-screen flex items-center pt-8">
            <Home />
          </section>
          <section id="about" className="min-h-screen flex items-center">
            <About />
          </section>
          <section id="experience" className="min-h-screen flex items-center mt-16">
            <Experience />
          </section>
          <section id="education" className="min-h-screen flex items-center mt-16">
            <Education />
          </section>
          <section id="projects" className="min-h-screen flex items-center">
            <Projects />
          </section>
          <section id="skills" className="min-h-screen flex items-center">
            <Skills />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App; 