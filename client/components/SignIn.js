import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin } from "../actions/user";
import axios from "axios";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const url = "http://localhost:3000/user/login";
    axios
      .post(url, {
        email: this.state.email,
        password: this.state.password
      })
      .then(userInfo => {
        console.log(userInfo);
        this.props.dispatch(userLogin(userInfo));
      })
      .catch(function(error) {
        console.log(error);
      });

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({ user: this.state })
    // })
    //   .then(res => res.json())
    //   .then(userInfo => {
    //     console.log(userInfo);
    //     this.props.dispatch(userLogin(userInfo));
    //   });
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
                <button
                  onClick={this.handleSubmit}
                  className="button is-success"
                >
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
