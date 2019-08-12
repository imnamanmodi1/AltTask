import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin } from "../actions/user";
import { getCurrentUser } from "../actions/index";
import axios from "axios";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    this.props.dispatch(userLogin(this.state)).then(res => {
      this.props.history.push("/admin");
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <div className="container has-text-centered column is-half is-offset-one-quarter">
          <div className="box signin-container">
            <h2 className="subtitle">Sign in</h2>
            <Link className="is-primary" to="/signup">
              Need an account?
            </Link>

            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  onChange={this.handleChange}
                  name="email"
                  className="input"
                  value={email}
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
                  value={password}
                  placeholder="Password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
            <div className="field is-grouped is-grouped-left">
              <p className="control">
                <button onClick={this.handleSubmit} className="btn">
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(SignIn);
