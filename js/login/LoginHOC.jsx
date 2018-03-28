import React, { Component } from "react";
import getApiData from "../api.js";
import Login from "./Login.jsx";
import PropTypes from "prop-types";
import Snackbar from "material-ui/Snackbar";

class LoginHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: "",
      toast: false
    };
  }

  onSubmit() {
    var url = `/people/?format=json&search=${this.state.name}`;
    getApiData(url).then(res => {
      this.validateCredential(res);
    });
  }
  validateCredential(res) {
    if (res[0].birth_year === this.state.pass) {
      localStorage.setItem("validUser", true);
      this.context.router.history.push("/search");
    } else {
      this.setState({ toast: true });
    }
  }
  handleRequestClose() {
    this.setState({ toast: false });
  }

  onCrdChange(event, field) {
    this.state[field] = event.target.value;
    this.setState(this.state);
  }

  render() {
    return (
      <div className="login-main">
        <Login
          onSubmit={() => this.onSubmit()}
          data={this.state}
          onCrdChange={(event, field) => this.onCrdChange(event, field)}
        />
        <Snackbar
          open={this.state.toast}
          message="Invalid Login"
          autoHideDuration={4000}
          onRequestClose={() => {
            this.handleRequestClose();
          }}
        />
      </div>
    );
  }
}

LoginHOC.contextTypes = {
  router: PropTypes.object
};

export default LoginHOC;
