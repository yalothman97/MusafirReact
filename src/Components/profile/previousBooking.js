import React, { Component } from "react";
import { connect } from "react-redux";

export class BookingList extends Component {
  render() {
    // if (this.props.loading) return <div>Loading</div>;
    // const packageCards = this.props.packages.map(packageBundle => (
    //   <PackageCard key={packageBundle.id} packageBundle={packageBundle} />
    // ));
    return (
      <div className="container">
        <div className="mt-5">
          <h1 className="row mt-5">Previous Bookings!!!</h1>
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
)(BookingList);
