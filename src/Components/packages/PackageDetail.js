import React, { Component } from "react";

import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actions";
import { getTravelPackageDetail } from "../../redux/actions/";
import Loading from "../../Loading";

class PackageDetail extends Component {
  state = {
    quantity: 0
  };

  addItemHandler = (packageItem, quantity) => {
    this.props.addItem(packageItem, quantity);
  };
  travelPackage = {
    id: 1,
    title: "1 Week in Barcelona",
    image:
      "https://www.fodors.com/wp-content/uploads/2018/07/shutterstock_552368572.jpg",
    price: 399,
    ratings: { value: 3.7, attractions: 4.2, shopping: 3.3 },
    noOfRatings: 24,
    featured: true,
    description:
      "I dont know what to write here, but i want to make it long enough to see how it will look on the page and i was advised not to use dummy data and I beleive this is not dummy data isnt it? To find more slack me"
  };

  render() {
    // if (false) return <Loading />; //if(loading)

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
          src={this.travelPackage.image}
          style={{
            height: 300,
            justifyContent: "center",
            alignItems: "center"
          }}
        />
        <div>
          <div>
            <div>
              {this.travelPackage.description + "\n"}
              <div>{this.travelPackage.price} KD</div>
            </div>

            <img src={this.travelPackage.image} />
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
              this.addItemHandler(this.travelPackage, this.state.quantity)
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
  travelPackageReducer: state.travelPackageReducer
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
