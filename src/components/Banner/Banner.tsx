import React from 'react';
import './Banner.scss';
import { Button } from 'components/Button';

const backgroundImg = process.env.PUBLIC_URL + 'images/illustration-working.svg';

export function Banner() {
  return (
    <section className="banner">
      <img className="banner__img" src={ backgroundImg } alt="illustration working"/>
      <div className="banner__text">
        <h1 className="banner__title">More than just shorter links</h1>
        <span className="banner__subtext subtitle">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </span>
        <Button className="btn-pill">Get Started</Button>
      </div>
    </section>
  )
}
