import React from 'react';
import { Code, Database, Palette } from 'lucide-react';
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
        { name: 'Python', level: 70 },
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
  ],
  center: true // add this key
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
        {/* Heading */}
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

        {/* Skill Cards */}
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

        {/* Tools & Frameworks */}
        <motion.div
          className="mt-16 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-semibold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Tools & Frameworks I've Worked With
          </h3>

          <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
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
                category: 'UI/UX & Design',
                items: ['Figma']
              },
              {
                category: 'Visualization Tool',
                items: ['Power BI', 'Tableau', 'Microsoft Excel'],
                center: true
              }
            ].map((group, i) => (
              <motion.div
                key={group.category}
                className={`p-4 rounded-lg shadow-lg ${
                  darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
                } ${group.center ? 'col-span-full flex justify-center' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-2">{group.category}</h4>
                  <div className="flex flex-wrap justify-center gap-2">
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
