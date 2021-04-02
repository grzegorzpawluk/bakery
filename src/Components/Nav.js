import React, { useState } from 'react';
import './../App.css';
import { Link } from 'react-router-dom';

function Nav() {
  const [toggle, setToggle] = useState(false);
  const navStyle = {
    color: 'white',
  };

  return (
    <nav>
      <div className="logo">
        <Link style={navStyle} to="/">
          <h3 onClick={() => setToggle(!toggle)}>Logo</h3>
        </Link>
      </div>
      <ul className={toggle ? 'open nav-links ' : ' nav-links '}>
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
        class={toggle ? 'burger toggle' : 'burger '}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  );
}

export default Nav;
