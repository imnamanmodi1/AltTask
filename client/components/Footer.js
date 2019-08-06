import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>AltTask</strong> by{" "}
              <a href="https://jgthms.com">Askash, Naman, Sourav</a>
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
