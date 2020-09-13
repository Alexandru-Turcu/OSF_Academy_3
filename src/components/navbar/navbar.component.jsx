import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3">
          <a className="refresh" href="http://192.168.1.5/">
            <h1>
              Total Items{" "}
              <span className="badge badge-secondary">
                {this.props.totalItems}
              </span>
            </h1>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
