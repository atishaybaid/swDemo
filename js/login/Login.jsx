import React, { Component } from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

const Login = props => (
  <div className="login-container">
    <h1 className="page-heading">Lets Star Wars </h1>
    <TextField
      hintText="User Name"
      floatingLabelText="User Name"
      type="text"
      value={props.data.name}
      onChange={event => props.onCrdChange(event, "name")}
    />
    <br />
    <TextField
      hintText="Password"
      floatingLabelText="Password"
      type="password"
      value={props.data.pass}
      onChange={event => props.onCrdChange(event, "pass")}
    />
    <br />
    <FlatButton label="Login" secondary={true} onClick={props.onSubmit} />
  </div>
);

export default Login;
