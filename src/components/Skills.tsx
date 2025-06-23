import React from 'react';
import { Code, Database, Palette, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';


interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'SQL', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'R', level: 75 },
        { name: 'JavaScript', level: 70 }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'Oracle', level: 70 }
      ]
    },
    {
      title: 'Visualization Tools',
      icon: Palette,
      skills: [
        { name: 'Tableau', level: 95 },
        { name: 'Power BI', level: 90 },
        { name: 'Excel', level: 95 },
        { name: 'Matplotlib', level: 80 }
      ]
    },
    {
      title: 'Analytics & ML',
      icon: BarChart3,
      skills: [
        { name: 'Statistical Analysis', level: 85 },
        { name: 'Data Mining', level: 80 },
        { name: 'Machine Learning', level: 75 },
        { name: 'Predictive Modeling', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A comprehensive toolkit for data analysis, visualization, and business intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600 rounded-lg mr-4">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12">
          <h3 className={`text-2xl font-semibold text-center mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Additional Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'Docker', 'AWS', 'Google Analytics', 'SPSS', 'SAS',
              'Jupyter', 'Apache Spark', 'Hadoop', 'ETL', 'Data Warehousing',
              'Business Intelligence', 'Statistical Modeling', 'A/B Testing'
            ].map((tech) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;