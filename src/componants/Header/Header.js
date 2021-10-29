import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.png"

const Header = () => {
    const navStyle = {
      textDecoration: "none",
      paddingRight: "10px",
    };
    return (
      <Navbar expand="lg">
        <Container>
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
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <NavLink className="fs-5" style={navStyle} to="/home">
                Home
              </NavLink>
              <NavLink className="fs-5" style={navStyle} to="/Login">
                Log In
              </NavLink>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;