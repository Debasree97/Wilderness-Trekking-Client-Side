import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";

const Header = () => {
  const { user, handleGoogleSignOut } = useAuth();
  console.log(user);
  const navStyle = {
    textDecoration: "none",
    paddingRight: "10px",
    display: "inline",
    color: "#3C3C3C",
  };
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center" href="#home">
          <img
            style={{ width: "90px" }}
            src={logo}
            className="img-fluid pe-3"
            alt=""
          />
          <p
            style={{ color: "#3C3C3C" }}
            className="lh-1 fs-1 fw-bolder d-none d-sm-block"
          >
            Wilderness Trekking
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-center  align-items-center">
            <NavLink className="fs-5" style={navStyle} to="/home">
              Home
            </NavLink>
            <NavDropdown.Divider />
            {user?.email && (
              <Nav.Link
                as={Link}
                className="fs-5"
                style={navStyle}
                to="/myorder"
              >
                My Orders
              </Nav.Link>
            )}
            {user?.email && <NavDropdown.Divider />}
            {user?.email && (
              <NavDropdown
                className="fs-5"
                title="Admin"
                id="navbarScrollingDropdown"
              >
                <Nav.Link
                  as={Link}
                  className="fs-6 d-block ps-2"
                  style={navStyle}
                  to="/addorder"
                >
                  Add New Destination
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="fs-6 d-block ps-2"
                  style={navStyle}
                  to="/manageorder"
                >
                  Manage Booking
                </Nav.Link>
              </NavDropdown>
            )}
            {user?.email && <NavDropdown.Divider />}
            {user?.email ? (
              <Nav.Link
                as={Link}
                className="fs-5"
                style={{
                  textDecoration: "none",
                  paddingRight: "10px",
                  display: "inline",
                  color: "#DFDFDF",
                  backgroundColor: "#3C3C3C",
                }}
                to="/home"
              >
                <img
                  style={{ display: "inline", width: "50px" }}
                  className="ms-2 img-fluid img-thumbnail rounded-circle"
                  src={user?.photoURL}
                  alt=""
                />
                <p className="px-3" style={{ display: "inline" }}>
                  Hello,{user?.displayName}
                </p>
                <button
                  type="button"
                  className="btn fw-bold"
                  style={{
                    display: "inline",
                    backgroundColor: "#E75B00",
                    color: "#DFDFDF",
                  }}
                  onClick={handleGoogleSignOut}
                >
                  Sign Out
                </button>
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} className="fs-5" style={navStyle} to="/login">
                Sign in
              </Nav.Link>
            )}
            {/* <NavLink className="fs-5" style={navStyle} to="/login">
                Sign in
              </NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
