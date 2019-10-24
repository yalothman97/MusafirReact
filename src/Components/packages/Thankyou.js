import React, { Component } from "react";

export default class Thankyou extends Component {
  render() {
    return (
      <div>
        Thank you{" "}
        <button onClick={() => this.props.history.replace("/")}>Go Home</button>
      </div>
    );
  }
}
