import React from "react";
import { chooseUs } from "./../../utils/utils";
import AboutUsCards from "../Cards/AboutUsCards";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div>
      <div>
        <h2>About Us</h2>
        <b> The Team You Want On Your Project</b>
        <p>
          Whether it’s a new corporate website, an e-commerce solution or a
          simple blog design, we have the experience and expertise needed to
          help you achieve your goals.
        </p>
      </div>
      <div>
        <div className="cards-container">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3> Who Are We</h3>
                <h5>
                  No one in the industry knows more about web design than we do.
                  With over 15 years of experience and huge success in our past
                  projects, we can help any business with their website design
                  needs. All we need is some basic information about what you
                  need and a time frame in which to complete it.
                </h5>
                <div className="flip-card-back"></div>
              </div>
              <img src={chooseUs} alt="Avatar" />
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3> Our Mission</h3>
                <h5>
                  No one in the industry knows more about web design than we do.
                  With over 15 years of experience and huge success in our past
                  projects, we can help any business with their website design
                  needs. All we need is some basic information about what you
                  need and a time frame in which to complete it.
                </h5>
                <div className="flip-card-back"></div>
              </div>
              <img src={chooseUs} alt="Avatar" />
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3> What We Do</h3>
                <h5>
                  <li>UI UX Design</li>
                  <li> Website Development</li>
                  <li> Marketing</li>
                  <li>Social Media</li>
                  <li>eCommerce Store</li>
                  <li>Tech Support</li>
                </h5>
                <div className="flip-card-back"></div>
              </div>
              <img src={chooseUs} alt="Avatar" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2> Our 6-D Process</h2>
        <AboutUsCards />
      </div>
    </div>
  );
};

export default AboutUs;
