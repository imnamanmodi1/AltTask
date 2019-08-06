import React, { Component } from "react";

class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="steps">
            <div className="step-item is-completed is-success">
              <div className="step-marker">
                <span className="icon">
                  <i className="fa fa-check" />
                </span>
              </div>
              <div className="step-details">
                <p className="step-title">Step 1</p>
                <p>This is the first step of the process.</p>
              </div>
            </div>
            <div className="step-item is-active">
              <div className="step-marker" />
              <div className="step-details">
                <p className="step-title">Step 2</p>
                <p>
                  This is the second step. You get here once you have completed
                  the first step.
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-marker">3</div>
              <div className="step-details">
                <p className="step-title">Step 3</p>
                <p>This is the third step. One more step before the end.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-marker">
                <span className="icon">
                  <i className="fa fa-flag" />
                </span>
              </div>
              <div className="step-details">
                <p className="step-title">Step 4</p>
                <p>
                  Final step. You have completed all the previous steps and end
                  the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Steps;
