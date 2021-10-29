import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Tour from "../Tour/Tour";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/tours")
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
        if (tours.length !== 0) {
          setIsloading(false);
        }
      });
  }, [tours.length]);
  if (isloading) {
    return (
      <Container className="d-flex align-items-center justify-content-center mb-5">
        <Spinner animation="border" variant="secondary" />
      </Container>
    );
  }
  return (
    <Container>
      <h1 className="display-5 container text-center my-5 pt-5">
        JOIN OUR GUIDED TREKKING TRIP
      </h1>
      <Row xs={1} md={2} className="g-4">
        {tours.map((tour) => (
          <Tour key={tour._id} tour={tour}></Tour>
        ))}
      </Row>
    </Container>
  );
};

export default Tours;
