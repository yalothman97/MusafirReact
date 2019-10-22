import React, { Component } from "react";
import { connect } from "react-redux";
import instance from "../../redux/actions/instance";

// import profile from "../../redux/reducers/profile";
import { getProfile } from "../../redux/actions/";

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
      <>
        {this.props.profile ? (
          <>
            <h1>name: {this.props.profile.user.username}</h1>
            <h4>bio: {this.props.profile.user.bio}</h4>

            <img src={this.props.profile.image} />
          </>
        ) : (
          <></>
        )}
      </>
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
