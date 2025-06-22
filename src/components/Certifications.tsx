import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certifications = [
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Google (via Coursera)',
      date: 'December 2023',
      credentialId: '92UN07HIWKUY',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/92UN07HIWKUY',
      description: 'Comprehensive program covering data analysis process, tools, and techniques including spreadsheets, SQL, R programming, and Tableau.',
      skills: ['Data Analysis', 'SQL', 'R Programming', 'Tableau', 'Data Visualization']
    },
    {
      title: 'IBM Data Science Professional Certificate',
      issuer: 'IBM (via Coursera)',
      date: 'November 2023',
      credentialId: 'R26SL9BVY3KJ',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/R26SL9BVY3KJ',
      description: 'Hands-on experience with data science tools and techniques including Python, SQL, machine learning, and data visualization.',
      skills: ['Python', 'Machine Learning', 'Data Science', 'SQL', 'Jupyter Notebooks']
    },
    {
      title: 'Microsoft Power BI Data Analyst Associate',
      issuer: 'Microsoft (via Coursera)',
      date: 'October 2023',
      credentialId: 'U9KJPXPGPLEN',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/U9KJPXPGPLEN',
      description: 'Expertise in designing and building scalable data models, cleaning and transforming data, and enabling advanced analytics.',
      skills: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'Business Intelligence']
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Professional certifications demonstrating expertise in data analytics and business intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Award className="h-8 w-8" />
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {cert.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-blue-100">{cert.issuer}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className={`mb-4 text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {cert.description}
                </p>

                {/* Credential ID */}
                <div className={`mb-4 p-3 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <div className={`text-xs font-medium mb-1 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Credential ID
                  </div>
                  <div className={`font-mono text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {cert.credentialId}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Skills Covered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verify Button */}
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Verify Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className={`inline-flex items-center px-6 py-3 rounded-lg ${
            darkMode ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <Award className={`h-5 w-5 mr-3 ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`} />
            <span className={`${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              All certifications are verified and can be validated through the provided links
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;