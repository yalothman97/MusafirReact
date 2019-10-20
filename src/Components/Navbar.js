import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Logout from "./authentication/Logout";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <>
          <NavLink
            className="nav-brand"
            to="/packages"
            style={{ paddingRight: "10px" }}
          >
            Musafir
          </NavLink>

          <NavLink
            className="nav-item"
            to="/packages"
            style={{ paddingRight: "10px" }}
          >
            Packages
          </NavLink>

          <>
            {!!this.props.user ? (
              <>
                <NavLink
                  className="nav-item"
                  to="/cart"
                  style={{ paddingRight: "10px" }}
                >
                  cart
                </NavLink>
                <NavLink
                  className="nav-item"
                  to="/profile"
                  style={{ paddingRight: "10px" }}
                >
                  my profile
                </NavLink>
                <Logout className="nav-item" style={{ paddingLeft: "25%" }} />
              </>
            ) : (
              <>
                <Link
                  className="nav-item "
                  style={{ paddingRight: "10px" }}
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="nav-item"
                  style={{ paddingRight: "10px" }}
                  to="/signup"
                >
                  Signup
                </Link>
              </>
            )}
          </>
        </>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};
export default connect(mapStateToProps)(Navbar);
