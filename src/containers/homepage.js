import React, { useState, useEffect } from 'react';
import { getHomePageData } from '../redux/actions/homepageActions';
import { connect } from 'react-redux';
import BarChart from '../components/BarChart';

const mapStateToProps = state => {
  return {
    isHomepageApiLoading: state.homepage.isLoading,
    totalGlobalStats: state.homepage.allCountriesData,
  }
}
const Homepage = props => {
  // const[totalCount, increaseTotalCount] = useState(0);

  useEffect(() => {
    if (props.totalGlobalStats === null)
      props.getHomePageData();
  });

  const getDataByCountry = (countryName) => {
    const filterredCountryData = props.totalGlobalStats.filter((element) => {
      if (element.country === countryName)
        return element;
    }
    );
    return [1, 2, 3, 4, 5, 6, 7, 8, 9];
  };

  return (
    <div>
      <p>TODO :: Home page </p>
      <h1> Api is currently : {props.isHomepageApiLoading ? "Loading" : "Successfully loaded"}</h1>
      {
        props.isHomepageApiLoading ? null : <BarChart countryData={getDataByCountry("Nepal")} country={"Nepal"} />
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
