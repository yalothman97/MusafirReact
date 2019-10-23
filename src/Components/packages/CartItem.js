import React, { Component } from "react";
import { removeItemFromCart } from "../../redux/actions";
import { connect } from "react-redux";

//Icons
import { Trash2 } from "react-feather";

class CartItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <tr className="">
        <td className="col-3" style={{ width: "10%" }}>
          <img
            className="roundcorners"
            style={{ height: "100px" }}
            src={item.image}
          />
        </td>
        <td className="col-3" style={{ width: "10%" }}>
          {item.title}
        </td>
        <td className="col-3">{item.quantity} person(s)</td>
        <td className="col-3">
          <button
            className="btn btn-light"
            onClick={() =>
              this.props.removeItemFromCart({
                id: item.id,
                quantity: item.quantity
              })
            }
          >
            <Trash2 color="#D36060" size="20" />
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: item => dispatch(removeItemFromCart(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
