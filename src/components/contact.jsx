import React from 'react';
import "./contact.css"

function Contact() {
  return (
    <div className="contact-container">
      <div className="card">
        <p className="heading">Contact Form</p>
        <div className="input-div">
          <input type="text" className="input" placeholder="Email" />
        </div>
        <div className="input-div">
          <input type="text" className="input" placeholder="Phone" />
        </div>
        <div className="input-div">
        <input type="text" className="input" placeholder="Message" />
        </div>
        <div className="button-div">
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;