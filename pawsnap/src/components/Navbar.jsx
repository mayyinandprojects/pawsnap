// pawsnap\src\components\Navbar.jsx
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import pawsnapLogo from "../assets/pawsnap-logo.png";

const PawsnapNavbar = () => {
  console.log(pawsnapLogo);
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={pawsnapLogo}
            alt="Pawsnap Logo"
            width="150"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-1">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PawsnapNavbar;
