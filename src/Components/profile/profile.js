import React, { Component } from "react";
import { connect } from "react-redux";
import instance from "../../redux/actions/instance";

// import profile from "../../redux/reducers/profile";
import { getProfile } from "../../redux/actions/";
import { black } from "ansi-colors";
import { BookingList } from "./previousBooking";

class Profile extends Component {
  componentDidMount() {
    if (this.props.user) {
      console.log(this.props.user);
      this.props.getProfile(this.props.user);
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      console.log(this.props.user);
      this.props.getProfile(this.props.user);
    }
  }
  render() {
    return (
      <div className="text-center">
        {console.log("profile Page")}
        {this.props.profile ? (
          <>
            <img
              src={
                this.props.profile.image
                  ? this.props.profile.image
                  : "https://initia.org/wp-content/uploads/2017/07/default-profile.png"
              }
            />
            <h1>
              {console.log(this.props.profile.user.username)}
              {this.props.profile.user.username}
            </h1>
            <h1>
              {this.props.profile.bio ? this.props.profile.bio : "......"}
            </h1>
          </>
        ) : (
          <></>
        )}
        <BookingList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    profile: state.profileReducer.profile
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
