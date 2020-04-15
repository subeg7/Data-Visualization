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

  useEffect(() => {
    if (props.allCountriesData === null)
      props.getHomePageData();
  });

  const getDataByCountry = (countryName) => {
    var _countryData = null;
    try {
      props.allCountriesData.forEach(element => {
        if (element.country === countryName) {
          _countryData =  element;
        }
      });
      return _countryData;
    } catch (e) {
      return null;
    }
  };

  const showCountry = (countryName) => {
    const countryData = getDataByCountry(countryName);
    if (countryData) {
      return (
        <div>
          <h1>{"Covid-2019 Data of " + countryName}</h1>
          <BarChart countryData={countryData} />;
        </div>
      )
    } else {
      return ("Sorry, so called " + countryName + " country is not in earth. Search in your own planet");
    }
  }

  return (
    <div>
      <h1>{props.isLoading ? "Please wait" : null}</h1>
      {
        props.isSuccessful  ? showCountry(props.match.params.country ?? "Nepal") : null
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
