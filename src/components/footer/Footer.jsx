import React from "react";
import "./Footer.scss";
import logo from "../../assets/arizona.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="logo" />
          <p>
            I am a frontend developer from Arizona, USA with 10 year of
            experience in multiple companies like Microsoft, Tesla and Apple.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <i class="fa-solid fa-user"></i>
            <input type="email" placeholder="Enter your email" />
          </div>
          <button>Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-b-left">© 2024 Mohd Affan. All rights reserved.</p>
        <div className="footer-b-right">
          <p>Connect with me </p>
          <p>Term of Services</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
