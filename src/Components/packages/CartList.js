import React, { Component } from "react";
import { connect } from "react-redux";
import { checkoutCart } from "../../redux/actions";
import CartItem from "./CartItem";

class CartList extends Component {
  checkout = () => {
    if (this.props.user) {
      this.props.checkoutCart(this.props.items, this.props.history);
    } else {
      this.props.haitory.push("/login");
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
        return (
          <div className="mt-5 container">
            <h1 className="align-text text-center mb-5ç">
              {" "}
              Your cart is empty{" "}
            </h1>
          </div>
        );
      }
    };
    let items = this.props.items;
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
            {cartItems}
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
