import React, { Component } from "react";

import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actions";
import { getTravelPackageDetail } from "../../redux/actions/";
import Loading from "../../Loading";

class PackageDetail extends Component {
  state = {
    quantity: 0
  };
  componentDidMount() {
    console.log(this.props.match.params.packageID);
    this.props.getTravelPackageDetail(this.props.match.params.packageID);
  }
  addItemHandler = (packageItem, quantity) => {
    this.props.addItem(packageItem, quantity);
  };
  travelPackage = this.props.packageItem;

  render() {
    console.log("THE TRAVELPACKAGE", this.props.packageItem);
    let negbutton = () => {
      if (this.state.quantity) {
        return (
          <button
            style={{ margin: 3, width: 40 }}
            onClick={() => this.setState({ quantity: this.state.quantity - 1 })}
          >
            <div>-</div>
          </button>
        );
      }
    };

    return (
      <div>
        <img
          src={""}
          style={{
            height: 300,
            justifyContent: "center",
            alignItems: "center"
          }}
        />
        <div>
          <div>
            <div>
              {this.props.packageItem.title}
              <div>{this.props.packageItem.price} KD</div>
            </div>

            <img src={this.props.packageItem.image} />
          </div>
          <div style={{ borderBottomWidth: 0, flexDirection: "row" }}>
            <div style={{ marginRight: 100 }}>Number of travelers:</div>
            <button
              style={{ margin: 3, width: 40 }}
              onClick={() =>
                this.setState({ quantity: this.state.quantity + 1 })
              }
            >
              <div>+</div>
            </button>
            <div>{this.state.quantity}</div>
            {negbutton()}
          </div>
          <button
            onClick={() =>
              this.addItemHandler(this.props.packageItem, this.state.quantity)
            }
          >
            <div>Add</div>
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  // travelPackageReducer: state.travelPackageReducer
  packageItem: state.travelPackageReducer.packageItem
});

const mapDispatchToProps = dispatch => {
  return {
    //Real parameters names
    addItem: (packageItem, quantity) =>
      dispatch(addItemToCart(packageItem, quantity)),
    getTravelPackageDetail: packageObj =>
      dispatch(getTravelPackageDetail(packageObj))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PackageDetail);
