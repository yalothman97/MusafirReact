import React, { Component } from "react";
import { removeItemFromCart } from "../../redux/actions";
import { connect } from "react-redux";

class CartItem extends Component {
  render() {
    const item = this.props;
    console.log(item);
    return (
      <div>
        <div>
          <div> {item.title} </div>

          <div>{item.quantity} person(s)</div>
          <img src={item.image} />
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
