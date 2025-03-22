import React from 'react';
import Cyberlogo from '../../upload/cyber-beuro.png';
import { FaFileAlt, FaExclamationTriangle, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const HowToFileCyberComplaint = () => {
  return (
    <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-96">
        <img 
          src={Cyberlogo} 
          alt="Cyber Bureau Logo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">How to File a Cyber Complaint in Nepal</h1>
            <p className="text-xl">A Comprehensive Guide to Reporting Cybercrime</p>
            <div className="mt-4 text-gray-200">
              <span>Published on March 15, 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="prose lg:prose-xl max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <p className="text-lg text-blue-800">
              Learn the step-by-step process to report cybercrime to Nepal's Cyber Bureau and protect yourself from digital threats.
            </p>
          </div>

          {/* Steps Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaFileAlt className="text-blue-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Step 1: Document the Evidence</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Before filing a complaint, gather all relevant evidence including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Screenshots of the incident</li>
                <li>Chat logs or messages</li>
                <li>Email communications</li>
                <li>Transaction records (if financial fraud)</li>
                <li>Any other digital evidence</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaFileAlt className="text-blue-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Step 2: Visit the Cyber Bureau Website</h2>
              </div>
              <p className="text-gray-700">
                Go to the official Nepal Police Cyber Bureau website:
                <a href="https://cyberbureau.nepalpolice.gov.np" 
                   className="text-blue-600 hover:underline ml-1"
                   target="_blank"
                   rel="noopener noreferrer">
                  cyberbureau.nepalpolice.gov.np
                </a>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaFileAlt className="text-blue-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Step 3: Fill Out the Complaint Form</h2>
              </div>
              <p className="text-gray-700 mb-4">
                The complaint form requires the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Personal details (name, contact information)</li>
                <li>Type of cybercrime</li>
                <li>Detailed description of the incident</li>
                <li>Evidence upload</li>
                <li>Date and time of the incident</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaFileAlt className="text-blue-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Step 4: Submit and Follow Up</h2>
              </div>
              <p className="text-gray-700 mb-4">
                After submitting your complaint:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Save your complaint reference number</li>
                <li>Keep all evidence safe</li>
                <li>Follow up regularly through the provided tracking system</li>
              </ul>
            </div>
          </div>

          {/* Important Tips Section */}
          <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <FaExclamationTriangle className="text-yellow-500 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Important Tips</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>File the complaint as soon as possible after the incident</li>
              <li>Provide accurate and detailed information</li>
              <li>Keep all communication records with the Cyber Bureau</li>
              <li>Be patient as investigations may take time</li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-500 text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">Emergency</h3>
                  <p className="text-gray-600">100</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-500 text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">Cyber Bureau Hotline</h3>
                  <p className="text-gray-600">[Insert official number]</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-500 text-xl" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">[Insert official email]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HowToFileCyberComplaint; 