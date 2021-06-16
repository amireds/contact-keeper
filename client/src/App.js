import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactState from "./context/contact/ContactState";
import Navbar from "./components/layouts/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <ContactState>
      <Router>
        <Fragment classsName="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
