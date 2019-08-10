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
              <strong>
                <a href="https://alttask.xyz/">AltTask</a>
              </strong>{" "}
              by <a href="https://github.com/akslucky619">Askash,</a>
              <a href="https://github.com/imnamanmodi1">Naman</a>
              <a href="https://github.com/souravbaranwal">& Sourav</a>
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
