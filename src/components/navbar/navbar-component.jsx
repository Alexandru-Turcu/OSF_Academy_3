import React from "react";
import "./navbar-styles.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  const product_categories = [
    "Accessories",
    "Alcohol",
    "Art",
    "Books",
    "Drink",
    "Electronics",
    "Flowers & Plants",
    "Food",
    "Gadgets",
    "Garden",
    "Grocery",
    "Home",
    "Jewelry",
    "Kids & Baby",
    "Men's Fashion",
    "Mobile",
    "Motorcycles",
    "Movies",
    "Music",
    "Office",
    "Pets",
    "Romantic",
    "Sport",
    "Toys",
  ];
  const sales = [
    "Accessories",
    "Alcohol",
    "Art",
    "Books",
    "Drink",
    "Electronics",
    "Flowers & Plants",
    "Food",
  ];
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img alt="logo" src={require("../img/logo_click.png")}></img>
      </Navbar.Brand>
      <img id="logo-text" alt="logo_text" src={require("../img/logo_text.png")}></img>
      <br />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <ul className="submenu">
              <li className="submenu-item">
                Product Categories
                <ul>
                  {product_categories.map((product) => {
                    return (
                      <NavDropdown.Item
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "white",
                        }}
                        className="product-item"
                        key={product}
                        href="#404error"
                      >
                        {product}
                      </NavDropdown.Item>
                    );
                  })}
                </ul>
              </li>
              <li className="submenu-item">
                Sale
                <ul>
                  {sales.map((sale) => {
                    return (
                      <NavDropdown.Item
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                      }}
                        className="product-item"
                        key={sale}
                        href="#404error"
                      >
                        {sale}
                      </NavDropdown.Item>
                    );
                  })}
                </ul>
              </li>
              <li className="submenu-item">
                <img alt="navbar-img" src={require("../img/lady.png")}></img>
              </li>
            </ul>
          </NavDropdown>
          <Nav.Link
            style={{ display: "flex", alignItems: "center" }}
            href="#home"
          >
            Company
          </Nav.Link>
          <Nav.Link
            style={{ display: "flex", alignItems: "center" }}
            href="#library"
          >
            Library
          </Nav.Link>
          <Nav.Link
            style={{ display: "flex", alignItems: "center" }}
            href="#contact"
          >
            Contact Us
          </Nav.Link>
          <NavDropdown
            style={{ display: "flex", alignItems: "center" }}
            title="EN"
            id="basic-nav-dropdown"
          ></NavDropdown>
          <NavDropdown
            style={{ display: "flex", alignItems: "center" }}
            title="$ US"
            id="basic-nav-dropdown"
          ></NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
