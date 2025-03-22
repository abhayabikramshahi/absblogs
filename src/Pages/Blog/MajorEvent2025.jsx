import React from 'react';
import { FaRocket, FaMicrochip, FaRobot, FaGlobe, FaChartLine, FaLightbulb } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const MajorEvent2025 = () => {
  const { isDarkMode } = useTheme();

  return (
    <article className={`max-w-4xl mx-auto rounded-xl shadow-lg overflow-hidden ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      {/* Hero Section */}
      <div className={`relative h-96 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-gray-900 to-gray-800' 
          : 'bg-gradient-to-r from-blue-600 to-purple-600'
      }`}>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block ${
              isDarkMode ? 'bg-red-700' : 'bg-red-600'
            }`}>
              Breaking News
            </span>
            <h1 className="text-5xl font-bold mb-4">Major Event Unfolds and Technology Advances in 2025</h1>
            <p className="text-xl">Revolutionary Breakthroughs Reshape the Future of Technology</p>
            <div className="mt-4 text-gray-200">
              <span>Published on March 22, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="prose lg:prose-xl max-w-none">
          <div className={`border-l-4 p-4 mb-8 ${
            isDarkMode 
              ? 'bg-gray-700 border-purple-500' 
              : 'bg-purple-50 border-purple-500'
          }`}>
            <p className={`text-lg ${
              isDarkMode ? 'text-purple-200' : 'text-purple-800'
            }`}>
              A groundbreaking technological breakthrough has emerged, promising to revolutionize multiple industries and reshape our understanding of what's possible in the digital age.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className={`rounded-lg shadow-md p-6 border ${
              isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'
            }`}>
              <div className="flex items-center mb-4">
                <FaRocket className="text-purple-500 text-2xl mr-3" />
                <h3 className={`text-xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Revolutionary Breakthrough</h3>
              </div>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                Scientists have achieved a major milestone in quantum computing, potentially solving complex problems in seconds that would take traditional computers years.
              </p>
            </div>

            <div className={`rounded-lg shadow-md p-6 border ${
              isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'
            }`}>
              <div className="flex items-center mb-4">
                <FaMicrochip className="text-purple-500 text-2xl mr-3" />
                <h3 className={`text-xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Industry Impact</h3>
              </div>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                The breakthrough is expected to transform sectors including healthcare, finance, and artificial intelligence, with immediate applications in drug discovery and climate modeling.
              </p>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-8">
            <div className={`rounded-lg shadow-md p-6 border ${
              isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'
            }`}>
              <div className="flex items-center mb-4">
                <FaRobot className="text-purple-500 text-2xl mr-3" />
                <h2 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Technological Implications</h2>
              </div>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                This breakthrough brings several significant advancements:
              </p>
              <ul className={`list-disc pl-6 space-y-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Unprecedented computing power for complex simulations</li>
                <li>Enhanced artificial intelligence capabilities</li>
                <li>Revolutionary data processing speeds</li>
                <li>Breakthrough in cryptography and security</li>
                <li>New possibilities in material science</li>
              </ul>
            </div>

            <div className={`rounded-lg shadow-md p-6 border ${
              isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'
            }`}>
              <div className="flex items-center mb-4">
                <FaGlobe className="text-purple-500 text-2xl mr-3" />
                <h2 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Global Impact</h2>
              </div>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                The implications extend far beyond technological advancement:
              </p>
              <ul className={`list-disc pl-6 space-y-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Accelerated progress in medical research</li>
                <li>Enhanced climate change modeling</li>
                <li>Revolutionary financial modeling capabilities</li>
                <li>Breakthroughs in renewable energy technology</li>
                <li>Advanced space exploration possibilities</li>
              </ul>
            </div>

            <div className={`rounded-lg shadow-md p-6 border ${
              isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'
            }`}>
              <div className="flex items-center mb-4">
                <FaChartLine className="text-purple-500 text-2xl mr-3" />
                <h2 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Future Prospects</h2>
              </div>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Experts predict several developments in the coming years:
              </p>
              <ul className={`list-disc pl-6 space-y-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Exponential growth in computing capabilities</li>
                <li>Revolutionary changes in data security</li>
                <li>Breakthroughs in personalized medicine</li>
                <li>Advanced climate prediction models</li>
                <li>Transformative changes in AI applications</li>
              </ul>
            </div>
          </div>

          {/* Expert Analysis */}
          <div className={`mt-12 border-l-4 p-6 rounded-lg ${
            isDarkMode ? 'bg-gray-700 border-blue-500' : 'bg-blue-50 border-blue-500'
          }`}>
            <div className="flex items-center mb-4">
              <FaLightbulb className="text-blue-500 text-2xl mr-3" />
              <h2 className={`text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>Expert Analysis</h2>
            </div>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Leading experts in the field have provided their insights on this groundbreaking development:
            </p>
            <div className="space-y-4">
              <blockquote className={`border-l-4 pl-4 italic ${
                isDarkMode ? 'text-gray-300 border-blue-500' : 'text-gray-700 border-blue-500'
              }`}>
                "This breakthrough represents a paradigm shift in our technological capabilities. The implications for scientific research and practical applications are unprecedented."
              </blockquote>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                - Dr. Sarah Chen, Quantum Computing Research Institute
              </p>
              
              <blockquote className={`border-l-4 pl-4 italic ${
                isDarkMode ? 'text-gray-300 border-blue-500' : 'text-gray-700 border-blue-500'
              }`}>
                "We're witnessing the beginning of a new technological era. The potential applications across industries are vast and transformative."
              </blockquote>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                - Prof. Michael Rodriguez, Technology Innovation Center
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MajorEvent2025; 