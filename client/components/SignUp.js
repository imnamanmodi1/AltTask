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

          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                onChange={this.handleChange}
                name="username"
                className="input"
                type="text"
                placeholder="Username"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
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
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
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
          <div className="field">
            <p className="control">
              <button onClick={this.handleClick} className="button is-success">
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
