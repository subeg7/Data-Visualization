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
    if (props.totalGlobalStats) {
      var filteredCountry = null;
      props.totalGlobalStats.forEach(element => {
        if (element.country === countryName) {
          filteredCountry = element;
        }
      });
      if (filteredCountry) {
        return [filteredCountry.cases,filteredCountry.deaths,filteredCountry.recovered];
      } else {
        return [0, 0, 1, 0, 1]; //TODO :: handle country not found
      }
    } else {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
  };


  return (
    <div>
      <p>TODO :: Home page </p>
      <h1> Api is currently : {props.isHomepageApiLoading ? "Loading" : "Successfully loaded"}</h1>
      {
        props.isHomepageApiLoading ? null : <BarChart countryData={getDataByCountry("Nepal")}  />
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
