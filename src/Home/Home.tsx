import React from 'react';

// components
import { Navbar } from 'components/Navbar';
import { Banner } from 'components/Banner';
import { UrlShortener } from 'components/UrlShortener';
import { Stats } from 'components/Stats';

export const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <div className="gray-background" />
      <UrlShortener /> 
      <Stats />
      { /* <FooterBanner /> */ }
      { /* <Footer /> */ }
    </div>
  )
};
