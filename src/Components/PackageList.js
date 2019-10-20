import React, { Component } from "react";
import { connect } from "react-redux";

import PackageCard from "./PackageCard";
import NewNavbar from "./NewNavbar";

export class PackageList extends Component {
  render() {
    const packageCards = this.props.packages.map(packageBundle => (
      <PackageCard key={packageBundle.id} packageBundle={packageBundle} />
    ));
    return (
      <>
        <NewNavbar />
        <div className="mt-5">
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
