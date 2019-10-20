import React, { Component } from "react";

// AwesomeSlider
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import annecy from "../images/annecy.jpg";
import cruise from "../images/cruise.jpg";
import lebanon from "../images/annecy.jpg";
import madrid from "../images/madrid.jpg";
import miami from "../images/miami.jpg";
import nice from "../images/nice.jpg";
import puertorico from "../images/puertorico.jpg";
import ski from "../images/ski.jpg";

const slider = (
  <AwesomeSlider
    className="mt-5 mx-auto"
    style={{ width: "800px" }}
    bullets={false}
  >
    <div data-src={annecy} />
    <div data-src={cruise} />
    <div data-src={lebanon} />
    <div data-src={madrid} />
    <div data-src={miami} />
    <div data-src={nice} />
    <div data-src={puertorico} />
    <div data-src={ski} />
  </AwesomeSlider>
);

export default class Carousel extends Component {
  render() {
    return <div>{slider}</div>;
  }
}
