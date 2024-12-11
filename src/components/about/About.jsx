import React from "react";
import "./About.scss";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={about} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              commodi. Autem magnam perferendis voluptas eum dolore, pariatur
              dolores voluptates cum sint reiciendis in, adipisci deleniti ab
              quia quidem et eligendi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              amet ipsum fuga neque commodi saepe tenetur quis earum magnam
              explicabo.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p> <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="achievements">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="achievements">
          <h1>50+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="achievements">
          <h1>40+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
