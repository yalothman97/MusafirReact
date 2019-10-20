import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class PackageCard extends Component {
  render() {
    const packageBundle = this.props.packageBundle;
    return (
      <div
        key={packageBundle.id}
        className="cards p-4 text-center"
        style={{ width: "550px", height: "400px" }}
      >
        {console.log(packageBundle)}
        <Link to={`/packages/${packageBundle.id}`}>
          <div className=" card-img ">
            <img
              className="p-1  "
              src={packageBundle.image}
              alt={packageBundle.title}
              style={{ width: "400px", height: "350px" }}
            />
          </div>

          <div className=" text-center">
            <h5 className="card-title">
              <p style={{ color: "green" }}>{packageBundle.title}</p>
            </h5>
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
