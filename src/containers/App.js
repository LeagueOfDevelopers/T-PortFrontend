import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import RouteSearch from "./RouteSearch";
import MyOrders from "./MyOrders";
import Profile from "./Profile";
import SpecialOffers from "./SpecialOffers";

const BodyContents = styled.main`
  width: 90%;
  max-width: 1200px;
  margin:auto;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BodyContents>
          <Route path="/home" component={Home} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/routesearch" component={RouteSearch} />
          <Route path="/myorders" component={MyOrders} />
          <Route path="/profile" component={Profile} />
          <Route path="/specialoffers" component={SpecialOffers} />
        </BodyContents>
        <Footer />
      </div>
    );
  }
}

export default App;
