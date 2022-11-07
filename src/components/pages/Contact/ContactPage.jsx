import React from "react";
import "./contact.css";

export const ContactPage = () => {
  const userNameRef = React.useRef();
  const userEmailRef = React.useRef();
  const userMessageRef = React.useRef();

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const userEmail = userEmailRef.current.value;
    const userMessage = userMessageRef.current.value;
    const state = { name: userName, email: userEmail, message: userMessage };

    if (userName && userEmail && userMessage) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact-me",
          ...state,
        }),
      })
        .then(() => {
          userNameRef.current.value = "";
          userEmailRef.current.value = "";
          userMessageRef.current.value = "";
          alert("Success!");
        })
        .catch((error) => alert(error));
    }
  };

  return (
    <div className="contactPage">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} name="contact-me" method="post">
        <input type="hidden" name="form-name" value="contact-me" />

        <label htmlFor="full-name">Full Name:</label>
        <input id="full-name" type="text" name="full-name" ref={userNameRef} />
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" ref={userEmailRef} />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          // cols="30"
          rows="5"
          ref={userMessageRef}
        ></textarea>
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
