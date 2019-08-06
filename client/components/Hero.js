import React, { Component } from "react";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className="hero homepage-hero is-medium is-primary">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Let's Co-create a better workplace.</h1>
              <h2 className="subtitle">Demo Text</h2>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Hero;
