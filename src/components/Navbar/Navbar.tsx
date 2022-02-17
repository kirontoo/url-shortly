import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import  logo from 'logo.svg';

export function Navbar() {
  let [ navbarToggled, setNavbarToggled ] = useState<boolean>( true );

  useEffect( () => {
    // check if user is viewing on a mobile device
    if ( window.screen.width <= 800 ) {
      setNavbarToggled( false );
    }
  }, []);

  let toggleNavbar = ( event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault(); 

    setNavbarToggled( ( navbarToggled ) => !navbarToggled );
    console.log("triggered")
  };

  return (
    <nav className="navbar">

      <div className="navbar__main">
        <img src={ logo } alt="" className="navbar__logo"/>

        <button 
          className="navbar__media-toggle"
          onClick={toggleNavbar}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className={"navbar__links-menu " + ((navbarToggled) ? "navbar__links-menu--show" : "navbar__links-menu--hidden")}>
        <ul className="navbar__links navbar__header">
          <li className="navbar__link"><a href="#">Features</a></li>
          <li className="navbar__link"><a href="#">Pricing</a></li>
          <li className="navbar__link"><a href="#">Resources</a></li>
        </ul>

        <hr className="navbar__separator"/>

        <ul className="navbar__links navbar__footer">
          <li className="navbar__link"><a href="#">Login</a></li>
          <li className="navbar__link"><a href="#">Sign up</a></li>
        </ul> 
      </div>

    </nav>
  );
}

