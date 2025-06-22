import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (B-TECH)',
      institution: 'Shri Ramdeobaba College of University And Management',
      location: 'Nagpur, Maharashtra',
      period: '2023 - 2027',
      grade: 'CGPA: 8.7/10',
      description: 'Specialized in Data Analytics and Database Management. Completed coursework in Statistics, Programming, and Business Intelligence.',
      highlights: [
        'Data Structures and Algorithms',
        'Database Management Systems',
        'Statistical Analysis',
        'Software Engineering',
        'Web Development'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'School Of Scholars',
      location: 'Nagpur, Maharashtra',
      period: '2019 - 2021',
      grade: 'Percentage: 87.2%',
      description: 'Science stream with Mathematics, Physics, Chemistry, and Computer Science.',
      highlights: [
        'Mathematics',
        'Computer Science',
        'Physics',
        'Chemistry',
        'English'
      ]
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'St Joseph Convent School',
      location: 'Nagpur, Maharashtra',
      period: '2020 - 2021',
      grade: 'Percentage: 82.6%',
      description: 'Science stream with Mathematics, Physics, Chemistry, Social Science and  Biology.',
      highlights: [
        'Mathematics',
        'Social Science',
        'Physics',
        'Chemistry',
        'English'
      ]
    }
  ];

  return (
    <section id="education" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Academic foundation in computer science and data analytics
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
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
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start">
                        <div className="p-3 bg-blue-600 rounded-lg mr-4">
                          <GraduationCap className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className={`text-xl font-semibold ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {edu.degree}
                          </h3>
                          <p className="text-blue-600 font-medium text-lg">
                            {edu.institution}
                          </p>
                          <div className={`flex items-center mt-2 ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="text-sm mr-4">{edu.period}</span>
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`flex items-center px-3 py-1 rounded-full ${
                        darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
                      }`}>
                        <Award className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">{edu.grade}</span>
                      </div>
                    </div>

                    <p className={`mb-4 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {edu.description}
                    </p>

                    <div>
                      <h4 className={`text-sm font-semibold mb-3 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Key Subjects:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((subject) => (
                          <span
                            key={subject}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              darkMode 
                                ? 'bg-gray-600 text-gray-300' 
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mt-16">
          <h3 className={`text-2xl font-semibold text-center mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Academic Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-lg text-center ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <div className="text-3xl font-bold text-blue-600 mb-2">8.7</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                CGPA in B-TECH
              </div>
            </div>
            
            <div className={`p-6 rounded-lg text-center ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <div className="text-3xl font-bold text-blue-600 mb-2">88%</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                HSC Percentage
              </div>
            </div>
            
            <div className={`p-6 rounded-lg text-center ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <div className="text-3xl font-bold text-blue-600 mb-2">Top 10%</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Class Ranking
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;