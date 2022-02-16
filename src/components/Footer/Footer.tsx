import React from 'react';
import './Footer.scss';
import { ReactComponent as Logo } from 'logo.svg';
import { ReactComponent as FacebookIcon }  from './images/icon-facebook.svg';
import { ReactComponent as TwitterIcon }  from './images/icon-twitter.svg';
import { ReactComponent as PinterestIcon }  from './images/icon-pinterest.svg';
import { ReactComponent as InstagramIcon }  from './images/icon-instagram.svg';

// TODO: mock todo
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <Logo id="logo"/> 

        <div className="footer__links">
          <h3 className="footer__link-title">features</h3>
          <a href="#" className="footer__link">Link Shortening</a>
          <a href="#" className="footer__link">Branded Links</a>
          <a href="#" className="footer__link">Analytics</a>
        </div>

        <div className="footer__links">
          <h3 className="footer__link-title">resources</h3>
          <a href="#" className="footer__link">Blog</a>
          <a href="#" className="footer__link">Developers</a>
          <a href="#" className="footer__link">Support</a>
        </div>

        <div className="footer__links">
          <h3 className="footer__link-title">company</h3>
          <a href="#" className="footer__link">About</a>
          <a href="#" className="footer__link">Our Team</a>
          <a href="#" className="footer__link">Careers</a>
          <a href="#" className="footer__link">Contact</a>
        </div>

        <div className="footer__social-links">
          <a href="#"><FacebookIcon className="footer__social-icon"/></a>
          <a href="#"> <TwitterIcon className="footer__social-icon"/> </a>
          <a href="#"> <PinterestIcon className="footer__social-icon"/> </a>
          <a href="#"> <InstagramIcon className="footer__social-icon"/> </a>
        </div>
      </div>
    </div>
  )
};
