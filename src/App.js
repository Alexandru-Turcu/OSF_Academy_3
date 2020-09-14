import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import NavBar from "./components/navbar/navbar.component"
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => (
  <div>
    <h1>CONTACT PAGE </h1>
  </div>
);

const Services = (props) => {
  return (
    <div>
      <h1>ITEM LIST PAGE</h1>
      <Link to={`${props.match.url}/1`}>To item #1</Link>
      <br></br>
      <Link to={`${props.match.url}/2`}>To item #2</Link>
      <br></br>
      <Link to={`${props.match.url}/3`}>To item #3</Link>
      <br></br>
      <Link to={`${props.match.url}/4`}>To item #4</Link>
      <br></br>
    </div>
  );
};

const ServiceDetail = (props) => {
  return (
    <div>
      <h1>ITEM LIST: {props.match.params.itemId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={NavBar} />
        <Route path="/homepage" component={HomePage} />
        <Route exact={true} path="/services" component={Services} />
        <Route path="/services/:serviceID" component={ServiceDetail} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
