import React, { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const skillCategories = [
    {
      category: 'Web Development',
      skills: ['MERN Stack', 'RESTful APIs', 'Flask', 'Django'],
      icon: '🌐',
      color: 'code-keyword'
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
      icon: '🗄️',
      color: 'code-string'
    },
    {
      category: 'Libraries',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'XGBoost', 'OpenCV', 'TensorFlow', 'HuggingFace'],
      icon: '📚',
      color: 'code-function'
    },
    {
      category: 'Data Science & ML Algorithms',
      skills: ['Linear Regression','Random Forest', 'Decision Tree', 'k-means clustering', 'SVM', 'Naive Bayes', 'Neural Networks'],
      icon: '🤖',
      color: 'code-variable'
    },
    {
      category: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Kubernetes', 'Kafka', 'dbt', 'Tableau', 'PowerBI'],
      icon: '⚙️',
      color: 'code-number'
    },
    {
      category: 'Cloud Computing',
      skills: ['AWS (EC2, DynamoDB, S3, Lambda, Glue, CloudFormation)', 'Azure', 'GCP'],
      icon: '☁️',
      color: 'code-type'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-code-text mb-8 animate-fade-in-down">
        <span className="text-code-keyword">&lt;</span>
        Skills
        <span className="text-code-keyword">/&gt;</span>
      </h2>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`bg-code-surface/50 backdrop-blur-sm rounded-lg p-6 border border-code-border hover:border-${category.color} transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up`}
            style={{animationDelay: `${index * 0.1}s`}}
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{category.icon}</span>
              <h3 className={`text-lg font-semibold text-${category.color} font-mono`}>
                {category.category}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`px-3 py-1 bg-code-bg/50 text-code-text rounded-full text-sm font-mono border border-code-border hover:border-${category.color} transition-all duration-200 hover:animate-pulse-slow cursor-pointer`}
                  style={{
                    animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {hoveredSkill === index && (
              <div className="mt-4 p-3 bg-code-bg/30 rounded border border-code-border animate-fade-in-up">
                <p className="text-code-comment text-sm">
                  <span className="text-code-keyword">{'//'}</span> {category.skills.length} skills mastered
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-code-comment text-xs animate-float">
          const skills = [];
        </div>
        <div className="absolute top-40 right-20 text-code-keyword text-xs animate-float" style={{animationDelay: '1s'}}>
          function learn()
        </div>
        <div className="absolute bottom-40 left-20 text-code-string text-xs animate-float" style={{animationDelay: '2s'}}>
          "Always learning"
        </div>
        <div className="absolute bottom-20 right-10 text-code-number text-xs animate-float" style={{animationDelay: '3s'}}>
          100%
        </div>
      </div>
    </div>
  );
};

export default Skills; 