import React, { Component } from "react";

// Icons
import { Briefcase, Map as MapIcon, Shield } from "react-feather";

export default class HomeSymbols extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5 text-center align-center">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <Briefcase color="#CDB2AB" size="120" />
            <h3>friendly</h3>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <MapIcon color="#CDB2AB" size="120" />
            <h3>diverse</h3>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <Shield color="#CDB2AB" size="120" />
            <h3>secure</h3>
          </div>
        </div>
      </div>
    );
  }
}
