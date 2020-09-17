import React from "react"
import "./navbar-styles.scss"

const NavBar = () => {

    return (
        <div className="navbar" bg="light" expand="lg">
          <a href="homepage">
            <img alt="logo" src={require("../img/logo_click_63x65.png")}></img>
          </a>
          <img alt="logo_text" src={require("../img/logo_text_74x44.png")}></img>
        <div className="dropdown">
          <button className="dropbtn">Services
            <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>Product Categories</h3>
                <a href="#404error">Accesories</a>
                <a href="#404error">Alcohol</a>
                <a href="#404error">Art</a>
                <a href="#404error">Books</a>
                <a href="#404error">Drink</a>
                <a href="#404error">Electronics</a>
                <a href="#404error">Flowers & Plants</a>
                <a href="#404error">Food</a>
                <a href="#404error">Gadgets</a>
                <a href="#404error">Garden</a>
                <a href="#404error">Grocery</a>
                <a href="#404error">Home</a>
                <a href="#404error">Jewelry</a>
                <a href="#404error">Kids & Baby</a>
                <a href="#404error">Men's Fashion</a>
                <a href="#404error">Mobile</a>
                <a href="#404error">Motorcycles</a>
                <a href="#404error">Movies</a>
                <a href="#404error">Music</a>
                <a href="#404error">Office</a>
                <a href="#404error">Pets</a>
                <a href="#404error">Romantic</a>
                <a href="#404error">Sport</a>
                <a href="#404error">Toys</a>
              </div>
              <div className="column">
                <h3>Sale</h3>
                <a href="#404error">Accesories</a>
                <a href="#404error">Alcohol</a>
                <a href="#404error">Art</a>
                <a href="#404error">Books</a>
                <a href="#404error">Drink</a>
                <a href="#404error">Electronics</a>
                <a href="#404error">Flowers & Plants</a>
                <a href="#404error">Food</a>
              </div>
            </div>
          </div>
        </div>
        <a href="#home">Company</a>
        <a href="#library">Library</a>
        <a href="#contact">Contact Us</a>
        </div>
    );    
};

export default NavBar