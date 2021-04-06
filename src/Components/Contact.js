import React from 'react';
import ContactStyles from './Contact.module.css';

function Contact() {
  return (
    <div className={ContactStyles.contact}>
      <div className={ContactStyles.image}></div>
      {/* <div className={ContactStyles.contactImg}>
        <img src={BackgroundImage} alt="BackgroundImage" />
      </div> */}
      <div className={ContactStyles.contactTxt}>
        <p>
          <b>Lubie Słone</b>
          <br></br>
          Lorem ipsum dolor sit amet.<br></br> +48123456789<br></br>
          kontakt@lubieslone.pl
        </p>
      </div>
    </div>
  );
}

export default Contact;
