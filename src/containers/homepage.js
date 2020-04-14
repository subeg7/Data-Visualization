import React, { useState, useEffect } from 'react';
import { getHomePageData } from '../redux/actions/homepageActions';
import { connect } from 'react-redux';
import BarChart from '../components/BarChart';

const mapStateToProps = state => {
  return {
    isLoading: state.homepage.isLoading,
    isSuccessful : state.homepage.isSuccessful,
    totalGlobalStats: state.homepage.allCountriesData,
  }
}
const Homepage = props => {

  useEffect(() => {
    if (props.totalGlobalStats === null)
      props.getHomePageData();
  });

  const getDataByCountry = (countryName) => {
    try {
      var filteredCountry = null;
      props.totalGlobalStats.forEach(element => {
        if (element.country == countryName) {
          filteredCountry = element;
          return true;
        }
      });
      return filteredCountry;
    } catch(e){
      return null;
    }
  };


  return (
    <div>
      <p>TODO :: Home page </p>
      <h1> Api is currently : {props.isLoading ? "Loading" : "Successfully loaded"}</h1>
      {
        props.isSuccessful ? <BarChart countryData={getDataByCountry("Germany")}/> : null
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
