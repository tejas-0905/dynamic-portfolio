import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certifications = [
    {
      title: 'Data Modeling with Power BI: Advanced DAX Calculations',
      issuer: 'Coursera Project Network',
      date: 'May 2025',
      credentialId: '92UN07HIWKUY',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/92UN07HIWKUY',
      description:
        'Advanced DAX project in Power BI focusing on financial data modeling, complex measures, and time-based analysis using table relationships and calculated columns.',
      skills: ['Power BI', 'Data Modeling', 'DAX (Data Analysis Expressions)', 'Data Visualization']
    },
    {
      title: 'HTML, CSS, and Javascript for Web Developers',
      issuer: 'Johns Hopkins University',
      date: 'September 2024',
      credentialId: 'R26SL9BVY3KJ',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/R26SL9BVY3KJ',
      description:
        'Completed a hands-on course on building responsive and interactive web applications using HTML, CSS, and JavaScript, with a focus on front-end development and cross-platform design.',
      skills: ['HTML', 'CSS', 'Javascript', 'Responsive Web Design', 'Front-End Development']
    },
    {
      title: 'Dynamic Dashboards with Tableau: Advanced Sales Analysis',
      issuer: 'Coursera Project Network',
      date: 'May 2025',
      credentialId: 'U9KJPXPGPLEN',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/U9KJPXPGPLEN',
      description:
        'Hands-on project focused on creating interactive Tableau dashboards using calculated fields and LOD expressions for advanced sales data analysis and visualization.',
      skills: ['Tableau', 'DAX', 'Power Query', 'Data Modeling', 'Excel']
    }
  ];

  return (
    <section id="certifications" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Professional certifications demonstrating expertise in data analytics and business intelligence
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.09 }}
              transition={{ duration: 0.0, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-lg overflow-hidden ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-500`}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Award className="h-8 w-8 animate-bounce" />
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {cert.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 tracking-wide">{cert.title}</h3>
                <p className="text-blue-100 text-sm italic">{cert.issuer}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className={`mb-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {cert.description}
                </p>

                <div className={`mb-4 p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className={`text-xs font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Credential ID
                  </div>
                  <div className={`font-mono text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {cert.credentialId}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Skills Covered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

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
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center relative z-10">
          <div
            className={`inline-flex items-center px-6 py-4 rounded-lg shadow-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <Award
              className={`h-5 w-5 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
            />
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              All certifications are verified and can be validated through the provided links
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
