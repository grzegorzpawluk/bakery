import React from 'react';
import ContactStyles from './Contact.module.css';

function Contact() {
  return (
    <div className={ContactStyles.contact}>
      <h1>Kontakt</h1>
      <div className={ContactStyles.formTxt}>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      {/* <form className="form">
        <ul>
          <li> */}
      <div class={ContactStyles.form}>
        <input type="text" name="label" autocomplete="off" required />
        <label for="name" class={ContactStyles.labelName}>
          <span class={ContactStyles.contentName}>Name</span>
        </label>
      </div>
      <div class={ContactStyles.form}>
        <input type="text" name="label" autocomplete="off" required />
        <label for="name" class={ContactStyles.labelName}>
          <span class={ContactStyles.contentName}>Email</span>
        </label>
      </div>
      {/* </li>
          <li>
            <label for="mail">E-mail:</label>
            <input type="email" id="mail" name="user_email" />
          </li>
          <li>
            <label for="msg">Message:</label>
            <textarea id="msg" name="user_message"></textarea>
          </li>
        </ul>
      </form> */}
    </div>
  );
}

export default Contact;
