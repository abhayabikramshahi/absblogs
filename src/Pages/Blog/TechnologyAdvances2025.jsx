import React from 'react';
import { FaMobileAlt, FaRobot, FaBrain, FaShieldAlt, FaCloud, FaChartBar } from 'react-icons/fa';

const TechnologyAdvances2025 = () => {
  return (
    <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              Technology
            </span>
            <h1 className="text-5xl font-bold mb-4">Technology Advances in 2025</h1>
            <p className="text-xl">The Latest Developments Reshaping Our Digital Future</p>
            <div className="mt-4 text-gray-200">
              <span>Published on March 17, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="prose lg:prose-xl max-w-none">
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-8">
            <p className="text-lg text-indigo-800">
              The year 2025 has brought unprecedented technological innovations that are transforming how we live, work, and interact with the world around us.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaMobileAlt className="text-indigo-500 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Mobile Revolution</h3>
              </div>
              <p className="text-gray-700">
                The latest mobile devices feature foldable screens, advanced AI capabilities, and revolutionary battery technology that lasts for days.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaRobot className="text-indigo-500 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-gray-800">AI Integration</h3>
              </div>
              <p className="text-gray-700">
                Artificial Intelligence has become seamlessly integrated into everyday devices, making our lives more efficient and personalized.
              </p>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaBrain className="text-indigo-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Smart Technology</h2>
              </div>
              <p className="text-gray-700 mb-4">
                The latest developments in smart technology include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Advanced neural interfaces for seamless device control</li>
                <li>Smart homes with predictive maintenance capabilities</li>
                <li>AI-powered personal assistants with emotional intelligence</li>
                <li>Augmented reality glasses with 8K resolution</li>
                <li>Biometric authentication systems with enhanced security</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-indigo-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Cybersecurity</h2>
              </div>
              <p className="text-gray-700 mb-4">
                New security measures protecting our digital world:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Quantum-resistant encryption protocols</li>
                <li>AI-powered threat detection systems</li>
                <li>Biometric security with advanced anti-spoofing</li>
                <li>Decentralized identity management</li>
                <li>Real-time security monitoring and response</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <FaCloud className="text-indigo-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Cloud Computing</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Revolutionary changes in cloud infrastructure:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Edge computing with ultra-low latency</li>
                <li>Serverless architecture with improved scalability</li>
                <li>Green computing initiatives reducing carbon footprint</li>
                <li>Hybrid cloud solutions with seamless integration</li>
                <li>Advanced data analytics and processing capabilities</li>
              </ul>
            </div>
          </div>

          {/* Industry Impact */}
          <div className="mt-12 bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <FaChartBar className="text-green-500 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Industry Impact</h2>
            </div>
            <p className="text-gray-700 mb-4">
              These technological advances are transforming various industries:
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Healthcare</h3>
                <p className="text-gray-700">
                  AI-powered diagnostics and personalized medicine are revolutionizing patient care and treatment outcomes.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Transportation</h3>
                <p className="text-gray-700">
                  Autonomous vehicles and smart traffic management systems are making transportation safer and more efficient.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
                <p className="text-gray-700">
                  Virtual and augmented reality are creating immersive learning experiences that adapt to individual student needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TechnologyAdvances2025; 