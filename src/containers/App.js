import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/home";
import RouteSearch from "./RouteSearch/RouteSearch";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/home" component={Home} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path='/routesearch' component={RouteSearch}></Route>
        <Footer />
      </div>
    );
  }
}

export default App;
