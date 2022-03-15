import React, { useState } from "react";

import "../css/ContactForm.css";
import "../css/App.css";


const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form id="contact-form-wrapper" onSubmit={handleSubmit}>
      <div>
        <label className="name-label" htmlFor="name">Name:</label>
        <input className="name-input" type="text" id="name" required />
      </div>
      <div>
        <label className="email-label" htmlFor="email">Email:</label>
        <input className="email-input" type="email" id="email" required />
      </div>
      <div className="message">
        <label className="message-label" htmlFor="message">Message:</label>
        <textarea className="message-textarea" rows="5" id="message" required />
      </div>
      <button className="button" type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;