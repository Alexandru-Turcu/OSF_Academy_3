import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <a href="homepage">
        <img alt="logo" src={require("../img/logo_click_63x65.png")}></img>
      </a>
      <img alt="OSF Academy" src={require("../img/logo_text_74x44.png")}></img>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#404error">1</NavDropdown.Item>
            <NavDropdown.Item href="#404error">2</NavDropdown.Item>
            <NavDropdown.Item href="#404error">3</NavDropdown.Item>
            <NavDropdown.Item href="#404error">4</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#404error">extra</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">COMPANY</Nav.Link>
          <Nav.Link href="#link">LIBRARY</Nav.Link>
          <Nav.Link href="#link">CONTACT US</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
