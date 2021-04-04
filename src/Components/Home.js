import React from 'react';
// import './../styles/style.css';
import AboutStyles from './About.module.css';
import homePicture from './../pictures/home_page.jpg';

function Home() {
  return (
    <div>
      <div className={AboutStyles.about}>
        <div className={AboutStyles.aboutImg}>
          <img src={homePicture} alt="homePicture" />
        </div>
        <div className={AboutStyles.aboutTxt}>
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
      </div>
    </div>
  );
}

export default Home;
