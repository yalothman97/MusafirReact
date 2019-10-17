/**
 * Clean up "dead" code and "dead" imports
 */

import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Logout from "./Logout";
import { connect } from "react-redux";

// Logo
// import logo from "./assets/theindex.svg";

/**
 * You found this library...that's greeeat :/
 */
// Bootstrap
import { Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

/**
 * This can be a functional component
 */
class Navbar extends Component {
  render() {
    return (
      <div>
        {/* you don't need to wrap a div around a single component */}
        {/* when you finally start actually using this `react-bootstrap` navbar it 
          _might_ conflict heavily with `Link` from `react-router` */}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
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
