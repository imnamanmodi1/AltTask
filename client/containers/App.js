import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "../scss/custom-variables.scss";
import "../scss/index.scss";

import { getCurrentUser, noToken } from "../actions";

import HomePage from "../components/HomePage";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Dashboard from "../components/Dashboard";
import AdminDashboard from "../components/AdminDashboard";
import AdminMainDashboard from "../components/AdminMainDashboard";
import UserDashboard from "../components/UserDashboard";
import AdminAddTask from "../components/AdminAddTask";
import AdminTasks from "../components/AdminTasks";
import { getUser } from "../actions/user";
import PublicRoutes from "../components/PublicRoutes";
import PrivateRoutes from "../components/PrivateRoutes";

class App extends Component {
  state = {
    token: ""
  };

  componentDidMount() {
    const { token } = localStorage;
    if (token) {
      this.props.dispatch(getUser());
    }
  }

  render() {
    console.log(this.props, "app render");
    const user = this.props.getUser.user;
    console.log(user, "second app render");
    console.log(user, "in app");
    return (
      <div className="App">
        <Nav />
        {user !== null ? <PrivateRoutes /> : <PublicRoutes />}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    getUser: state
  };
};

export default connect(mapStateToProps)(App);
