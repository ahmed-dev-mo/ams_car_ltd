import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "../../styles/booking-form.css";
import {  Container, Row, Col, FormGroup,Input } from "reactstrap";

const BookingForm = () => {
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
    <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>
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
    <FormGroup className="contact__form">
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
  </Row>
        </Container>
  );
};

export default BookingForm;
