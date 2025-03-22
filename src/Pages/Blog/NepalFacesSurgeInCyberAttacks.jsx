import React from 'react';
import Surge from '../../upload/face-surge.jpg';
import { FaExclamationTriangle, FaShieldAlt, FaChartLine, FaBuilding, FaUserShield } from 'react-icons/fa';

const NepalFacesSurgeInCyberAttacks = () => {
  return (
    <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-96">
        <img 
          src={Surge} 
          alt="Cyber Attack Surge" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Nepal Faces Surge in Cyber Attacks</h1>
            <p className="text-xl">Growing Cybersecurity Threats Target Banking and Government Sectors</p>
            <div className="mt-4 text-gray-200">
              <span>Published on March 20, 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="prose lg:prose-xl max-w-none">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
            <p className="text-lg text-red-800">
              Cybersecurity experts warn of increasing cyber threats targeting Nepal's banking and government sectors, urging immediate action to strengthen digital defenses.
            </p>
          </div>

          {/* Key Points Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaChartLine className="text-red-500 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Rising Attack Rate</h3>
              </div>
              <p className="text-gray-700">
                Recent data shows a 45% increase in cyber attacks compared to the previous year, with financial institutions being the primary targets.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaBuilding className="text-red-500 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Targeted Sectors</h3>
              </div>
              <p className="text-gray-700">
                Banking and government institutions face the highest risk, with sophisticated attacks targeting sensitive data and financial systems.
              </p>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaExclamationTriangle className="text-red-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Recent Incidents</h2>
              </div>
              <p className="text-gray-700 mb-4">
                In recent months, several high-profile organizations in Nepal have fallen victim to cyber attacks, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Major banking institutions reporting unauthorized access attempts</li>
                <li>Government websites experiencing DDoS attacks</li>
                <li>Financial fraud cases increasing by 30%</li>
                <li>Ransomware attacks targeting critical infrastructure</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-red-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Impact and Response</h2>
              </div>
              <p className="text-gray-700 mb-4">
                The surge in cyber attacks has prompted immediate action from various stakeholders:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Government strengthening cybersecurity measures</li>
                <li>Banks implementing enhanced security protocols</li>
                <li>Increased investment in cybersecurity infrastructure</li>
                <li>Public awareness campaigns about digital security</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaUserShield className="text-red-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Future Outlook</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Experts suggest several measures to combat these threats effectively:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Development of a comprehensive national cybersecurity strategy</li>
                <li>Increased investment in cybersecurity infrastructure</li>
                <li>Enhanced collaboration between public and private sectors</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Training programs for cybersecurity professionals</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Stay Protected</h2>
            <p className="text-gray-700 mb-4">
              Learn how to protect yourself and your organization from cyber threats. Visit our guide on how to file cyber complaints and stay updated with the latest security measures.
            </p>
            <a 
              href="/blog/how-to-file-cyber-complaint" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn How to Report Cybercrime →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NepalFacesSurgeInCyberAttacks; 