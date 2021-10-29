import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Tour = (props) => {
  const { _id,name, img, price, homeDescription } = props.tour;
  return (
    <Col className="mb-5">
      <Card className="h-100">
        <Card.Img variant="top" src={img} className="img-fluid" />
        <Card.Body className="mb-3">
          <Card.Title className="fs-2">{name}</Card.Title>
          <Card.Text>{homeDescription}</Card.Text>
        </Card.Body>
        <Card.Footer
          className="d-flex align-items-center"
          style={{ backgroundColor: "#3C3C3C" }}
        >
          <Container>
            <p
              className="fs-4 d-flex align-items-center"
              style={{ color: "#E75B00" }}
            >
              <span
                className="fs-5 lh-sm d-none d-lg-block"
                style={{ color: "#DFDFDF" }}
              >
                Starts from only:
              </span>
              <span className="ms-1"> ${price}</span>
            </p>
          </Container>
          <NavLink to={`/tour/${_id}`}>
            <button
              style={{ color: "#DFDFDF", backgroundColor: "#E75B00" }}
              type="button"
              className="btn"
            >
              <div className="fs-5 d-flex align-items-center">
                {" "}
                <FontAwesomeIcon icon={faCartPlus} className="me-2" />
                <span>Book</span>
              </div>
            </button>
          </NavLink>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Tour;
