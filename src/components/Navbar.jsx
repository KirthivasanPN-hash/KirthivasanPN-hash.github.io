import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'skills'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-code-surface/80 backdrop-blur-md border-b border-code-border shadow-lg md:fixed md:top-0 md:left-0 md:right-0 md:z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-12 md:h-16">
          <a 
            href="#home" 
            className="text-xl font-bold text-code-keyword font-mono hover:text-code-variable transition-colors duration-300 animate-fade-in-left"
          >
            &lt;KP/&gt;
          </a>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center space-x-2 text-code-text hover:text-code-keyword transition-all duration-300 text-sm font-mono group animate-fade-in-down`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.icon}
                </span>
                <span className={`${activeSection === item.id ? 'text-code-keyword' : ''} hover:animate-pulse-slow`}>
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-code-keyword animate-glow"></div>
                )}
              </a>
            ))}
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-code-text hover:text-code-keyword transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-code-surface/95 backdrop-blur-md border-t border-code-border animate-fade-in-down">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center space-x-3 px-3 py-2 text-code-text hover:text-code-keyword hover:bg-code-bg/30 rounded transition-all duration-300 font-mono`}
                onClick={() => setIsOpen(false)}
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <span className="text-lg">{item.icon}</span>
                <span className={activeSection === item.id ? 'text-code-keyword' : ''}>
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 