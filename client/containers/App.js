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

// compares objects
// receives obj1 and obj2
// returns true if equal and false if unequal
function compareObjects(obj1, obj2) {
  if (!obj1 || !obj2) return false;

  let status = true;

  for (let key in obj1) {
    if (
      typeof obj1[key] === typeof obj2[key] &&
      obj1[key] === obj2[key] &&
      obj1[key].constructor === obj2[key].constructor
    )
      status = true;
    else {
      status = false;
      break;
    }
  }

  return status;
}

class App extends Component {
  state = {
    token: "",
    user: null
  };

  componentDidMount() {
    if (this.props.getUser && this.props.getUser.user)
      this.setState({ user: this.props.getUser.user });

    const { token } = localStorage;
    if (token) {
      this.props.dispatch(getUser());
    }
  }

  componentDidUpdate = prevProps => {
    console.log("Inside app cdu, ", prevProps, this.props);

    if (!compareObjects(prevProps, this.props)) {
      if (this.props.getUser && this.props.getUser.user)
        this.setState({ user: this.props.getUser.user });
    }
  };

  render() {
    const user = this.state.user ? this.state.user.user : this.state.user;
    console.log("inside app render: ", user);
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
