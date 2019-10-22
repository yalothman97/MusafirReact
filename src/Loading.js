import React, { Component } from "react";

import loadingPlane from "./loadingPlane.gif";

class Loading extends Component {
  render() {
    return <div className="align-text text-center">{loadingPlane}</div>;
  }
}

export default Loading;
