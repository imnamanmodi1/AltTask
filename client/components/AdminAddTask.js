import React, { Component } from "react";

class AdminAddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="container has-text-centered column is-half is-offset-one-quarter">
          <div className="box">
            <div className="field">
              <p className="control">
                <input
                  onChange={this.handleChange}
                  name="taskname"
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
                  name="taskContent"
                />
              </div>
            </div>

            <div className="field">
              <p className="control">
                <input
                  onChange={this.handleChange}
                  name="stakeholder"
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
                      name="date"
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

export default AdminAddTask;
