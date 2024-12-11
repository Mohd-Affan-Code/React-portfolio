import React from "react";
import "./Hero.scss";
import profile from "../../assets/profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="profile-photo" src={profile} alt="" />
      <h1>
        <span> I'm Emily, </span> frontend developer based in USA
      </h1>
      <p>
        I am a frontend developer from Arizona, USA with 10 year of experience
        in multiple companies like Microsoft, Tesla and Apple.
      </p>
      <div className="hero-btn">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <button className="hero-connect">Connect with me</button>
        </AnchorLink>
        <button className="hero-resume">My resume</button>
      </div>
    </div>
  );
};

export default Hero;
