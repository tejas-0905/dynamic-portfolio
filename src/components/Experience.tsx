import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Data Analyst Intern',
      company: 'TechCorp Solutions',
      location: 'Pune, Maharashtra',
      period: 'Jun 2023 - Aug 2023',
      description: [
        'Analyzed large datasets using SQL and Python to identify trends and patterns',
        'Created interactive dashboards in Tableau for executive reporting',
        'Collaborated with cross-functional teams to define KPIs and metrics',
        'Improved data processing efficiency by 30% through query optimization'
      ],
      technologies: ['SQL', 'Python', 'Tableau', 'Excel', 'MySQL']
    },
    {
      title: 'Business Intelligence Trainee',
      company: 'DataViz Analytics',
      location: 'Mumbai, Maharashtra',
      period: 'Jan 2023 - May 2023',
      description: [
        'Developed Power BI reports and dashboards for sales and marketing teams',
        'Performed data cleaning and transformation using Power Query',
        'Assisted in creating data models and establishing relationships',
        'Presented findings to stakeholders and provided actionable recommendations'
      ],
      technologies: ['Power BI', 'DAX', 'Power Query', 'SQL Server', 'Excel']
    },
    {
      title: 'Data Analytics Project Lead',
      company: 'University Research Lab',
      location: 'Pune, Maharashtra',
      period: 'Sep 2022 - Dec 2022',
      description: [
        'Led a team of 4 students in analyzing campus survey data',
        'Implemented statistical analysis using R and Python',
        'Created comprehensive reports with visualizations and insights',
        'Presented findings to university administration for policy decisions'
      ],
      technologies: ['R', 'Python', 'SPSS', 'Matplotlib', 'Seaborn']
    }
  ];

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Building expertise through hands-on experience in data analytics and business intelligence
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white hidden md:block"></div>

                {/* Content */}
                <div className="md:ml-20 w-full">
                  <div className={`p-6 rounded-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  } shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-semibold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 font-medium text-lg">
                          {exp.company}
                        </p>
                      </div>
                      
                      <div className={`flex flex-col sm:items-end mt-2 sm:mt-0 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className={`space-y-2 mb-4 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            darkMode 
                              ? 'bg-gray-600 text-gray-300' 
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;