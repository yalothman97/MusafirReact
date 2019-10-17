import React, { Component } from "react";
import { connect } from "react-redux";

import PackageCard from "./PackageCard";
import Navbar from "./Navbar"; // <-- dead
import NewNavbar from "./NewNavbar";

export class PackageList extends Component {
  render() {
    const packageCards = this.props.packages.map(packageBundle => (
      <PackageCard key={packageBundle.id} packageBundle={packageBundle} />
    ));
    return (
      <>
        {/* If you put the navbar here it will ONLY appear on this page */}
        <NewNavbar />
        <div className="authors">
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
