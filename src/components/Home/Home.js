import React from "react";
import HelpCards from "./../Cards";
import ChooseCards from "../Cards/HelpCards";
import { chooseUs, desktop2,homeImg } from "../../utils/utils";
import { Button, Row, Col } from "antd";
import "./Home.scss";

const Home = () => {
  return (
    <Row gutter={16} className="Home-container">
      <Col span={24}>
        <Row gutter={24}>
          <Col span={24} className="first-section-container">
            <div className="img-container">
              <img className="main-img" src={homeImg} alt="Main Home" />
            </div>
            <div className="content">
              <h3>
                Trust our experts web design that doesn't suck Enfective is a
                web design agency.
              </h3>
              <p>
                We help businesses large and small succeed, through the power of
                designing their brand, digital products, and marketing
                campaigns.
              </p>
              <Button>
                <a
                  href="https://form.jotform.com/221245277563558"
                  rel="noreferrer"
                  target="_blank"
                  alt="Get started"
                  className="start-link"
                >
                  Get Started
                </a>
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <div>
            <h1>How can we help you? </h1>
            We’re on a mission to make the world more inspiring and less ugly.
            Every day we work to bring out the best in brands and turn ideas
            into reality. We love what we do, because when we’re done with you,
            you’ll be grateful for us too.
          </div>

          <HelpCards />
        </Row>
        <Row>
          <h4>
            <b>Why Choose Us?</b>
          </h4>
          <p>
            We have a deep and broad understanding of the web design industry.
            Working with our top-notch designers, we build creative, functional,
            and user-friendly websites that deliver great results.
          </p>

          <div className="choose-us-container">
            <img alt="Choose Us" src={chooseUs}></img>
            <ChooseCards />
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
