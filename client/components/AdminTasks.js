import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks } from "../actions/tasks";
import axios from "axios";
const token = localStorage.token;

class AdminTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    };
    // this.props.dispatch(getTasks());
    axios
      .get(`http://localhost:3000/api/v1/users/tasks`, {
        headers: headers
      })
      .then(allTasks => {
        console.log(allTasks, "in task get action");
      });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="columns is-multiline is-variable is-2 tasks-container">
            <div className="column is-one-quarter-desktop is-half-tablet">
              <div className="card">
                <header className="card-header">Task assigned date</header>
                <div className="card-content content">
                  <h2 className="card-title">Task Title</h2>
                  <p className="card-text">Task description</p>
                </div>
                <footer className="car-footer">
                  <a href="User profile">User profile</a>
                </footer>
              </div>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet">
              <div className="card">
                <header className="card-header">Task assigned date</header>
                <div className="card-content content">
                  <h2 className="card-title">Task Title</h2>
                  <p className="card-text">Task description</p>
                </div>
                <footer className="car-footer">
                  <a href="User profile">User profile</a>
                </footer>
              </div>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet">
              <div className="card">
                <header className="card-header">Task assigned date</header>
                <div className="card-content content">
                  <h2 className="card-title">Task Title</h2>
                  <p className="card-text">Task description</p>
                </div>
                <footer className="car-footer">
                  <a href="User profile">User profile</a>
                </footer>
              </div>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet">
              <div className="card">
                <header className="card-header">Task assigned date</header>
                <div className="card-content content">
                  <h2 className="card-title">Task Title</h2>
                  <p className="card-text">Task description</p>
                </div>
                <footer className="car-footer">
                  <a href="User profile">User profile</a>
                </footer>
              </div>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet">
              <div className="card">
                <header className="card-header">Task assigned date</header>
                <div className="card-content content">
                  <h2 className="card-title">Task Title</h2>
                  <p className="card-text">Task description</p>
                </div>
                <footer className="car-footer">
                  <a href="User profile">User profile</a>
                </footer>
              </div>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet">
              <div className="card">
                <header className="card-header">Task assigned date</header>
                <div className="card-content content">
                  <h2 className="card-title">Task Title</h2>
                  <p className="card-text">Task description</p>
                </div>
                <footer className="car-footer">
                  <a href="User profile">User profile</a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(AdminTasks);
