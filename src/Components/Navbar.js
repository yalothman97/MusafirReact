import React, { Component } from "react";
import { Link } from "react-router-dom";

import { logout } from "../redux/actions";

import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <div className="container mt-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <Link to="/">
            <h5>Musafir</h5>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
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
              <li className="ml-5 mt-2">
                <Link to="/cart">
                  <h6>Cart</h6>
                </Link>
              </li>
              {this.props.user ? (
                <>
                  <li className="nav-item dropdown">
                    <h6
                      className=" ml-5 dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {this.props.user.username}
                    </h6>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li className="ml-5 mt-2">
                        <Link to="/profile">
                          <h6>Profile</h6>
                        </Link>
                      </li>

                      <div className="dropdown-divider"></div>

                      <div className="dropdown-divider"></div>

                      <li
                        onClick={() => this.props.logout()}
                        className="ml-5 mt-2"
                      >
                        <Link>
                          <h6>Logout</h6>
                        </Link>
                      </li>
                    </div>
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
