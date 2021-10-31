import { faCheckSquare, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

const ManageOrder = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://aqueous-badlands-96992.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  const handleDeleteBooking = (id) => {
    const proceed = window.confirm("Cancel This Booking?");
    if (proceed) {
      const url = `https://aqueous-badlands-96992.herokuapp.com/manageorder/${id}`;
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
      <h1 className="display-5 container text-center my-5">
        MANAGE ALL BOOKINGS
      </h1>
      <Table
        className="mb-5"
        striped
        bordered
        hover
        responsive="md"
        variant="dark"
      >
        <thead>
          <tr>
            <th className="fs-3">Booking Information</th>
            <th className="fs-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>
                <Container>
                  <p>
                    <span style={{ color: "#E75B00" }}>
                      Requested Package/Destination:{" "}
                    </span>
                    {booking.destination}
                  </p>
                  <p>
                    <span style={{ color: "#E75B00" }}>Name: </span>
                    {booking.name}
                  </p>
                  <p>
                    <span style={{ color: "#E75B00" }}>Email: </span>
                    {booking.email}
                  </p>
                  <p>
                    <span style={{ color: "#E75B00" }}>Address: </span>
                    {booking.address}
                  </p>
                  <p>
                    <span style={{ color: "#E75B00" }}>Date: </span>
                    {booking.date}
                  </p>
                  <p>
                    <span style={{ color: "#E75B00" }}>Status: </span>
                    {booking.status}
                  </p>
                </Container>
              </td>
              <td>
                <Container className="d-grid gap-3">
                  <button type="button" className="btn btn-success">
                    <div className="fs-5 d-flex align-items-center">
                      {" "}
                      <FontAwesomeIcon icon={faCheckSquare} className="me-2" />
                      <span>Confirm</span>
                    </div>
                  </button>
                  <button
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
                </Container>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageOrder;
