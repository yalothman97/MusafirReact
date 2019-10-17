import React, { Component } from "react";
import { connect } from "react-redux";

import PackageCard from "./PackageCard";
import Logout from "../../Authorization/Logout";
import NewNavbar from "../../Navigation/NewNavbar";

export class PackageList extends Component {
  render() {
    const packageCards = this.props.packages.map(packageBundle => (
      <PackageCard key={packageBundle.id} packageBundle={packageBundle} />
    ));
    return (
      <>
        <NewNavbar />
        <div className="packages">
          <h3>Packages</h3>
          {/* <SearchBar onChange={this.setQuery} /> */}
          <div className="row">{packageCards}</div>
        </div>
        {!!this.props.user ? <Logout /> : <></>}
      </>
    );
  }
}

const mapStateToProps = state => ({
  packages: state.rootPackages.packages,
  user: state.user.user,
  filteredPackages: state.rootPackages.filteredPackages
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PackageList);
