import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

const HomePage = (props) => {
  return (
    <div className="homepage">
      <button onClick={() => props.history.push("./services")}>Services</button>
      <Directory />
    </div>
  );
};

export default HomePage;
