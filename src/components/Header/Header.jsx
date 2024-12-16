import "./header.scss";
import React from 'react';

import { NavLink } from 'react-router-dom';
import logoHeader from "../../components/Header/logoHeader/logo-header.png";
function Header() {
  return (
    <header>
      <img src={logoHeader} alt="logo" className="logo-header" />

      <nav>
        <ul>
          <li>
            <NavLink to="/home" className={({isActive})=>isActive ? "active-link ": ""}>Acceuil</NavLink>
          </li>
          <li>
            <NavLink to="/apropos"className={({isActive})=>isActive ? "active-link ": ""}>A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
