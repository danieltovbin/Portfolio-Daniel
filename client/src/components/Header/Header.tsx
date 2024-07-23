import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./style.scss";
import { Link as ScrollLink } from "react-scroll";
import Linkedin from "../HomePage/Contact/Linkedin/Linkedin";
import Github from "../HomePage/Contact/Github/Github";
import { navLinks } from "./header";

const Header = () => {
  return (
    <Navbar className="custom-header" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks &&
              navLinks.map((link, index) => (
                <ScrollLink
                  key={index}
                  smooth={true}
                  duration={100}
                  offset={-170}
                  to={link.to}
                  className="nav-link"
                >
                  {link.label}
                </ScrollLink>
              ))}
          </Nav>
          <Nav className="social-link">
            <Linkedin />
            <Github />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
