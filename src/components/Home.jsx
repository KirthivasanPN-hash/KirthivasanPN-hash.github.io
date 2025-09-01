import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Software & Data Infrastructure Engineer";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="flex flex-col items-center justify-center text-center w-full relative">
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-code-comment text-sm animate-float">
          {'<!--'} Developer {'-->'}
        </div>
        <div className="absolute top-40 right-20 text-code-keyword text-sm animate-float" style={{animationDelay: '1s'}}>
          function create()
        </div>
        <div className="absolute bottom-40 left-20 text-code-string text-sm animate-float" style={{animationDelay: '2s'}}>
          "Hello World"
        </div>
        <div className="absolute bottom-20 right-10 text-code-number text-sm animate-float" style={{animationDelay: '3s'}}>
          44
        </div>
        <div className="absolute top-1/2 left-1/4 text-code-function text-sm animate-float" style={{animationDelay: '4s'}}>
          build()
        </div>
        <div className="absolute top-1/3 right-4 text-code-variable text-sm animate-float" style={{animationDelay: '5s'}}>
          $developer
        </div>
      </div>

      <div className="max-w-3xl relative z-10">
        <div className="mb-8">
          <p className="text-2xl md:text-3xl mb-2 text-code-comment animate-fade-in-down">
            Hi, I'm 👋
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-code-text animate-fade-in-up">
            Kirthivasan PN
          </h2>
          <div className="h-12 md:h-16 flex items-center justify-center">
            <h3 className="text-3xl md:text-4xl mb-6 text-code-keyword animate-slide-in-left">
              {currentText}
              <span className="border-r-2 border-code-keyword animate-blink ml-1"></span>
            </h3>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-code-text max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
        I build scalable backend systems, reliable data pipelines, and end-to-end ML infrastructure for real-world applications. 
        </p>
        
        <div className="flex gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <a
            href="#experience"
            className="bg-code-keyword text-code-bg px-8 py-3 rounded-lg hover:bg-code-variable transition-all duration-300 text-lg font-mono border border-code-border hover:animate-glow"
          >
            View My Experience
          </a>
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-code-keyword text-code-keyword px-8 py-3 rounded-lg hover:bg-code-keyword hover:text-code-bg transition-all duration-300 text-lg font-mono hover:animate-glow"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home; 