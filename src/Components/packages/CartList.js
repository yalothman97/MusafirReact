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
          <button className="btn btn-light mt-5" onClick={this.checkout}>
            <h3>Checkout</h3>
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
      cartItems = items
        .map(item => {
          let packageBundle = this.props.packages.find(
            packageItem => packageItem.id === item.id
          );
          return { ...packageBundle, quantity: item.quantity };
        })
        .map((item, index) => <CartItem item={item} key={index} />);
    }

    return (

     <div className="container">
        <div className="jumbotron bg-transparent border">
             <table>
             <thead></thead>
          {this.props.items.length ? (
            cartItems
          ) : (
            <h1>There are no items in your cart</h1>
          )}
     </table>
        {checkoutButton()}
        </div>
    

      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items,
  packages: state.travelPackageReducer.packages,
  user: state.userReducer.user
});

const mapDispatchToProps = dispatch => {
  return {
    checkoutCart: (item, history) => dispatch(checkoutCart(item, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList);
