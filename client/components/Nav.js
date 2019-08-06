import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                <div className="buttons">
                  <NavLink
                    exact
                    activeClassName="active "
                    className="btn"
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    activeClassName="active "
                    className="btn"
                    to="/signin"
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    activeClassName="active "
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
