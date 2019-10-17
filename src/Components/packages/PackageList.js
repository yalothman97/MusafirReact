import React, { Component } from "react";
import { connect } from "react-redux";

import PackageCard from "./PackageCard";
import Navbar from "../Navbar";
// import NewNavbar from "./NewNavbar";

export class PackageList extends Component {
  render() {
    const packageCards = this.props.packages.map(packageBundle => (
      <PackageCard key={packageBundle.id} packageBundle={packageBundle} />
    ));
    return (
      <>
        <Navbar />
        <div className="">
          <h3>Packages</h3>
          {/* <SearchBar onChange={this.setQuery} /> */}
          <div className="row">{packageCards}</div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  packages: state.rootPackages.packages
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PackageList);