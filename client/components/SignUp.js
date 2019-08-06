import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className=" container has-text-centered column is-half is-offset-one-quarter">
          <h2 className="subtitle">Sign up</h2>
          <Link className="is-primary" to="/signin">
            Have an account?
          </Link>

          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="First Name"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user" />
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    placeholder="Last Name"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user" />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                onChange={this.handleChange}
                name="email"
                className="input"
                type="email"
                placeholder="Email"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                onChange={this.handleChange}
                name="password"
                className="input"
                type="password"
                placeholder="Password"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="field is-grouped is-grouped-left">
            <p className="control">
              <button onClick={this.handleClick} className="btn">
                Signup
              </button>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
