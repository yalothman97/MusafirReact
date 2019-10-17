import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Components

import PackageList from "./Components/travelPackage/PackageList";
import Signup from "./Authorization/SignupForm";
import Login from "./Authorization/LoginForm";
import Loading from "./Loading";
import PackageDetail from "./Components/travelPackage/PackageDetail";

function App({ loading, user }) {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="content col-12">
          {loading ? (
            <Loading />
          ) : (
            <Switch>
              <>
                <Route path="/package/:packageID" component={PackageDetail} />
                <Route path="/packages" component={PackageList} />
              </>
              {!!user ? (
                <Redirect to="/packages" />
              ) : (
                <>
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                </>
              )}
            </Switch>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.rootPackages.loading,
  user: state.user.user
});

export default connect(mapStateToProps)(App);
