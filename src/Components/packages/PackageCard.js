import React, { Component } from "react";
import { Link } from "react-router-dom";

export class PackageCard extends Component {
  render() {
    const packageBundle = this.props.packageBundle;
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <Link to={`/packages/${packageBundle.id}`}>
          <div className="image">
            <img
              className=" img-fluid roundcorners"
              src={packageBundle.image}
              alt={packageBundle.title}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{packageBundle.title}</span>
            </h5>
            <small className="card-text">{packageBundle.description}</small>
            <small className="card-text">{packageBundle.duration}</small>
            <small className="card-text">{packageBundle.price}</small>
          </div>
        </Link>
      </div>
    );
  }
}

export default PackageCard;
