import React from 'react';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';
import Typewriter from './Typewriter';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const roles = [
    'Data Analyst',
    'Business Intelligence Developer',
    'Data Visualization Expert',
    'SQL Developer'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className={`text-4xl md:text-6xl font-bold leading-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Tejas Jiddewar
                </span>
              </h1>

              <div className={`text-xl md:text-2xl ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm a{' '}
                <Typewriter
                  texts={roles}
                  speed={100}
                  deleteSpeed={50}
                  pauseTime={2000}
                  className="text-blue-600 font-semibold"
                />
              </div>

              <p className={`text-lg max-w-2xl ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Passionate about transforming raw data into actionable insights. 
                Experienced in SQL, Python, Tableau, and Power BI with a strong 
                foundation in data analysis and visualization.
              </p>
            </div>

            {/* Location */}
            <div className={`flex items-center space-x-2 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <MapPin className="h-5 w-5" />
              <span>Nagpur, Maharashtra, India</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1f1R86K2OpkaQZ4k2xNduXA3nPLF6-O9Q/view"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center px-6 py-3 rounded-lg border-2 transition-all duration-200 transform hover:scale-105 ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/tejas-0905"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-200 transform hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <Github className="h-6 w-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/tejas-jiddewar"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-200 transform hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <Linkedin className="h-6 w-6" />
              </a>

              <a
                href="mailto:tejasjiddewar955@gmail.com"
                className={`p-3 rounded-full transition-all duration-200 transform hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-center animate-fade-in-right">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/IMG-20250616-WA0044.jpg"
                  alt="Tejas Jiddewar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-white font-bold text-sm">Data</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-xs">SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
