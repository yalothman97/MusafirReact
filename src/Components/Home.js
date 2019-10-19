import React, { Component } from "react";

import PackageCard from "./PackageCard";
import NewNavbar from "./NewNavbar";

export class Home extends Component {
  render() {
    return (
      <>
        <NewNavbar />
        <div className="authors"></div>
      </>
    );
  }
}

export default Home;
