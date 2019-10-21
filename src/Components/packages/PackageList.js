import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import PackageCard from "./PackageCard";

export class PackageList extends Component {
  render() {
    const packageFeatured = this.props.packages.map((packageBundle, index) => {
      if (index <= 3)
        return (
          <MDBCarouselItem key={packageBundle.id} itemId={index + 1}>
            <Link to={`/packages/${packageBundle.id}`}>
              <MDBView>
                <img src={packageBundle.image} alt={packageBundle.title} />
              </MDBView>
            </Link>
          </MDBCarouselItem>
        );
    });
    const packageCards = this.props.packages.map(packageBundle => {
      return <PackageCard packageBundle={packageBundle} />;
    });
    return (
      <>
        <div className="package text-center">
          <h1 className="">Featured Packages</h1>
        </div>

        <MDBContainer className="col-9 text-center">
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={false}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>{packageFeatured}</MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
        <h2 className="text-center" style={{ paddingTop: "2.5%" }}>
          Available packages
        </h2>
        <div className="card-columns " style={{ paddingTop: "1.5%" }}>
          {packageCards}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  packages: state.travelPackageReducer.packages
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PackageList);
