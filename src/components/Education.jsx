import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Data Science',
      school: 'Indiana University Bloomington',
      period: 'August 2023 - May 2025',
      relevant_coursework: ['Statistics', 'Applied Algorithms', 'Database Concepts', 'Machine Learning in Econ', 'Data Mining', 'Big Data', 'Natural Language Processing', 'Data Visualization', 'Cloud Computing'],
    },
    {
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      school: 'St.Joseph Engineering College',
      period: 'May 2019 - April 2023',
      relevant_coursework: ['Python programming', 'Compiler design', 'Operating Systems', 'Distributed Systems', 'Computer Architecture', 'Software Engineering', ' Artifical Intelligence'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 max-w-4xl mx-auto">
     <h2 className="text-4xl font-bold text-code-text mb-8 animate-fade-in-down">
        <span className="text-code-keyword">## </span>
        Education

      </h2>
      <div className="w-full relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2E4052]/20"></div>
        
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-4 w-4 h-4 bg-[#2E4052] rounded-full -translate-x-1/2"></div>
              
              <div className="bg-white/50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#2E4052]">{edu.degree}</h3>
                    <p className="text-[#2E4052]">{edu.school}</p>
                  </div>
                  <p className="text-[#2E4052] font-medium">{edu.period}</p>
                </div>
                {Array.isArray(edu.relevant_coursework) ? (
                  <div>
                    <h5 className="text-lg font-medium text-[#2E4052] mb-2">Relevant Coursework</h5>
                    <ul className="list-disc pl-4 text-[#2E4052]">
                      {edu.relevant_coursework.map((item, i) => (
                        <li key={i} className="mb-2">{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-[#2E4052]">{edu.relevant_coursework}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education; 