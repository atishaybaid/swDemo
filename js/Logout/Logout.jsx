import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import PropTypes from "prop-types";

class Logout extends Component {
  constructor(props) {
    super(props);
  }
  triggerLogout() {
    localStorage.clear();
    this.context.router.history.push("/");
  }

  render() {
    return (
      <FlatButton
        label="Logout"
        style={{ float: "right" }}
        secondary={true}
        onClick={() => {
          this.triggerLogout();
        }}
      />
    );
  }
}

Logout.contextTypes = {
  router: PropTypes.object
};

export default Logout;
