import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/home";
import Methods from "./Methods/Methods";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/home" component={Home} />
        <Route path="/methods" component={Methods} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Footer />
      </div>
    );
  }
}

export default App;
