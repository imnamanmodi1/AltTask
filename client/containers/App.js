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
import UserDashboard from "../components/UserDashboard";
import AdminAddTask from "../components/AdminAddTask";
import AdminTasks from "../components/AdminTasks";

class App extends Component {
  state = {
    token: ""
  };

  componentDidMount() {
    var token = localStorage.getItem("authToken") || "";
    if (token) {
      this.setState({ token: token });
      this.props.dispatch(getCurrentUser());
    } else {
      this.props.dispatch(noToken());
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/admin" component={AdminDashboard} />
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

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.user
  };
};

export default connect(mapStateToProps)(App);
