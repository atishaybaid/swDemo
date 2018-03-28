import React, { Component } from "react";
import ReactDOM from "react-dom";
import LoginHOC from "./login/LoginHOC.jsx";
import SearchHOC from "./search/SearchHOC.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const ClientApp = () => {
  return (
    <MuiThemeProvider>
      <Switch>
        <Route exact path="/" component={LoginHOC} />
        <Route exact path="/search" component={SearchHOC} />
      </Switch>
    </MuiThemeProvider>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <ClientApp />
  </BrowserRouter>,
  document.getElementById("app")
);
