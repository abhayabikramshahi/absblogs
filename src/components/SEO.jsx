import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'News Portal - Your Trusted Source for Latest News',
  description = 'Get the latest news, breaking stories, and in-depth coverage from around the world. Stay informed with our comprehensive news reporting.',
  keywords = 'news, breaking news, latest news, world news, local news, headlines',
  author = 'Abhaya Bikram Shahi',
  ogImage = '/og-image.jpg',
  canonicalUrl = 'https://absblogs.onrender.com/'
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="News Portal" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="theme-color" content="#000000" />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="generator" content="React" />
    </Helmet>
  );
};

export default SEO; 