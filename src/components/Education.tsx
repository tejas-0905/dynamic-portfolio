import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, AlignCenter } from 'lucide-react';
import { motion } from 'framer-motion';

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
        'Web Development',
      ],
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
        'English',
      ],
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'St Joseph Convent School',
      location: 'Nagpur, Maharashtra',
      period: '2020 - 2021',
      grade: 'Percentage: 82.6%',
      description: 'Science stream with Mathematics, Physics, Chemistry, Social Science and Biology.',
      highlights: [
        'Mathematics',
        'Social Science',
        'Physics',
        'Chemistry',
        'English',
      ],
    },
  ];

  const achievements = [
    { value: '8.7', label: 'CGPA in B-TECH' },
    { value: '88%', label: 'HSC Percentage' }
    // { value: 'Finalist', label: 'Smart India Hackathon 2023' },
    
  ];

  return (
    <section id="education" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Academic foundation in computer science and data analytics
          </p>
        </motion.div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.0, delay: index * 0.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07 }}
              className={`rounded-xl p-6 shadow-lg transition-all duration-300 ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-600 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium">{edu.institution}</p>
                </div>
              </div>

              <div className={`text-sm flex flex-col gap-1 mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {edu.period}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {edu.location}
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2 text-green-500" />
                  <span className={`font-medium ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                    {edu.grade}
                  </span>
                </div>
              </div>

              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {edu.description}
              </p>

              <h4 className={`text-xs font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Key Subjects:</h4>
              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((subject) => (
                  <span
                    key={subject}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

       {/* Achievements */}
<motion.div
  className="mt-20"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h3 className={`text-2xl font-semibold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
    Academic Achievements
  </h3>

  {/* Use flex-wrap and justify-center for centered alignment */}
  <div className="flex flex-wrap justify-center gap-6">
    {achievements.map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className={`p-6 w-64 rounded-lg text-center ${
          darkMode ? 'bg-gray-700' : 'bg-white'
        } shadow-lg transition-all`}
      >
        <div className="text-3xl font-bold text-blue-600 mb-2">{item.value}</div>
        <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.label}</div>
      </motion.div>
    ))}
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Education;
