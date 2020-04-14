import React, { useState, useEffect } from 'react';
import { getHomePageData } from '../redux/actions/homepageActions';
import { connect } from 'react-redux';
import BarChart from '../components/BarChart';

const mapStateToProps = state => {
  return {
    isLoading: state.homepage.isLoading,
    isSuccessful: state.homepage.isSuccessful,
    allCountriesData: state.homepage.allCountriesData,
  }
}
const Homepage = props => {
  const [countryData, setCountryData] = useState(null);
  const [isCountryFiltered, setFilteringStatus] = useState(false);

  useEffect(() => {
    if (props.allCountriesData === null)
      props.getHomePageData();
    if (!isCountryFiltered)
      getDataByCountry(props.match.params.country);

  });

  const getDataByCountry = (countryName) => {
    try {
      props.allCountriesData.forEach(element => {
        if (element.country === countryName) {
          setFilteringStatus(true);
          setCountryData(element);
        }
      });
    } catch (e) {
      setFilteringStatus(true);
      setCountryData(null);
    }
  };


  return (
    <div>
      <h1>{props.isLoading ? "Please wait" : null}</h1>
      <h1>{props.isSuccessful ? "Covid-2019 Data of " + props.match.params.country : null}</h1>
      {
        countryData? <BarChart countryData={countryData} /> : ("Sorry, so called " + props.match.params.country + " country is not in earth. Search in your own planet")
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
