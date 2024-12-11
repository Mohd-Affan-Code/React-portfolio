import React from "react";
import "./Contact.scss";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5b5b0172-2608-4f0c-9fb6-4e8df3daeff1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Email Send Successfully");
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new project, so feel free to send
            me a message about anything that you want me to work on. You can
            contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <i className="fa-solid fa-envelope"></i>
              <p>mohdaffujkhan@gmail.com</p>
            </div>
            <div className="contact-detail">
              <i className="fa-solid fa-phone"></i>
              <p>9857458522</p>
            </div>
            <div className="contact-detail">
              <i className="fa-solid fa-location-dot"></i>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your email" />
          <label htmlFor="">Write Your message here</label>
          <textarea
            name="message"
            rows={8}
            id=""
            placeholder="Enter your message"
          ></textarea>
          <button className="contact-btn">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
