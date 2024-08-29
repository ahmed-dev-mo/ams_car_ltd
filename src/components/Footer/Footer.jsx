import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import Logo from "../../assets/all-images/Ams-2.png"


const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "/privacypolicy",
    display: "Privacy Policy",
  },

  {
    path: "/termsconditions",
    display: "Terms & Conditions",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
          <div className="logo">
          <h1>
            <Link to="/home" className=" d-flex align-items-center gap-2">
              <span>
              <img 
              src={Logo}
              alt="Logo" 
              style={{ width: '200px', height: '150px' }} 
            />
              </span>
            </Link>
          </h1>
        </div>
            <p className="footer__logo-content">
            Located in Waltham Abbey, EN9 2HU, AMS Cars is your trusted destination for top-quality vehicles and exceptional customer service. 
            Explore our diverse selection, enjoy transparent pricing, and benefit from our comprehensive support services.
            Connect with us to find your perfect car and experience the AMS difference.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Dealership</h5>
              <p className="office__info">Five Farthings, Nazeing Road, Waltham Abbey, EN9 2HU</p>
              <p className="office__info">Phone: 074 711 23341</p>

              <p className="office__info">Email: sales@amscars.uk</p>

              <p className="office__info">Office Time: 9am - 7pm</p>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Ahmed Mohamed. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
