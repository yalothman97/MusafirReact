import React, { Component } from "react";
import { connect } from "react-redux";

export class Bookings extends Component {
  render() {
    let bookings = this.props.bookings.map(booking => <p>{booking.id}</p>);
    return <div>{bookings}</div>;
  }
}

const mapStateToProps = state => ({
  bookings: state.cartReducer.bookings
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);
