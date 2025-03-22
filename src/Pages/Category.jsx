import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

import MajorUnfolds from "../upload/major-unfolds.jpg";

// importing news
import NepalFacesSurgeInCyberAttacks from "./Blog/NepalFacesSurgeInCyberAttacks";
import HowToFileCyberComplaint from "./Blog/HowToFileCyberComplaint";
import NepalLaunches5G from "./Blog/NepalLaunches5G";
import MajorEvent2025 from "./Blog/MajorEvent2025";
import TechnologyAdvances2025 from "./Blog/TechnologyAdvances2025";

// Import the image properly
import Cyberlogo from '../upload/cyber-beuro.png';
import Surge from '../upload/face-surge.jpg';
import ntc from '../upload/5g.jpeg';
import techAdvances from '../upload/tech-power.jpg';

const categories = ["Cyber Tech", "Tech"];  // Categories

const newsData = {
  "Cyber Tech": [
    { 
      title: "Nepal Faces Surge in Cyber Attacks", 
      date: "March 20, 2025", 
      description: "Cybersecurity experts warn of increasing cyber threats targeting Nepal's banking and government sectors.",
      image: Surge,
      link: "/blog/nepal-faces-surge-in-cyber-attacks"
    },
    { 
      title: "How to File a Cyber Complaint in Nepal", 
      date: "March 15, 2025", 
      description: "Learn the step-by-step process to report cybercrime to Nepal's Cyber Bureau.",
      image: Cyberlogo,
      link: "/blog/how-to-file-cyber-complaint"
    }
  ],
  "Tech": [
    { 
      title: "Breaking News: Major Event Unfolds and Technology Advances in 2025", 
      date: "March 22, 2025", 
      description: "Revolutionary breakthroughs reshape the future of technology with unprecedented quantum computing achievements.",
      image: MajorUnfolds,
      link: "/blog/major-event-2025"
    },
    { 
      title: "Technology Advances in 2025", 
      date: "March 17, 2025", 
      description: "The latest developments in technology are transforming how we live, work, and interact with the world around us.",
      image: techAdvances,
      link: "/blog/technology-advances-2025"
    },
    { 
      title: "Nepal Launches New 5G Network", 
      date: "March 17, 2025", 
      description: "The government of Nepal has announced the official launch of 5G services across major cities.",
      image: ntc,
      link: "/blog/nepal-launches-5g"
    }
  ],
  "Science": [], // No news for Science category
  "Health": [],  // No news for Health category
};

function Category() {
  const [activeCategory, setActiveCategory] = useState("Cyber Tech");
  const { isDarkMode } = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 flex space-x-8">
      {/* Left Sidebar with Category Buttons */}
      <div className={`w-1/4 p-4 rounded-lg shadow-md ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
      }`}>
        <h2 className={`text-lg font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-700'
        }`}>Categories</h2>
        <div className="flex flex-col space-y-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-lg font-semibold rounded-lg transition-all text-left
              ${activeCategory === category 
                ? `${isDarkMode ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white'} shadow-md scale-105` 
                : isDarkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* News Articles Grid */}
      <div className="w-3/4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData[activeCategory].length === 0 ? (
          <div className={`col-span-3 text-center text-xl font-bold ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>No News Available</div>
        ) : (
          newsData[activeCategory].map((news, index) => (
            <div key={index} className={`border rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden ${
              isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <img src={news.image} alt={news.title} className="w-full h-52 object-cover transition-transform hover:scale-105"/>
              <div className="p-5">
                <h2 className={`text-xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{news.title}</h2>
                <p className={`text-sm mb-2 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>{news.date}</p>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{news.description}</p>
                <Link to={news.link} className={`mt-4 inline-block font-semibold hover:underline ${
                  isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                }`}>
                  Read More →
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Category;
