import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const strengths = [
    { name: 'Full Stack Development', icon: '🌐', color: 'code-keyword' },
    { name: 'Data Analysis & Visualization', icon: '📊', color: 'code-string' },
    { name: 'Machine Learning & AI', icon: '🤖', color: 'code-function' },
    { name: 'Problem Solving', icon: '🧩', color: 'code-variable' },
    { name: 'Team Collaboration', icon: '👥', color: 'code-number' },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-code-text mb-8 animate-fade-in-down">
        <span className="text-code-keyword">{'//'}</span> About Me
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6 animate-slide-in-left">
          <div className="bg-code-surface/50 backdrop-blur-sm rounded-lg p-6 border border-code-border">
            <p className="text-code-text leading-relaxed mb-4">
              I am a passionate <span className="text-code-keyword font-mono">developer</span> with expertise in 
              full-stack development, data science, and machine learning. With a strong foundation in computer science 
              and a keen eye for detail, I strive to create efficient and scalable solutions to complex problems.
            </p>
            <p className="text-code-text leading-relaxed">
              My journey in technology began with a curiosity about how things work, which led me to explore various
              aspects of software development and data analysis. I enjoy learning new technologies and applying them
              to solve real-world problems.
            </p>
          </div>
          
          <div className="bg-code-surface/50 backdrop-blur-sm rounded-lg p-6 border border-code-border">
            <h3 className="text-xl font-semibold text-code-keyword mb-4 font-mono">
              <span className="text-code-comment">{'//'}</span> Key Strengths
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded border border-code-border hover:border-${strength.color} transition-all duration-300 hover:scale-105 animate-fade-in-up`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <span className="text-xl">{strength.icon}</span>
                  <span className="text-code-text font-mono">{strength.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center animate-slide-in-right">
          <div className="relative group">
            <div className="w-80 h-80 rounded-full overflow-hidden bg-code-surface border-4 border-code-border hover:border-code-keyword transition-all duration-500 hover:scale-105 hover:animate-glow">
              <img 
                src="/assets/images/profile.jpg" 
                alt="Kirthivasan PN" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238b949e'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";
                }}
              />
            </div>
            
            {/* Floating Code Elements around the image */}
            <div className="absolute -top-4 -left-4 text-code-comment text-sm animate-float">
              {'<!--'} Developer {'-->'}
            </div>
            <div className="absolute -top-4 -right-4 text-code-keyword text-sm animate-float" style={{animationDelay: '1s'}}>
              function code()
            </div>
            <div className="absolute -bottom-4 -left-4 text-code-string text-sm animate-float" style={{animationDelay: '2s'}}>
              "Passionate"
            </div>
            <div className="absolute -bottom-4 -right-4 text-code-number text-sm animate-float" style={{animationDelay: '3s'}}>
              100%
            </div>
          </div>
        </div>
      </div>
      
      {/* Code Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl animate-fade-in-up" style={{animationDelay: '0.5s'}}>
        <div className="bg-code-surface/50 backdrop-blur-sm rounded-lg p-4 text-center border border-code-border hover:border-code-keyword transition-all duration-300">
          <div className="text-2xl font-bold text-code-keyword">2+</div>
          <div className="text-code-text text-sm">Years Experience</div>
        </div>
        <div className="bg-code-surface/50 backdrop-blur-sm rounded-lg p-4 text-center border border-code-border hover:border-code-string transition-all duration-300">
          <div className="text-2xl font-bold text-code-string">50+</div>
          <div className="text-code-text text-sm">Projects Completed</div>
        </div>
        <div className="bg-code-surface/50 backdrop-blur-sm rounded-lg p-4 text-center border border-code-border hover:border-code-function transition-all duration-300">
          <div className="text-2xl font-bold text-code-function">20+</div>
          <div className="text-code-text text-sm">Technologies</div>
        </div>
        <div className="bg-code-surface/50 backdrop-blur-sm rounded-lg p-4 text-center border border-code-border hover:border-code-variable transition-all duration-300">
          <div className="text-2xl font-bold text-code-variable">∞</div>
          <div className="text-code-text text-sm">Learning</div>
        </div>
      </div>
    </div>
  );
};

export default About;
