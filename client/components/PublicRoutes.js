import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./HomePage";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export class PrivateRoutes extends Component {
  render() {
    return (
      <>
        <Switch />
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route render={() => <p>Not found</p>} />
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoutes);
