import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks } from "../actions/tasks";

class AdminTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.dispatch(getTasks());
  };
  render() {
    return (
      <>
        <div className="container has-text-centered column is-half is-offset-one-quarter">
          <div className="columns is-centered">
            <div className="column is-one-quarter">
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
            <div className="column is-one-quarter">
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
            <div className="column is-one-quarter">
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
            <div className="column is-one-quarter">
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
            <div className="column is-one-quarter">
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
            <div className="column is-one-quarter">
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
            <div className="column is-one-quarter">
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
