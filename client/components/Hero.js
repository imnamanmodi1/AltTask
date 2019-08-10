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
              <h2 className="subtitle">
                <strong>Achieve</strong> your goals by organizing your tasks in
                a better way !!
              </h2>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Hero;
