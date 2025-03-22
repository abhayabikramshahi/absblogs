import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import About from "./Pages/About";
import NepalFacesSurgeInCyberAttacks from "./Pages/Blog/NepalFacesSurgeInCyberAttacks";
import HowToFileCyberComplaint from "./Pages/Blog/HowToFileCyberComplaint";
import NepalLaunches5G from "./Pages/Blog/NepalLaunches5G";
import MajorEvent2025 from "./Pages/Blog/MajorEvent2025";
import TechnologyAdvances2025 from "./Pages/Blog/TechnologyAdvances2025";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

import './App.css';

function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar />
      <div className="container mx-auto p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/nepal-faces-surge-in-cyber-attacks" element={<NepalFacesSurgeInCyberAttacks />} />
          <Route path="/blog/how-to-file-cyber-complaint" element={<HowToFileCyberComplaint />} />
          <Route path="/blog/nepal-launches-5g" element={<NepalLaunches5G />} />
          <Route path="/blog/major-event-2025" element={<MajorEvent2025 />} />
          <Route path="/blog/technology-advances-2025" element={<TechnologyAdvances2025 />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
