import React from "react";
import { Link } from "react-router-dom";
import "./header-styles.scss";

const Header = () => (
  <div className="header">
    <div className="options">
      <Link className="option" to="/services">
        SERVICES
      </Link>
      <Link className="option" to="/contact">
        CONTACT US
      </Link>
      <Link className="option" to="/library">
        LIBRARY
      </Link>
    </div>
  </div>
);


export default Header;
