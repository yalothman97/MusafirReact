import React, { Component } from "react";
import { connect } from "react-redux";
import { checkoutCart } from "../../redux/actions";
import CartItem from "./CartItem";

class CartList extends Component {
  checkout = () => {
    if (this.props.user) {
      let cartItemsArray = [];
      this.props.items.map(item => {
        cartItemsArray.push(item);
      });
      this.props.checkoutCart(cartItemsArray);
      alert("Thank you");
    } else {
      // this.props.navigation.navigate("Login");
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
        return <h1> There is no items in your cart </h1>;
      }
    };
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <div>
        {cartItems}
        {checkoutButton()}
        {/* <FlashMessage position="top" /> */}
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
