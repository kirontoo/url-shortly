import React from 'react';

// components
import { Navbar } from 'components/Navbar';
import { Banner } from 'components/Banner';

export const Home = () => {
  return (
    <div className="container">
      <Navbar/>
      <Banner />
    </div>
  )
};
