import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import Logo from "../../assets/all-images/Ams-2.png";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
  <Container>
    <Row className="d-flex justify-content-between align-items-center">
      <Col lg="6" md="6" sm="12" className="d-flex justify-content-start">
        <div className="header__top__left bordered-section">
          <span>Need Help?</span>
          <span className="header__top__help">
            <i className="ri-phone-fill"></i> +44 791 234 567
          </span>
        </div>
      </Col>

      <Col lg="6" md="6" sm="12" className="d-flex justify-content-end">
        <div className="header__top__right bordered-section">
          <Link to="/contact" className="header__top__right-link">
            <i className="ri-phone-fill"></i> Request a call
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
</div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col lg="2" md="3" sm="4">
            <div className="header__location d-flex align-items-center gap-2">
              <span>
                <i className="ri-earth-line"></i>
              </span>
              <div className="header__location-content">
                <h4>London</h4>
                <h6>England, UK</h6>
              </div>
            </div>
          </Col>
    
          <Col lg="3" md="3" sm="4" className="d-flex justify-content-center">
            <div className="logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <span>
                    <img
                      src={Logo}
                      alt="Logo"
                      style={{ width: "200px", height: "150px" }}
                    />
                  </span>
                </Link>
              </h1>
            </div>
          </Col>
    
          <Col lg="2" md="3" sm="4">
            <div className="header__location d-flex align-items-center gap-2">
              <span>
                <i className="ri-time-line"></i>
              </span>
              <div className="header__location-content">
                <h4>Monday to Friday</h4>
                <h6>9am - 5pm</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-center">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
