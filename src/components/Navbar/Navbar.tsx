import React from 'react';
import './Navbar.scss';
import  logo from 'logo.svg';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__header">
        <img src={ logo } alt="" className="navbar__logo"/>
        <ul className="navbar__links">
          <li className="navbar__link"><a href="#">Features</a></li>
          <li className="navbar__link"><a href="#">Pricing</a></li>
          <li className="navbar__link"><a href="#">Resources</a></li>
        </ul>
      </div>

      <div className="navbar__footer">
        <ul className="navbar__account-links">
            <li className="navbar__account-link"><a href="#">Login</a></li>
            <li className="navbar__account-link"><a href="#">Sign up</a></li>
        </ul> 
      </div>
    </nav>
  );
}

