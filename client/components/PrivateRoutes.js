import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Dashboard from "../components/Dashboard";
import AdminDashboard from "../components/AdminDashboard";
import AdminMainDashboard from "../components/AdminMainDashboard";
import UserDashboard from "../components/UserDashboard";
import AdminAddTask from "../components/AdminAddTask";
import AdminTasks from "../components/AdminTasks";
import HomePage from "./HomePage";
import Error404 from "./Error404";

export class PrivateRoutes extends Component {
  render() {
    console.log("pr called");
    return (
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/admin" component={AdminMainDashboard} />
          <Route path="/user" component={UserDashboard} />
          <Route path="/admin/add-task" component={AdminAddTask} />
          <Route component={Error404} />
        </Switch>
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
