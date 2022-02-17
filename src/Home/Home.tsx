import React from 'react';
import './Home.scss';

// components
import { Navbar } from 'components/Navbar';
import { Banner } from 'components/Banner';
import { UrlShortener } from 'components/UrlShortener';
import { Stats } from 'components/Stats';
import { BoostLinks } from 'components/BoostLinks';
import { Footer } from 'components/Footer';

export const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <Banner />
      </main>
      <Footer />
    </>
  )
};
