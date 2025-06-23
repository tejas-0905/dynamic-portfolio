import React from 'react';
import { User, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <motion.section
      id="about"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-6">
                I'm a passionate Data Analyst with a strong foundation in transforming complex datasets into meaningful insights. With expertise in SQL, Python, Tableau, and Power BI, I help organizations make data-driven decisions that drive business growth.
              </p>
              <p className="mb-6">
                My journey in data analytics began during my Bachelor's in Computer Applications, where I discovered the power of data storytelling. Since then, I've worked on various projects ranging from HR analytics to sales dashboards, always focusing on delivering actionable insights.
              </p>
              <p>
                When I'm not analyzing data, you'll find me exploring new visualization techniques, learning about emerging technologies, or contributing to open-source projects. I believe in continuous learning and staying updated with the latest trends in data science and analytics.
              </p>
            </div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 mt-8"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                <div className="text-2xl font-bold text-blue-600 mb-2">5+</div>
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Projects Completed
                </div>
              </div>

              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                <div className="text-2xl font-bold text-blue-600 mb-2">3+</div>
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Certifications
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Values Cards */}
          <motion.div
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {[{
              title: 'Mission',
              icon: <Target className="h-6 w-6 text-white" />,
              color: 'bg-blue-600',
              text: 'To bridge the gap between raw data and strategic business decisions through innovative analytics and compelling visualizations.'
            }, {
              title: 'Approach',
              icon: <User className="h-6 w-6 text-white" />,
              color: 'bg-purple-600',
              text: 'I believe in a collaborative approach, working closely with stakeholders to understand business needs and deliver tailored analytical solutions.'
            }, {
              title: 'Passion',
              icon: <Heart className="h-6 w-6 text-white" />,
              color: 'bg-green-600',
              text: 'Passionate about uncovering hidden patterns in data and translating complex findings into clear, actionable insights for business growth.'
            }].map((item, idx) => (
              <motion.div
                key={idx}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg transform hover:scale-105 transition-transform duration-300`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.0 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 ${item.color} rounded-lg mr-4`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
