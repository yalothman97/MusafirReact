import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getPackage } from "../redux/actions/packages";

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
      return <div>Loading</div>;
    }
    const packageObj = this.props.package;
    console.log(this.props.package);
    // if (!packageObj) return <Redirect to="/" />;
    const packageName = `${packageObj.title} ${packageObj.price}`;

    console.log("The Package " + packageObj);

    return (
      <div className="author">
        <div>
          <h3>{packageName}</h3>
          <img
            src={packageObj.image}
            className="img-thumbnail img-fluid"
            alt={packageName}
          />
          <h3>{packageObj.duration}</h3>
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
