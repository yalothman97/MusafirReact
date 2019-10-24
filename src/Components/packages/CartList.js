import React, { Component } from "react";
import { connect } from "react-redux";
import { checkoutCart } from "../../redux/actions";
import CartItem from "./CartItem";
import { Switch, Route, Redirect } from "react-router-dom";

class CartList extends Component {
  checkout = () => {
    if (this.props.user) {
      this.props.checkoutCart(this.props.items);
      alert("Enjoy your vacation :D");
    } else {
      return this.props.history.push("login/");

      //redirect tologin
    }
  };
  render() {
    let checkoutButton = () => {
      if (this.props.items.length) {
        return (
          <button onClick={this.checkout}>
            <h1>Checkout</h1>
          </button>
        );
      } else {
        return <></>;
      }
    };
    let items = this.props.items;
    console.log(items);
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <div className="text-center m-4">
        <div className="text-center m-4 jumbotron">
          {this.props.items.length ? (
            cartItems
          ) : (
            <h1>There are no items in your cart</h1>
          )}
        </div>
        {checkoutButton()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items,
  user: state.userReducer.user
});

const mapDispatchToProps = dispatch => {
  return {
    checkoutCart: item => dispatch(checkoutCart(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList);
