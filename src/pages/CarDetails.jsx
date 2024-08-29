import React, { useState, useEffect } from "react";
import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import "../styles/car-details.css";

const CarDetails = () => {
  const { slug } = useParams();
  const singleCarItem = carData.find((item) => item.carName === slug);

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % singleCarItem.slide.length);
  };

  const handlePrevImage = () => {
    setCurrentImgIndex(
      (prevIndex) => (prevIndex - 1 + singleCarItem.slide.length) % singleCarItem.slide.length
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="car__img-slideshow">
                <button onClick={handlePrevImage}>
                <svg viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
                </svg>
                </button>

                <img
                  src={singleCarItem.slide[currentImgIndex]}
                  alt={singleCarItem.carName}
                  className="w-100"
                />
                <button onClick={handleNextImage}>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div className="slide-counter">
                  {currentImgIndex + 1} / {singleCarItem.slide.length}
                </div>
                
              </div>
            </Col>

            <Col lg="6" >
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    £{singleCarItem.price}.00
                  </h6>


                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                <div className=" d-flex align-items-center mt-3" style={{ columnGap: "4rem" }}>
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-roadster-fill" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.brand}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-roadster-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-water-flash-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.fuelType}
                  </span>
                </div>

                <div className=" d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-settings-5-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.transmission}
                  </span>


                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-paint-brush-fill" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.colour}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-shapes-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.bodyStyle}
                  </span>

                  
                </div>

                <div className=" d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
                <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-calendar-check-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.dateofRegistration}
                  </span>  
                
                <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.euroStatus}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-speed-up-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.engineSize}
                  </span>

                  

                </div>
              </div>
            </Col>

            <Col lg="12" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
