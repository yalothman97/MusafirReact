import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Logout from "../Authorization/Logout";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <div>
        <h3>Musafir</h3>
        <section>
          <h4 className="menu-item active">
            <NavLink to="/Packages">Packages</NavLink>
          </h4>
        </section>
        <div>
          {!!this.props.user ? (
            <Logout />
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};
export default connect(mapStateToProps)(Navbar);
