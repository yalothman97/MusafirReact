import React, { Component } from "react";
import { connect } from "react-redux";

const Profile = ({ user }) => {
  return (
    <>
      <h1>name:{user.username}</h1>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(Profile);
