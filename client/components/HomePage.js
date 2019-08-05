import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <div>
        <section className="accordions">
          <article className="accordion is-active">
            <div className="accordion-header toggle">
              <p>Hello World</p>
            </div>
            <div className="accordion-body">
              <div className="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum <a>felis venenatis</a>{" "}
                efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                Donec sodales, arcu et sollicitudin porttitor, tortor urna
                tempor ligula, id porttitor mi magna a neque. Donec dui urna,
                vehicula et sem eget, facilisis sodales sem.
              </div>
            </div>
          </article>
          <article className="accordion">
            <div className="accordion-header">
              <p>Hello World</p>
              <button className="toggle" aria-label="toggle" />
            </div>
            <div className="accordion-body">
              <div className="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum <a>felis venenatis</a>{" "}
                efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                Donec sodales, arcu et sollicitudin porttitor, tortor urna
                tempor ligula, id porttitor mi magna a neque. Donec dui urna,
                vehicula et sem eget, facilisis sodales sem.
              </div>
            </div>
          </article>
          <article className="accordion">
            <div className="accordion-header">
              <p>Hello World</p>
              <button className="toggle" aria-label="toggle" />
            </div>
            <div className="accordion-body">
              <div className="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum <a>felis venenatis</a>{" "}
                efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                Donec sodales, arcu et sollicitudin porttitor, tortor urna
                tempor ligula, id porttitor mi magna a neque. Donec dui urna,
                vehicula et sem eget, facilisis sodales sem.
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default HomePage;
