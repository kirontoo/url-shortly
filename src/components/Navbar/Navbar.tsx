import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import  logo from 'logo.svg';

export function Navbar() {
  let [ navbarToggled, setNavbarToggled ] = useState< boolean >( true );

  useEffect( () => {
    // check if user is viewing on a mobile device
    if ( window.screen.width <= 800 ) {
      setNavbarToggled( false );
    }

  }, [] );

  let toggleNavbar = ( event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault(); 

    setNavbarToggled( ( navbarToggled ) => !navbarToggled );
  };

  return (
    <nav className="navbar">

      <div className="navbar__logo-container">
        <img src={ logo } alt="" className="navbar__logo"/>

        <a onClick={ toggleNavbar } href="#" className="navbar__media-toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
      </div>

      <div style={{ display: navbarToggled ? 'flex' : 'none' }}  className="navbar__links-container">
        <div className="navbar__header">
          <ul className="navbar__links">
            <li className="navbar__link"><a href="#">Features</a></li>
            <li className="navbar__link"><a href="#">Pricing</a></li>
            <li className="navbar__link"><a href="#">Resources</a></li>
          </ul>
        </div>

        <span className="navbar__separator"></span>
        <div className="navbar__footer">
          <ul className="navbar__account-links">
            <li className="navbar__account-link"><a href="#">Login</a></li>
            <li className="navbar__account-link"><a href="#">Sign up</a></li>
          </ul> 
        </div>
      </div>

    </nav>
  );
}

