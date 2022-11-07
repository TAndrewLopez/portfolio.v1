import React from "react";
import "./contact.css";

export const ContactPage = () => {
  return (
    <div className="contactPage">
      <h1>Contact Me</h1>
      <form
        name="contact v1"
        onSubmit={submit}
        method="POST"
        data-netlify={true}
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact v1" />

        <label htmlFor="full-name">Full Name:</label>
        <input id="full-name" type="text" name="full-name" />
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" cols="30" rows="10"></textarea>
        <button type="submit">Submit</button>
      </form>

      <footer>
        <p>Designed and Built by Andrew Dobson</p>
        <div className="decoration">
          <span className="color1"></span>
          <span className="color2"></span>
          <span className="color3"></span>
          <span className="color4"></span>
        </div>
      </footer>
    </div>
  );
};
