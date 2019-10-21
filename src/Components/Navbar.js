import React, { Component } from "react";
import { Link } from "react-router-dom";

import { logout } from "../redux/actions";

import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <div className="container mt-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand" href="/">
            <h5>Musafir</h5>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li>
                <Link to="/">
                  <h6>Home</h6>
                </Link>
              </li>
              <li className="ml-5">
                <Link to="/packages">
                  <h6>Packages</h6>
                </Link>
              </li>
              {this.props.user ? (
                <>
                  <li className="ml-5">
                    {/* Will Redirect to profile */}
                    <h6>{this.props.user.username}</h6>
                  </li>
                  <li onClick={() => this.props.logout()} className="ml-5">
                    <h6>Logout</h6>
                  </li>
                </>
              ) : (
                <>
                  <li className="ml-5">
                    <Link to="/login">
                      <h6>Login</h6>
                    </Link>
                  </li>
                  <li className="ml-5">
                    <Link to="/signup">
                      <h6>Sign Up</h6>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
