import React, { Component } from "react";

// Components

import PackageCard from "./PackageCard";

import { connect } from "react-redux";
import Navbar from "./Navbar";

class Home extends Component {
  render() {
    const authorCards = this.props.filteredAuthors.map(author => (
      <AuthorCard key={author.id} author={author} />
    ));

    return (
      <div>
        <h3 className="logo">Musafir</h3>

        <div className="row">{packageCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filteredPackages: state.rootPackages.filteredPackages
  };
};

export default connect(mapStateToProps)(Home);
