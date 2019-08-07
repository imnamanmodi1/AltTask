import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    const url = "http://localhost:3000/user/register";
    axios
      .post(url, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
      .then(function(response) {
        console.log(response);
        // this.props.dispatch(userLogin(userInfo));
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <div className=" container has-text-centered column is-half is-offset-one-quarter">
          <div className="box signup-container">
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
                      onChange={this.handleChange}
                      name="firstName"
                      placeholder="First Name"
                      autoComplete="new-password"
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
                      onChange={this.handleChange}
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      autoComplete="new-password"
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
                  autoComplete="new-password"
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
                  autoComplete="new-password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
            <div className="field is-grouped is-grouped-left">
              <p className="control">
                <button onClick={this.handleSubmit} className="btn">
                  Signup
                </button>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(SignUp);
