import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const ContactPage = () => (
  <div>
    <h1>CONTACT PAGE </h1>
  </div>
);

const ItemList = (props) => {
  return (
    <div>
      <h1>ITEM LIST PAGE</h1>
      <Link to={`${props.match.url}/1`}>To item #1</Link><br></br>
      <Link to={`${props.match.url}/2`}>To item #2</Link><br></br>
      <Link to={`${props.match.url}/3`}>To item #3</Link><br></br>
      <Link to={`${props.match.url}/4`}>To item #4</Link><br></br>
    </div>
  );
};

const ItemDetail = (props) => {
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
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/items" component={ItemList} />
        <Route path="/items/:itemID" component={ItemDetail} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
