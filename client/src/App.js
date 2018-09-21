import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import MainPage from "./components/pages/MainPage";
import SearchPage from "./components/pages/SearchPage";
import FAQPage from "./components/pages/FAQPage";
import HowToBuyPage from "./components/pages/HowToBuyPage";
import TicketBackPage from "./components/pages/TicketBackPage";

import EventPage from "./components/pages/EventPage";

import AppNavbar from "./components/appNavbar/AppNavbar";
import AppFooter from "./components/appFooter/AppFooter";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppNavbar />
        <Switch>
          <Route exact path="/" render={props => <MainPage />} />
          <Route exact path="/FAQ" render={props => <FAQPage />} />
          <Route exact path="/howtobuy" render={props => <HowToBuyPage />} />
          <Route
            exact
            path="/ticketback"
            render={props => <TicketBackPage />}
          />
          <Route
            path="/event/:id"
            render={props => <EventPage info={props} />}
          />
          <Route
            path="/search/:str"
            component={props => <SearchPage info={props} {...props} />}
          />
        </Switch>
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default App;
