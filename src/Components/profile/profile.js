import React, { Component } from "react";
import { connect } from "react-redux";
import instance from "../../redux/actions/instance";

// import profile from "../../redux/reducers/profile";
import { getProfile } from "../../redux/actions/profile";

const Profile = ({ profile }) => {
  getProfile();
  return (
    <>
      <h1>name:{console.log(profile)}</h1>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user.user,
    profile: state.profile.profile
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => dispatch(getProfile())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
