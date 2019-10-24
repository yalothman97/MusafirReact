import React, { Component } from "react";
import { removeItemFromCart } from "../../redux/actions";
import { connect } from "react-redux";

class CartItem extends Component {
  render() {
    const item = this.props.item;
    console.log(item);
    return (
      <div>
        <div>
          <h2> {item.title} </h2>
          <h4>{item.quantity} person(s)</h4>
        </div>
        <div>
          <button onClick={() => this.props.removeItemFromCart(item)}>
            trash
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: i => dispatch(removeItemFromCart(i))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
