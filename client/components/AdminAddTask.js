import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/tasks";

class AdminAddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      deadline: "",
      user: "",
      message: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAssign = () => {
    const { title, content, deadline, user } = this.state;
    const data = { title, content, deadline, user };
    this.props.dispatch(addTask(data));
    if (this.state.title != "") {
      this.setState({ message: "task assigned" });
    }
  };

  render() {
    return (
      <>
        <div className="container has-text-centered column is-half is-offset-one-quarter">
          <div className="box">
            <div className="field">
              <p className="control">
                <input
                  onChange={this.handleChange}
                  name="title"
                  className="input"
                  type="text"
                  placeholder="Task Name"
                  autoComplete="new-password"
                />
              </p>
            </div>

            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Task Content"
                  autoComplete="new-password"
                  onChange={this.handleChange}
                  name="content"
                />
              </div>
            </div>

            <div className="field">
              <p className="control">
                <input
                  onChange={this.handleChange}
                  name="user"
                  className="input"
                  type="search"
                  placeholder="Stakeholder's Name"
                  autoComplete="new-password"
                />
              </p>
            </div>

            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      onChange={this.handleChange}
                      name="deadline"
                      className="input"
                      type="date"
                      placeholder="Select Date"
                    />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input
                      onChange={this.handleChange}
                      name="time"
                      className="input"
                      type="time"
                      placeholder="Select Time"
                    />
                  </p>
                </div>
              </div>
            </div>
            <p>{this.state.message}</p>
            <div className="field is-grouped is-grouped-left">
              <p className="control">
                <button onClick={this.handleAssign} className="btn">
                  Assign
                </button>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(AdminAddTask);
