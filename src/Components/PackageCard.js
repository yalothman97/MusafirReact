import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class PackageCard extends Component {
  render() {
    const packageBundle = this.props.packageBundle;
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <Link to={`/packages/${packageBundle.id}`} className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PackageCard);
