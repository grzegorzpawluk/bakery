import React from 'react';
import './../styles/style.css';

function Contact() {
  return (
    <div className="contact">
      <h1>Kontakt</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>

      {/* <form className="form">
        <ul>
          <li> */}
      <div class="form">
        <input type="text" name="label" autocomplete="off" required />
        <label for="name" class="label-name">
          <span class="content-name">Name</span>
        </label>
      </div>
      <div class="form">
        <input type="text" name="label" autocomplete="off" required />
        <label for="name" class="label-name">
          <span class="content-name">Email</span>
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
