import React from "react";
import "./App.css";
import { Switch, Route} from "react-router-dom";
import HomePage from "./pages/home/homepage.component";
import NavBar from "./components/navbar/navbar-component"
import ContactPage from "./pages/contact/contactpage.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={NavBar} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
