import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import RouteSearch from "./RouteSearch";
import MyOrders from "./MyOrders";
import Profile from "./Profile";
import SpecialOffers from "./SpecialOffers";

const StyledBody = styled.div`
  font-family: LucidaGrande;
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.1px;
  text-align: center;
  color: black;
`;

const BodyContents = styled.main`
  /* width: 90%; */
  /* max-width: 1200px; */
  /* margin: auto; */
  min-height: calc(100vh - 66px);
`;

class App extends Component {
  render() {
    return (
      <StyledBody>
        <Header />
        <BodyContents>
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/routesearch" component={RouteSearch} />
            <Route path="/myorders" component={MyOrders} />
            <Route path="/profile" component={Profile} />
            <Route path="/specialoffers" component={SpecialOffers} />
          </Switch>
        </BodyContents>
        <Footer />
      </StyledBody>
    );
  }
}

export default App;
