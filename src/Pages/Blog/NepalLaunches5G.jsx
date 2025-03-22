import React from 'react';
import ntc from '../../upload/5g.jpeg';
import { FaMobileAlt, FaTachometerAlt, FaGlobe, FaIndustry, FaUsers } from 'react-icons/fa';

const NepalLaunches5G = () => {
  return (
    <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-96">
        <img 
          src={ntc} 
          alt="5G Network Launch" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Nepal Launches New 5G Network</h1>
            <p className="text-xl">Revolutionary High-Speed Internet Service Now Available</p>
            <div className="mt-4 text-gray-200">
              <span>Published on March 17, 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="prose lg:prose-xl max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <p className="text-lg text-blue-800">
              The government of Nepal has announced the official launch of 5G services across major cities, marking a significant milestone in the country's digital transformation journey.
            </p>
          </div>

          {/* Key Points Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaTachometerAlt className="text-blue-500 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Lightning Fast Speeds</h3>
              </div>
              <p className="text-gray-700">
                Experience download speeds up to 10 Gbps, enabling seamless streaming, gaming, and high-quality video calls.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaGlobe className="text-blue-500 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Wide Coverage</h3>
              </div>
              <p className="text-gray-700">
                Initial coverage in major cities including Kathmandu, Pokhara, and Biratnagar, with plans for nationwide expansion.
              </p>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaMobileAlt className="text-blue-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Service Details</h2>
              </div>
              <p className="text-gray-700 mb-4">
                The new 5G network offers several advantages:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Ultra-low latency for real-time applications</li>
                <li>Enhanced network capacity for crowded areas</li>
                <li>Improved reliability and stability</li>
                <li>Support for emerging technologies like IoT and smart cities</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaIndustry className="text-blue-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Economic Impact</h2>
              </div>
              <p className="text-gray-700 mb-4">
                The launch of 5G is expected to drive economic growth through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Creation of new business opportunities</li>
                <li>Enhanced digital infrastructure</li>
                <li>Improved remote work capabilities</li>
                <li>Development of smart city initiatives</li>
                <li>Growth in the tech sector</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaUsers className="text-blue-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Consumer Benefits</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Users can expect significant improvements in their digital experience:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Faster download and upload speeds</li>
                <li>Better video streaming quality</li>
                <li>Reduced network congestion</li>
                <li>Enhanced mobile gaming experience</li>
                <li>Improved video conferencing capabilities</li>
              </ul>
            </div>
          </div>

          {/* Future Plans */}
          <div className="mt-12 bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Future Expansion Plans</h2>
            <p className="text-gray-700 mb-4">
              The government and telecom operators have outlined ambitious plans for the future:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Nationwide coverage by 2025</li>
              <li>Integration with smart city projects</li>
              <li>Development of 5G-enabled healthcare services</li>
              <li>Enhanced support for remote education</li>
              <li>Implementation of IoT solutions across industries</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NepalLaunches5G; 