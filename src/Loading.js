import React, { Component } from "react";

import loadingPlane from "./loadingPlane.gif";

class Loading extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron bg-transparent align-center mt-5 text-center">
          <img src={loadingPlane} className="align-text text-center" />
        </div>
      </div>
    );
  }
}

export default Loading;
