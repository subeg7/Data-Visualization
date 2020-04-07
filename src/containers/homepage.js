import React, { useState, useEffect } from 'react';
import { getHomePageData } from '../redux/actions/homepageActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isHomepageApiLoading : state.homepage.isLoading,
  }
}
const Homepage = props => {
    const[totalCount, increaseTotalCount] = useState(0);

    useEffect(()=>{
      props.getHomePageData();
    }); 

    return(
      <div>
          <p>TODO :: Home page </p>
          <h1> Api is currently : {props.isHomepageApiLoading?"Loading" : "Successfully loaded"}</h1>
      </div>
    );
}

export default connect(
  mapStateToProps,
  {
    getHomePageData,
  }
)(Homepage);
