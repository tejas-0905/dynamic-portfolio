import React from 'react';
import { ExternalLink, Github, BarChart3, Users, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
  title: 'OLA Trip Analysis Dashboard',
  description:
    'An interactive Power BI dashboard analyzing OLA cab trips including ride counts, distance metrics, customer behavior, and time-based trends for optimized operational insights.',
  technologies: ['Power BI', 'DAX', 'Excel', 'Data Cleaning'],
  features: [
    'Trip duration and distance metrics',
    'Ride distribution by category and payment method',
    'Hourly and daily usage trends',
    'Interactive slicers and KPIs for decision-making'
  ],
  liveUrl: '#',
  githubUrl: 'https://github.com/tejas-0905/OLA-trip-Analysis--Power-Bi',
  icon: BarChart3,
  category: 'Business Intelligence'
},
    {
      title: 'HR Analytics Dashboard',
      description:
        'Interactive Tableau dashboard analyzing employee performance, retention rates, and workforce demographics for strategic HR decisions.',
      technologies: ['Tableau', 'SQL', 'Excel', 'Python'],
      features: [
        'Employee performance metrics',
        'Retention rate analysis',
        'Demographic insights',
        'Predictive attrition modeling',
      ],
      liveUrl: '#',
      githubUrl:
        'https://github.com/tejas-0905/hr-analytics-dashboard-using-Tableau',
      icon: Users,
      category: 'Data Analytics',
    },
    {
      title: 'Amazon Sales Dashboard',
      description:
        'Power BI dashboard providing comprehensive analysis of Amazon sales data with interactive visualizations and KPI tracking.',
      technologies: ['Power BI', 'DAX', 'SQL', 'Excel'],
      features: [
        'Sales performance tracking',
        'Product category analysis',
        'Geographic sales distribution',
        'Trend analysis and forecasting',
      ],
      liveUrl: '#',
      githubUrl:
        'https://github.com/tejas-0905/Power-Bi-Amazon-Sales-Dashboard',
      icon: ShoppingCart,
      category: 'Business Intelligence',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Showcasing my expertise in data analytics, visualization, and application development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
  key={index}
  initial={{ opacity: 0, y: 30, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  whileHover={{ scale: 1.08 }}
  transition={{ duration: 0.0, delay: index * 0.0 }}
  viewport={{ once: true, amount: 0.2 }}
  className={`rounded-lg overflow-hidden ${
    darkMode ? 'bg-gray-800' : 'bg-white'
  } shadow-xl cursor-pointer transition-transform duration-300`}
>

              {/* Icon Section */}
              <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <project.icon className="h-16 w-16 text-white" />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4
                    className={`text-sm font-semibold mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Key Features:
                  </h4>
                  <ul
                    className={`text-sm space-y-1 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 text-sm ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/tejas-0905"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-lg border-2 transition-all duration-200 transform hover:scale-105 ${
              darkMode
                ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            <Github className="h-5 w-5 mr-2" />
            View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
