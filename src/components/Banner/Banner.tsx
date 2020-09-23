import React from 'react';
import './Banner.scss';

const backgroundImg = process.env.PUBLIC_URL + 'images/illustration-working.svg';

export function Banner() {
  return (
    <div className="banner">
      <div className="banner__text">
        <h1 className="banner__title">More than just shorter links</h1>
        <p className="banner__subtext subtitle">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <button type="button">Get Started</button>
      </div>
      <img className="banner__img" src={ backgroundImg } alt="illustration working"/>
    </div>
  )
}
