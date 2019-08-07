import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AdminTasks from "./AdminTasks";
import AdminAddTask from "./AdminAddTask";
import AdminDashboard from "./AdminDashboard";
import AdminOrganizationDashboard from "./AdminOrganizationDashboard";
import AdminTeamDashboard from "./AdminTeamDashboard";

class AdminMainDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "dashboard"
    };
  }
  handleClick = name => {
    this.setState({ activeTab: name });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              <aside className="menu">
                <p className="menu-label">General</p>
                <ul className="menu-list ">
                  <li>
                    <NavLink
                      exact
                      className={
                        this.state.activeTab === "dashboard" ? "is-active" : ""
                      }
                      onClick={() => this.handleClick("dashboard")}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                </ul>
                <ul className="menu-list ">
                  <li>
                    <NavLink
                      exact
                      className={
                        this.state.activeTab === "organization"
                          ? "is-active"
                          : ""
                      }
                      onClick={() => this.handleClick("organization")}
                    >
                      Organization
                    </NavLink>
                  </li>
                </ul>
                <ul className="menu-list ">
                  <li>
                    <NavLink
                      exact
                      className={
                        this.state.activeTab === "teams" ? "is-active" : ""
                      }
                      onClick={() => this.handleClick("teams")}
                    >
                      Teams
                    </NavLink>
                  </li>
                </ul>
                <ul className="menu-list ">
                  <li>
                    <NavLink
                      exact
                      className={
                        this.state.activeTab === "addTask" ? "is-active" : ""
                      }
                      onClick={() => this.handleClick("addTask")}
                    >
                      Add Task
                    </NavLink>
                  </li>
                </ul>
                <ul className="menu-list">
                  <li>
                    <NavLink
                      exact
                      onClick={() => this.handleClick("tasks")}
                      className={
                        this.state.activeTab === "tasks" ? "is-active" : ""
                      }
                    >
                      Tasks
                    </NavLink>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="column is-four-fifth">
              {this.state.activeTab === "tasks" ? (
                <AdminTasks />
              ) : this.state.activeTab === "addTask" ? (
                <AdminAddTask />
              ) : this.state.activeTab === "dashboard" ? (
                <AdminDashboard />
              ) : this.state.activeTab === "organization" ? (
                <AdminOrganizationDashboard />
              ) : this.state.activeTab === "teams" ? (
                <AdminTeamDashboard />
              ) : (
                <h1>Hey Blank</h1>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AdminMainDashboard;
