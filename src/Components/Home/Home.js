import React, { Component } from "react";

// Components
import LandingPage from "./LandingPage";
import HomeSymbols from "./HomeSymbols";
import Carousel3d from "./Carousel3d";

class Home extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <Carousel3d />
        <HomeSymbols />
      </div>
    );
  }
}
export default Home;
