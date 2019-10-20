import React, { Component } from "react";
import { connect } from "react-redux";

export class CartList extends Component {
  render() {
    // const cartItems = this.props.packages.map(packageBundle => {
    //   return; //cartItems
    // });
    return <>CART</>;
  }
}

const mapStateToProps = state => ({
  packages: state.rootPackages.packages
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList);
