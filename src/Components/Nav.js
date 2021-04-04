import React, { useState } from 'react';
//import './../styles/style.css';
import NavStyles from './Nav.module.css';
import { Link } from 'react-router-dom';
import classes from 'classnames';

function Nav() {
  const [toggle, setToggle] = useState(false);
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav>
      <div className={NavStyles.logo}>
        <Link style={navStyle} to="/">
          <h3>Logo</h3>
        </Link>
      </div>
      <ul
        className={
          toggle
            ? classes(NavStyles.open, NavStyles.navLinks)
            : NavStyles.navLinks
        }
      >
        <Link style={navStyle} to="/cakes">
          <li onClick={() => setToggle(!toggle)}>Ciasta</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li onClick={() => setToggle(!toggle)}>O mnie</li>
        </Link>
        <Link style={navStyle} to="/contact">
          <li onClick={() => setToggle(!toggle)}>Kontakt</li>
        </Link>
      </ul>
      <div
        class={
          toggle
            ? classes(NavStyles.burger, NavStyles.toggle)
            : NavStyles.burger
        }
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div class={NavStyles.line1}></div>
        <div class={NavStyles.line2}></div>
        <div class={NavStyles.line3}></div>
      </div>
    </nav>
  );
}

export default Nav;
