import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Components
// import Sidebar from "./Sidebar";
import PackageList from "./Components/packages/PackageList";
import Signup from "./Components/authentication/SignupForm";
import Login from "./Components/authentication/LoginForm";
import Loading from "./Loading";
import PackageDetail from "./Components/packages/PackageDetail";

function App(props, { loading }) {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="content col-12">
          {loading ? (
            <Loading />
          ) : (
            <Switch>
              <Route path="/packages/:packageID" component={PackageDetail} />
              <Route path="/packages" component={PackageList} />
              {!!props.user ? (
                <>
                  {" "}
                  <Redirect to="/packages" />{" "}
                </>
              ) : (
                <>
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                </>
              )}
              <Redirect to="/packages" />
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
