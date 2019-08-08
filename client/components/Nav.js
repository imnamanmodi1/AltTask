import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const LoggedOutNav = () => {
  return (
    <div className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <p>
            <NavLink to="/">
              <p>Alt Task</p>
            </NavLink>
          </p>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="flex nav-buttons">
              <NavLink
                exact
                activeClassName="activeNav "
                className="btn"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="activeNav "
                className="btn"
                to="/signin"
              >
                Sign In
              </NavLink>
              <NavLink
                activeClassName="activeNav "
                className="btn"
                to="/signup"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoggedInNav = props => {
  return (
    <div className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <p>
            <NavLink to="/">
              <p>Alt Task</p>
            </NavLink>
          </p>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="flex nav-buttons">
              <NavLink
                exact
                activeClassName="activeNav "
                className="btn"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                exact
                activeClassName="activeNav "
                className="btn"
                to="/#"
              >
                {`Hi ${props.username}`}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "home",
      isLoggedIn: false,
      user: null
    };
  }

  componentDidMount() {
    const { token } = localStorage;
    if (token) {
      axios
        .get("/api/v1/users/verify-token", {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(res => this.setState({ user: res.data.user }, this.handleNav));
    }
  }

  handleNav = () => {
    this.state.user
      ? this.setState({ isLoggedIn: true })
      : his.setState({ isLoggedIn: false });
  };
  render() {
    return (
      <>
        {this.state.isLoggedIn == false ? (
          <LoggedOutNav />
        ) : (
          <LoggedInNav username={this.state.user.firstName} />
        )}
      </>
    );
  }
}

export default Nav;
