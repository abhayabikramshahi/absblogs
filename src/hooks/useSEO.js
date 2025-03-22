import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSEO = (seoData) => {
  const location = useLocation();
  const baseUrl = 'https://absblogs.onrender.com';
  
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return {
    title: seoData.title || 'News Portal - Your Trusted Source for Latest News',
    description: seoData.description || 'Get the latest news, breaking stories, and in-depth coverage from around the world. Stay informed with our comprehensive news reporting.',
    keywords: seoData.keywords || 'news, breaking news, latest news, world news, local news, headlines',
    author: 'Abhaya Bikram Shahi',
    ogImage: seoData.ogImage || '/og-image.jpg',
    canonicalUrl: `${baseUrl}${location.pathname}`,
    type: seoData.type || 'website'
  };
}; 