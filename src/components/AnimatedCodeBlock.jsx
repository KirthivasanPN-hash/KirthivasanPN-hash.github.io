import React, { useState, useEffect } from 'react';

const AnimatedCodeBlock = ({ code, language = 'javascript', title = '', delay = 0 }) => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < code.length) {
        setDisplayedCode(code.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [currentIndex, code]);

  const syntaxHighlight = (code) => {
    return code
      .replace(/\b(const|let|var|function|return|if|else|for|while|class|import|export|from|default)\b/g, '<span class="text-code-keyword">$1</span>')
      .replace(/\b(console|log|error|warn|info)\b/g, '<span class="text-code-function">$1</span>')
      .replace(/"([^"]*)"/g, '<span class="text-code-string">"$1"</span>')
      .replace(/'([^']*)'/g, '<span class="text-code-string">\'$1\'</span>')
      .replace(/\b(\d+)\b/g, '<span class="text-code-number">$1</span>')
      .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-code-constant">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="text-code-comment">$1</span>')
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-code-comment">$1</span>');
  };

  return (
    <div 
      className="bg-code-surface/80 backdrop-blur-sm rounded-lg border border-code-border overflow-hidden animate-fade-in-up"
      style={{animationDelay: `${delay}s`}}
    >
      {title && (
        <div className="bg-code-bg px-4 py-2 border-b border-code-border">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-code-text text-sm ml-2 font-mono">{title}</span>
          </div>
        </div>
      )}
      <div className="p-4">
        <pre className="text-code-text font-mono text-sm leading-relaxed overflow-x-auto">
          <code 
            dangerouslySetInnerHTML={{ 
              __html: syntaxHighlight(displayedCode) + 
              (currentIndex < code.length ? '<span class="border-r-2 border-code-keyword animate-blink ml-1"></span>' : '')
            }} 
          />
        </pre>
      </div>
    </div>
  );
};

export default AnimatedCodeBlock;
