import React, { Component } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Footer from "./Footer";
import Steps from "./Steps";

class HomePage extends Component {
  render() {
    return (
      <>
        <header>
          <Nav />
          <Hero />
        </header>
        <Steps />
        <Footer />
      </>
    );
  }
}

export default HomePage;
