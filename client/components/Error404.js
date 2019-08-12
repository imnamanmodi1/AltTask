import React, { Component } from "react";

class Error404 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <img
        alt="404"
        src="https://illustatus.herokuapp.com/?title=Oops,%20Page%20not%20found&fill=%234f86ed"
      />
    );
  }
}

export default Error404;
