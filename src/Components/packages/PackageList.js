import React, { Component } from "react";
import { connect } from "react-redux";

import PackageCard from "./PackageCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export class PackageList extends Component {
  render() {
    if (this.props.loading) return <div>Loading</div>;
    const packageCards = this.props.packages.map(packageBundle => (
      <PackageCard key={packageBundle.id} packageBundle={packageBundle} />
    ));
    return (
      <div className="container">
        <div className="mt-5">
          <h1 className="text-center mt-5">Packages</h1>
          <div className="form-group col-lg-6 col-12 mx-auto">
            <div className="input-group my-3">
              <input
                className="form-control"
                type="text"
                // onChange={event => onChange(event.target.value)}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
            </div>
          </div>
          <div className="row mt-4">{packageCards}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.travelPackageReducer.loading,
  packages: state.travelPackageReducer.packages
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PackageList);
