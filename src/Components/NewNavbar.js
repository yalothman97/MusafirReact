import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBView,
  MDBMask
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class NewNavbar extends React.Component {
  /**
   * Why are you using a constructor?
   * If you're going to copy paste, make it discriminant.
   * Change this and make it your own.
   */
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false // <-- you're not even using this
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <header>
          <MDBNavbar color="black" fixed="top" dark expand="md">
            <MDBContainer>
              <MDBNavbarBrand href="/">
                <strong className="navstyle">Musafir</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                    <MDBNavLink to="/">
                      <p className="navstyle">Home</p>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/packages">
                      <p className="navstyle">Packages</p>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/login">
                      <p className="navstyle">Login</p>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      <p className="navstyle">Sign Up</p>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">
                      <p className="navstyle">Cart</p>
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default NewNavbar;
