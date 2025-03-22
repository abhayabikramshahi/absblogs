import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

import MajorUnfolds from "../upload/major-unfolds.jpg";
import TechAdv from "../upload/tech-power.jpg";
import Surge from "../upload/face-surge.jpg";

function HomePage() {
  const { isDarkMode } = useTheme();
  const latestNews = [
    {
      title: "Breaking News: Major Event Unfolds and Technology Advances in 2025",
      description: "Revolutionary breakthroughs reshape the future of technology with unprecedented quantum computing achievements.",
      image: MajorUnfolds,
      link: "/blog/major-event-2025",
      date: "March 22, 2025"
    },
    {
      title: "Technology Advances in 2025",
      description: "The latest developments in technology are transforming how we live, work, and interact with the world around us.",
      image: TechAdv,
      link: "/blog/technology-advances-2025",
      date: "March 17, 2025"
    },
    {
      title: "Nepal Faces Surge in Cyber Attacks",
      description: "Cybersecurity experts warn of increasing cyber threats targeting Nepal's banking and government sectors.",
      image: Surge,
      link: "/blog/nepal-faces-surge-in-cyber-attacks",
      date: "March 20, 2025"
    }
  ];

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className={`relative py-20 ${
        isDarkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-indigo-600 to-purple-600'
      } text-white`}>
        <div className="container mx-auto px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Breaking News</h1>
          <p className="text-lg mb-6">Stay updated with the latest headlines from around the world.</p>
          <Link
            to="/category"
            className={`py-3 px-6 rounded-full font-semibold transition duration-300 ${
              isDarkMode 
                ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400' 
                : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
            }`}
          >
            Explore More
          </Link>
        </div>
      </section>

      {/* Top Headlines Section */}
      <section className="container mx-auto px-8 py-16">
        <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Top Headlines
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((news, index) => (
            <div key={index} className={`shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover transition-transform hover:scale-105" />
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{news.title}</h3>
                <p className={`text-sm mb-2 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>{news.date}</p>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{news.description}</p>
                <Link
                  to={news.link}
                  className={`mt-4 inline-block font-semibold ${
                    isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                  }`}
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
