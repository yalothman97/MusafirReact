import React, { Component } from "react";

// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import Loading from "../../Loading";

import { getPackage } from "../../redux/actions/packages";

// Components

class PackageDetail extends Component {
  componentDidMount() {
    console.log("Params are :" + this.props.match.params.packageID);
    const packageID = this.props.match.params.packageID;
    console.log("ID is " + packageID);
    // await this.props.packageItem(packageID);
    console.log(this.props.packageItem(packageID));

    this.props.packageItem(packageID);
  }
  render() {
    if (this.props.loading) {
      return <loading />;
    }
    const packageObj = this.props.package;
    console.log(this.props.package);
    // if (!packageObj) return <Redirect to="/" />;
    // const packageName = `${packageObj.title} ${packageObj.price}`;

    const x = packageObj.duration.split("");
    console.log("The Package " + packageObj);

    return (
      <div
        className="package text-center"
        style={{ backgroundImage: packageObj.image }}
      >
        <h3 className="mb-4">{packageObj.title}</h3>

        <div className="row text-center">
          <div className="col-6">
            <img
              src={packageObj.image}
              style={{ width: "400px" }}
              alt={packageObj.title}
            />
          </div>
          <div className="col-6">
            <h3 className="mb-4">Duration : {x[0]} Days</h3>
            <h3 className="mb-4">Price : {packageObj.price} </h3>
            <button className="mb-4">Add to cart </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    packageItem: packageId => dispatch(getPackage(packageId))
  };
};
const mapStateToProps = state => {
  return {
    loading: state.rootPackages.loading,
    packages: state.rootPackages.packages,
    package: state.rootPackages.packageItem,
    user: state.user.user
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PackageDetail);
