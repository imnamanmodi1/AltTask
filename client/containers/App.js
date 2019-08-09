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

const mapStateToProps = state => {
  return {
    getUser: state
  };
};

class App extends Component {
  componentDidMount() {
    if (localStorage.token) {
      const { token } = localStorage;
      if (token) {
        this.props.dispatch(getUser());
      }
    }
  }

  render() {
    console.log(this.props.getUser.getUser);
    const { user } = this.props.getUser.getUser;
    console.log(user, "in app");
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/admin" component={AdminMainDashboard} />
            <Route path="/user" component={UserDashboard} />
            <Route path="/admin/add-task" component={AdminAddTask} />
            {/* <Route path="/admin/tasks" component={AdminTasks} /> */}

            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route render={() => <p>Not found</p>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
