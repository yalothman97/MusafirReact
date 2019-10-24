import React, { Component } from "react";

import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actions";
import { getTravelPackageDetail } from "../../redux/actions/";
import Loading from "../../Loading";

//Icons
import { PlusCircle, MinusCircle } from "react-feather";

class PackageDetail extends Component {
  state = {
    quantity: 1,
    added: false
  };
  componentDidMount() {
    this.props.getTravelPackageDetail(this.props.match.params.packageID);
  }
  addItemHandler = (packageItem, quantity) => {
    this.setState({ added: true });
    setTimeout(() => this.setState({ added: false }), 3000);
    this.props.addItem(packageItem, quantity);
  };
  travelPackage = this.props.packageItem;

  render() {
    let negbutton = () => {
      if (this.state.quantity) {
        return (
          <MinusCircle
            onClick={() => {
              if (this.state.quantity !== 1) {
                this.setState({ quantity: this.state.quantity - 1 });
              }
            }}
            color="#CDB2AB"
            size="35"
          />
        );
      }
    };

    return (
      <div className="container">
        <div className="mt-5">
          <h1 className="text-center mt-5 mb-5">Book</h1>
        </div>
        {this.state.added && (
          <div className="alert alert-success" role="alert">
            Added to Cart
          </div>
        )}
        <div className="row mb-5">
          <div className="col-6">
            <img
              className="img-fluid roundcorners"
              src={this.props.packageItem.image}
            />
            <p className="mt-3">{this.props.packageItem.description}</p>
          </div>

          <div className="col-6">
            <text className="title">{this.props.packageItem.title}</text>
            <p>{this.props.packageItem.price} KWD</p>

            <div
              className="row"
              style={{ borderBottomWidth: 0, flexDirection: "row" }}
            >
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <p style={{ marginRight: 100 }}>Number of travelers:</p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                {negbutton()}
                {this.state.quantity}
                <PlusCircle
                  onClick={() =>
                    this.setState({ quantity: this.state.quantity + 1 })
                  }
                  color="#CDB2AB"
                  size="35"
                />
              </div>
            </div>
            <button
              type="button"
              class="btn btn-light"
              onClick={() =>
                this.addItemHandler(this.props.packageItem, this.state.quantity)
              }
            >
              Add
            </button>
          </div>
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
