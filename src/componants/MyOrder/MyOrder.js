import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://wildernesstrekking.onrender.com/orders")
      .then((res) => res.json())
      .then((data) => {
        const myBookings = data.filter(
          (booking) => booking.email === user?.email
        );
        setBookings(myBookings);
      });
  }, [user?.email]);

  const handleDeleteBooking = (id) => {
    const proceed = window.confirm("Do You Want to Cancel Your Booking?");
    if (proceed) {
      const url = `https://wildernesstrekking.onrender.com/myorders/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Cancelled");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  return (
    <Container>
      <h1 className="display-5 container text-center my-5">MY BOOKINGS</h1>
      <Row xs={1} md={2} className="g-4">
        {bookings.map((booking) => (
          <Col key={booking._id} className="mb-5">
            <Card className="h-100">
              <Card.Body
                style={{ backgroundColor: "#DFDFDF" }}
                className="pb-3"
              >
                <Card.Text className="fs-5">
                  <span style={{ color: "#E75B00" }}>
                    Package/Destination:{" "}
                  </span>
                  {booking.destination}
                </Card.Text>
                <Card.Text className="fs-5">
                  <span style={{ color: "#E75B00" }}>Booked By: </span>
                  {booking.name}
                </Card.Text>
                <Card.Text className="fs-5">
                  <span style={{ color: "#E75B00" }}>Email: </span>
                  {booking.email}
                </Card.Text>
                <Card.Text className="fs-5">
                  <span style={{ color: "#E75B00" }}>
                    Possible/Apporved Date:{" "}
                  </span>
                  {booking.date}
                </Card.Text>
              </Card.Body>
              <Card.Footer
                className="d-flex align-items-center"
                style={{ backgroundColor: "#3C3C3C" }}
              >
                <Container>
                  <p
                    className="d-flex align-items-center"
                    style={{ color: "#E75B00" }}
                  >
                    <span className="lh-sm " style={{ color: "#DFDFDF" }}>
                      Status:
                    </span>
                    <span className="ms-1"> {booking.status}</span>
                  </p>
                </Container>

                <button
                  //   style={{ color: "#DFDFDF", backgroundColor: "#E75B00" }}
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    handleDeleteBooking(booking._id);
                  }}
                >
                  <div className="fs-5 d-flex align-items-center">
                    {" "}
                    <FontAwesomeIcon icon={faWindowClose} className="me-2" />
                    <span>Cancel</span>
                  </div>
                </button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyOrder;
