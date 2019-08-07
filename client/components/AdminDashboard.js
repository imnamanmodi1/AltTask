import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AdminTasks from "./AdminTasks";
import AdminAddTask from "./AdminAddTask";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "addTask"
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

export default AdminDashboard;
