import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Components

function PackageDetail({ packages, user, match }) {
  const { packageID } = match.params;
  const package = packages.find(package => package.id === +packageID);

  if (!package) return <Redirect to="/" />;

  const packageName = `${package.title} ${package.price}`;

  return (
    <div className="author">
      <div>
        <h3>{packageName}</h3>
        <img
          src={package.imageUrl}
          className="img-thumbnail img-fluid"
          alt={packageName}
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    packages: state.rootPackages.packages,
    user: state.user.user
  };
};

export default connect(mapStateToProps)(PackageDetail);
