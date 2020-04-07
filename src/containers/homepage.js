import React, { useState, useEffect } from 'react';
import { getHomePageData } from '../redux/actions/homepageActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isHomepageApiLoading: state.homepage.isLoading,
    totalGlobalStats : state.homepage.totalGlobalStats,
  }
}
const Homepage = props => {
  // const[totalCount, increaseTotalCount] = useState(0);

  useEffect(() => {
    if(props.totalGlobalStats === null)
        props.getHomePageData();
  });

  return (
    <div>
      <p>TODO :: Home page </p>
      <h1> Api is currently : {props.isHomepageApiLoading ? "Loading" : "Successfully loaded"}</h1>
      {props.isHomepageApiLoading ? null :
        JSON.stringify(props.totalGlobalStats)
      }
    </div>
  );
}

export default connect(
  mapStateToProps,
  {
    getHomePageData,
  }
)(Homepage);
