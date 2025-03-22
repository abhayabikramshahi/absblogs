import React from 'react';
import { FaNewspaper, FaUsers, FaGlobe, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

function About() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Hero Section */}
      <div className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              About News Portal
            </h1>
            <p className={`mt-3 max-w-2xl mx-auto text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
              Your trusted source for reliable and up-to-date news coverage
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12 bg-gradient-to-b from-transparent to-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Our Mission
            </h2>
            <p className={`mt-4 max-w-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} lg:mx-auto`}>
              We strive to deliver accurate, unbiased, and timely news to our readers. Our commitment to journalistic integrity and comprehensive coverage ensures that you stay well-informed about the events that matter most.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className={`pt-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
                <div className="flow-root">
                  <div className="-mt-6">
                    <div>
                      <span className={`inline-flex items-center justify-center p-3 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'} rounded-md shadow-lg`}>
                        <FaNewspaper className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight">Quality Journalism</h3>
                    <p className={`mt-5 text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      We maintain high standards in our reporting, ensuring accuracy and reliability in every story we publish.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className={`pt-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
                <div className="flow-root">
                  <div className="-mt-6">
                    <div>
                      <span className={`inline-flex items-center justify-center p-3 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'} rounded-md shadow-lg`}>
                        <FaGlobe className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight">Global Coverage</h3>
                    <p className={`mt-5 text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      From local stories to international events, we bring you comprehensive coverage from around the world.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className={`pt-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
                <div className="flow-root">
                  <div className="-mt-6">
                    <div>
                      <span className={`inline-flex items-center justify-center p-3 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'} rounded-md shadow-lg`}>
                        <FaUsers className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight">Community Focus</h3>
                    <p className={`mt-5 text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      We prioritize stories that matter to our community while maintaining a global perspective.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Contact Us
            </h2>
            <p className={`mt-4 max-w-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} lg:mx-auto`}>
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
            <div className={`flex items-center p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
              <FaEnvelope className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mr-4`} />
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>abhayabikramshahiofficial@gmail.com</p>
              </div>
            </div>

            <div className={`flex items-center p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
              <FaPhone className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mr-4`} />
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>+977 9808370638</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;