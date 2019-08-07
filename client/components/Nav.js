import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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

const LoggedInNav = () => {
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
      isLoggedIn: false
    };
  }
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default Nav;
