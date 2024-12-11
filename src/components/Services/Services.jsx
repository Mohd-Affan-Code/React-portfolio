import React from "react";
import ServiceData from "../../assets/Service_data";
import "./Services.scss";

const Services = () => {
  return (
    <div id="services" className="service">
      <div className="service-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {ServiceData.map((service, index) => {
          return (
            <div key={index} className="service-box">
              <h2>{service.s_no}</h2>
              <h1>{service.title}</h1>
              <p>{service.s_para}</p>
              <div className="title-more">
                <p>Read More</p>
                <div>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
