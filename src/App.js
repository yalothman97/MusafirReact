import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Design
import "./App.css";

// Components
import PackageList from "./Components/packages/PackageList";
import Signup from "./Components/authentication/SignupForm";
import Login from "./Components/authentication/LoginForm";
import Loading from "./Loading";
import PackageDetail from "./Components/packages/PackageDetail";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Thankyou from "./Components/packages/Thankyou";

// import { CartList } from "./Components/packages/CartList";
import profile from "./Components/profile/profile";
import CartList from "./Components/packages/CartList";

import Bookings from "./Components/profile/Bookings";
function App(props, { loading }) {

  return (
    <>
      <Navbar />
      <div id="app" className="container-fluid">
        <div>
          <div>
            {!!loading ? (
              <Loading />
            ) : (
              <Switch>

                <Route path="/bookings" component={Bookings} />
                <Route path="/thankyou" component={Thankyou} />

                <Route path="/packages/:packageID" component={PackageDetail} />
                <Route path="/packages/" component={PackageList} />
                <Route path="/profile/" component={profile} />
                <Route path="/cart/" component={CartList} />
                <Route path="/signup/" component={Signup} />
                <Route path="/login/" component={Login} />

                <Route path="/" component={Home} />
                <Redirect to="/" />
              </Switch>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  loading: state.travelPackageReducer.loadingList,
  user: state.userReducer.user
});

export default connect(mapStateToProps)(App);
