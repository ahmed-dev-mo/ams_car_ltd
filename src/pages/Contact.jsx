import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0axm8ss', 'template_durxl2p', form.current, 'j7L2E6ElJ37T2LSC4')
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
        },
        (error) => {
          console.error("Failed to send email. Error: ", error.text);
        }
      );
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h3 className="fw-bold mb-4">Get In Touch</h3>
              
              <form ref={form} onSubmit={sendEmail}>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" name="name" required />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" name="email" required />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Number" type="number" name="number" required />
                </FormGroup>
                <FormGroup className="contact__area">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    name="message"
                    required
                  ></textarea>
                </FormGroup>

                <button className="contact__btn" type="submit" value="Send">
                  Send Message
                </button>
              </form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h3 className="fw-bold">Contact Information</h3>
                <p className="section__description mb-0">
                  Dealership: 
                  <a href="https://www.google.com/maps/place/Nazeing,+Waltham+Abbey+EN9+2HU/@51.7341352,0.0053608,17z/data=!3m1!4b1!4m6!3m5!1s0x47d89e2f70ed7b2d:0xa1979757d10f9e23!8m2!3d51.7351824!4d0.0082802!16s%2Fg%2F1wyc3ljt?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"> Five Farthings, Nazeing Road, Waltham Abbey, EN9 2HU </a>
                </p>
                <p className="section__description mb-0">
                  Head Office: 259-269 Marylebone Road, London, NW1 5RA
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">074 711 23341</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">sales@amscars.uk</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className="d-flex align-items-center gap-4 mt-3 ">
                <a href="https://wa.me/message/WL3GIHR3CBGIN1"> 
                 <i className="ri-whatsapp-line" width="60" alt="a"> </i>
                </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
