import React, { Component } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export class PackageCard extends Component {
  render() {
    const packageBundle = this.props.packageBundle;
    return (
      <div className="col-lg-4 col-md-6 col-12 roundcorners">
        <Link to={`/packages/${packageBundle.id}`}>
          <div>
            <div className="carousel-caption">
              <h4 className="card-text">{packageBundle.title}</h4>
              <h4 className="card-text">{packageBundle.price} KD</h4>
            </div>
            <div
              className="roundcorners"
              style={{
                backgroundImage: `url(${packageBundle.image})`,
                position: "relative"
              }}
            >
              <img
                className=" img-fluid roundcorners"
                src={packageBundle.image}
                alt={packageBundle.title}
              />
              <div style={{ marginRight: "70px" }}>
                <StarRatings
                  rating={2}
                  starRatedColor="black"
                  changeRating={this.changeRating}
                  numberOfStars={5}
                  name="rating"
                  starDimension="30px"
                />
              </div>
              <div
                style={{
                  background: "rgb(255,255,255)",
                  background:
                    "linearGradient(156deg, rgba(255,255,255,1) 0%, rgba(23,44,69,0) 100%)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: "1000"
                }}
                className="roundcorners"
              ></div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default PackageCard;

{
  /* <div className="col-12 align-center text-center">
  <div className="carousel-caption">
    <h2>travel made easy</h2>
  </div>
  <img
    className="img-responsive mx-5"
    style={{ maxWidth: "90%" }}
    src={"https://mindfulmermaid.com/wp-content/uploads/2017/10/dsc01835.jpg"}
    alt="landing"
  />
</div>; */
}
