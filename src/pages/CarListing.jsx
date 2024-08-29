import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  const [sortOrder, setSortOrder] = useState(""); // State to store the selected sort order

  // Function to handle sorting
  const handleSort = (e) => {
    const sortOption = e.target.value;
    setSortOrder(sortOption);
  };

  // Function to sort car data based on price
  const sortedCarData = [...carData].sort((a, b) => {
    if (sortOrder === "low") {
      return a.price - b.price; // Sort price low to high
    } else if (sortOrder === "high") {
      return b.price - a.price; // Sort price high to low
    } else {
      return 0; // Default order (no sorting)
    }
  });

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select value={sortOrder} onChange={handleSort}>
                  <option value="">Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {sortedCarData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
