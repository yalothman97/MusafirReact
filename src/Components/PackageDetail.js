import React, { Component } from "react";

import { Redirect } from "react-router-dom"; // <-- dead
import { connect } from "react-redux";
import { getPackage } from "../redux/actions/packages";

// Components

class PackageDetail extends Component {
  componentDidMount() {
    /**
     * DO NOT COMMIT CONSOLE LOGS
     */
    console.log("Params are :" + this.props.match.params.packageID); // <-- 1
    const packageID = this.props.match.params.packageID;
    console.log("ID is " + packageID); // <-- 2
    // await this.props.packageItem(packageID); <-- dead
    console.log(this.props.packageItem(packageID)); // <-- 3

    /**
     * Do you need a detail fetch?
     * Are you already fetching everything in the list?
     * Are your serializers different?
     * If they are, how can you cache/memoize the request?
     */
    this.props.packageItem(packageID);
  }
  render() {
    if (this.props.loading) {
      return <div>Loading</div>; // I don't think this will ever run...
    }
    const packageObj = this.props.package;
    console.log(this.props.package); // <-- 4
    // if (!packageObj) return <Redirect to="/" />;
    const packageName = `${packageObj.title} ${packageObj.price}`;

    console.log("The Package " + packageObj); // <-- 5

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
