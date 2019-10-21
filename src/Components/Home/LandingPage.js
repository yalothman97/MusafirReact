import React, { Component } from "react";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5 mx-auto">
          <div className="col-12 align-center text-center">
            <div className="carousel-caption">
              <h2>travel made easy</h2>
            </div>
            <img
              className="img-responsive mx-5"
              style={{ maxWidth: "90%" }}
              src={
                "https://mindfulmermaid.com/wp-content/uploads/2017/10/dsc01835.jpg"
              }
              alt="landing"
            />
          </div>
        </div>
      </div>
    );
  }
}
