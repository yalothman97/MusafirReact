import React, { Component } from "react";

import NewNavbar from "./NewNavbar";
import Carousel from "./Carousel";

export class Home extends Component {
  render() {
    return (
      <>
        <NewNavbar />
        <Carousel />
        <div></div>
      </>
    );
  }
}

export default Home;
