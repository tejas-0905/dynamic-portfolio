import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Data Analytics Virtual Experience Program',
      company: 'Deloitte Australia',
      jobType: 'Remote Internship',
      period: 'May 2025 - June 2025',
      description: [
        'Completed Deloitte’s virtual job simulation focused on data analytics and forensic technology.',
        'Built a professional dashboard in Tableau to present analytical findings.',
        'Utilized Excel to clean, classify, and analyze business data for actionable insights.',
        'Gained experience in identifying data irregularities and supporting decision-making processes.'
      ],
      technologies: ['SQL', 'Data Modelling', 'Tableau', 'Excel', 'Spreadsheets']
    },
    {
      title: 'Strategic Data Analytics Intern',
      company: 'Tata Group',
      jobType: 'Virtual Internship',
      period: 'April 2025 - May 2025',
      description: [
        'Executed AI-powered data analysis and strategic planning for Tata iQ’s Financial Services division.',
        'Conducted EDA using GenAI to assess data quality, detect risk patterns, and inform predictive modeling',
        'Proposed a no-code AI framework for customer delinquency risk using model logic and evaluation metrics.',
        'Designed an AI-driven collections strategy integrating automation, ethical AI principles, and compliance.'
      ],
      technologies: ['Exploratory Data Analysis (EDA)', 'AI Strategy Design', 'Data Interpretation', 'Strategic Thinking', 'Handling Missing Data','Ethical Reasoning']
    }
    // {
    //   title: 'Data Analytics Project Lead',
    //   company: 'University Research Lab',
    //   jobType: 'Onsite Internship',
    //   period: 'Sep 2022 - Dec 2022',
    //   description: [
    //     'Led a team of 4 students in analyzing campus survey data',
    //     'Implemented statistical analysis using R and Python',
    //     'Created comprehensive reports with visualizations and insights',
    //     'Presented findings to university administration for policy decisions'
    //   ],
    //   technologies: ['R', 'Python', 'SPSS', 'Matplotlib', 'Seaborn']
    // }
  ];

  return (
    <motion.section
      id="experience"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Building expertise through hands-on experience in data analytics and business intelligence
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 hidden md:block"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          ></motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col md:flex-row items-start"
                initial={{ y: 30, opacity: 0, scale: 0.95 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white hidden md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  viewport={{ once: true }}
                ></motion.div>

                {/* Card */}
                <motion.div
                  className="md:ml-20 w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <motion.div
                    className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg hover:shadow-2xl transition-all duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.25 }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 font-medium text-lg">{exp.company}</p>
                      </div>
                      <div className={`flex flex-col sm:items-end mt-2 sm:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          <span className="text-sm">{exp.jobType}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Description List */}
                    <motion.ul
                      className={`space-y-2 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                      viewport={{ once: true }}
                    >
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </motion.ul>

                    {/* Technologies */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.35 }}
                      viewport={{ once: true }}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
