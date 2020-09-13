import React from "react";
import { Link } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

const HomePage = props => {
  return(
    <div className="homepage">
      <button onClick={() => props.history.push("./items")}>Items</button>
      <Directory />
    </div>
  );
};

export default HomePage;
