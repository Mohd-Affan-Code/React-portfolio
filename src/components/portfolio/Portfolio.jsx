import React from "react";
import mywork_data from "../../assets/mywork_data";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div id="portfolio" className="project">
      <div className="project-title">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="project img" />;
        })}
      </div>
      <div className="mywork-more">
        <p>Show More</p>
        <p>
          <i className="fa-solid fa-arrow-right"></i>
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
