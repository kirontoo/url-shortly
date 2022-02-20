import React from 'react';
import './Card.scss';

interface CardProps {
  title: string;
  imageUrl: string;
  text: string;
}

export const Card: React.FC< CardProps > = ( { title, imageUrl, text } ) => {
  let icon = process.env.PUBLIC_URL + 'images/' + imageUrl;
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__icon">
          <img src={ icon } alt={icon} />
        </div>
      </div>
      <h3 className="card__title">{ title }</h3>
      <p className="card__text">{ text }</p>
    </div>
  );
};
