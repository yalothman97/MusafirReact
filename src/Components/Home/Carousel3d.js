import Carousel from "react-spring-3d-carousel";

import React, { Component } from "react";
import uuidv4 from "uuid";
import { config } from "react-spring";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Carousel3d extends Component {
  state = {
    goToSlide: 1,
    interval: null
  };
  componentDidMount() {
    this.setState({
      interval: setInterval(
        () => this.setState({ goToSlide: this.state.goToSlide + 1 }),
        4000
      )
    });
  }
  render() {
    if (this.props.loading) return <div>Loading</div>;
    let slides = this.props.packages.map(packageBundle => {
      return {
        key: uuidv4(),
        content: (
          <Link to={`/packages/${packageBundle.id}`}>
            <img
              src={packageBundle.image}
              alt={packageBundle.title}
              className="roundcorners"
              style={{ width: "400px", height: "200px" }}
            />
          </Link>
        )
      };
    });

    return (
      <div
        className="m-5 mx-auto col"
        style={{ height: "300px", width: "900px" }}
      >
        <Carousel
          goToSlide={this.state.goToSlide}
          slides={slides}
          animationConfig={config.slow}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  packages: state.travelPackageReducer.packages,
  loading: state.travelPackageReducer.loading
});

export default connect(mapStateToProps)(Carousel3d);
