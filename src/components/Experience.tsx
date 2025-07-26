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
      technologies: ['Exploratory Data Analysis (EDA)', 'Data Interpretation', 'Handling Missing Data', 'Ethical Reasoning']
    },
    {
      title: 'Data Analytics Project Lead',
       company: 'University Research Lab',
       jobType: 'Onsite Internship',
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
    <motion.section
      id="experience"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Building expertise through hands-on experience in data analytics and business intelligence
          </p>
        </div>

        {/* Slider Container */}
        <motion.div
          className="overflow-x-auto scrollbar-hide"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="flex gap-6 px-2 md:px-6"
            drag="x"
            dragConstraints={{ left: -300, right: 0 }}
            dragElastic={0.2}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`min-w-[300px] md:min-w-[400px] lg:min-w-[500px] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'
                }`}
                whileHover={{ scale: 1.03 }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-blue-600 font-medium text-lg">{exp.company}</p>
                </div>

                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  <div className="flex items-center mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{exp.jobType}</span>
                  </div>
                </div>

                <ul className={`text-sm mb-4 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
