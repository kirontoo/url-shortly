import React from 'react';
import './Stats.scss';

import { Card } from 'components/Card';

const cards = [
  {
    title: 'Brand Recognition',
    text: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    imageUrl: 'icon-brand-recognition.svg'
  },
  {
    title: 'Detailed Records',
    text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions',
    imageUrl: 'icon-detailed-records.svg'
  },
  {
    title: 'Fully Customizable',
    text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    imageUrl: 'icon-fully-customizable.svg'
  }
];

export const Stats = () => {
  return (
    <div className="stats">
      <div className="stats__header">
        <h1>Advanced Statistics</h1>
        <p className="subtitle">Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>

      <div className="stats__cards">
        <div className="stats__line"></div>
        { cards.map( card => <Card key={ card.title.split( " " ).join() }title={ card.title } imageUrl={ card.imageUrl } text={ card.text } /> ) }
      </div>
    </div>
  );
};
