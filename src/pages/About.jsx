import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import driveImg from "../assets/all-images/drive.jpg";
// import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                At AMS Cars, we’re dedicated to providing an exceptional car buying experience in Waltham Abbey. 
                Our passion for automobiles drives us to offer a diverse selection of high-quality vehicles, ensuring there’s something for everyone. 
                From brand-new models to reliable pre-owned cars, our inventory is carefully curated to meet the needs of our customers.
                </p>

                <p className="section__description">
                Our commitment goes beyond just selling cars; we pride ourselves on delivering outstanding customer service with a personal touch. 
                Our knowledgeable team is here to guide you through every step of the process, from finding the perfect vehicle to offering comprehensive after-sales support. 
                At AMS Cars, we strive to build lasting relationships with our customers, making every visit a positive and memorable experience.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>07471 123 341</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


     { /* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section> */ }
    </Helmet>
  );
};

export default About;
