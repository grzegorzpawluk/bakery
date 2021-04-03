import React from 'react';
import './../styles/style.css';
import about from './../pictures/about.jpg';

function About() {
  return (
    <div>
      <h1>O mnie</h1>
      <div className="about">
        <div className="about-txt">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="about-img">
          <img src={about} alt="o mnie" />
        </div>
      </div>
    </div>
  );
}

export default About;
