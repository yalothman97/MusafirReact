import React, { Component } from "react";

import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

// import profile from "../../redux/reducers/profile";
import { getProfile } from "../../redux/actions/";

import { black } from "ansi-colors";
import { BookingList } from "./previousBooking";

import Loading from "../../Loading";


class Profile extends Component {
  state = {
    ready: false
  };
  componentDidMount() {
    setTimeout(() => this.setState({ ready: true }), 1000);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user && this.props.user === null) {
      return <Redirect to="/" />;
    }
  }
  render() {
    if (!this.state.ready) {
      return <Loading />;
    }
    if (!this.props.user) {
      return <Redirect to="/" />;
    }
    return (

      <div className="container">
        <div className="mt-5">
          <div className="row text-center align-center mx-auto">
            <div className="col-12">
              <img
                className="circlize"
                style={{ height: "250px" }}
                src={
                this.props.profile.image
                  ? this.props.profile.image
                  : "https://initia.org/wp-content/uploads/2017/07/default-profile.png"
              }
              />
            </div>
          </div>
          <div className="row text-center align-center mx-auto">
            <div className="col-12">
              <h1 className=" text-center mt-5">{this.props.user.username}</h1>
            </div>
          </div>

          <div className="row text-center align-center mx-auto">
            <div className="col-12">
              <p>{this.props.profile.bio ? this.props.profile.bio : "......"}</p>
              <p>
                From {this.props.profile.state}, {this.props.profile.country}
              </p>
            </div>

            <div className="col-12 text-center align-center mx-auto">
              <Link to="/bookings">My Bookings</Link>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    profile: state.profileReducer.profile,
    loading: state.profileReducer.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProfile: user => dispatch(getProfile(user))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
