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
        { name: 'HTML', level: 85 },
        { name: 'CSS', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'Python', level: 70},
        { name: 'JavaScript', level: 70 }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
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
      title: 'Frameworks ',
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
    <motion.section
      id="skills"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <motion.p
            className={`mt-4 text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit for data analysis, visualization, and business intelligence
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600 rounded-lg mr-4">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              
            </motion.div>
          ))}         
        </div>
        <motion.div
  className="mt-16"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h3 className={`text-2xl font-semibold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
    Tools & Frameworks I've Worked With
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {[
      {
        category: 'Development Environments',
        items: ['Eclipse', 'IntelliJ IDEA', 'VS Code']
      },
      {
        category: 'Build & Versioning',
        items: ['Maven', 'GitHub']
      },
      {
        category: 'BI & Visualization',
        items: ['Power BI', 'Tableau', 'Microsoft Excel']
      },
      {
        category: 'UI/UX & Design',
        items: ['Figma']
      }
    ].map((group, i) => (
      <motion.div
        key={group.category}
        className={`p-4 rounded-lg shadow ${
          darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
        }`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h4 className="text-lg font-semibold mb-2">{group.category}</h4>
        <div className="flex flex-wrap gap-2">
          {group.items.map((tool) => (
            <span
              key={tool}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>


        {/* Additional Technologies */}
        <motion.div
          className="mt-12"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-semibold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Additional Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'Docker', 'AWS', 'Google Analytics', 'SPSS', 'SAS',
              'Jupyter', 'Apache Spark', 'Hadoop', 'ETL', 'Data Warehousing',
              'Business Intelligence', 'Statistical Modeling', 'A/B Testing'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
