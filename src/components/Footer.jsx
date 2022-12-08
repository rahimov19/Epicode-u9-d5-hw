import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Navbar fixed="bottom" bg="success" id="footer" variant="light">
        <Navbar.Brand href="#home">
          Weather App {new Date().getFullYear()}
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#">Partners</Nav.Link>
          <Nav.Link href="#">Features</Nav.Link>
          <Nav.Link href="#">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
