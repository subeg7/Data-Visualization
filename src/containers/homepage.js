import React, { useState, useEffect } from 'react';
import { getHomePageData } from '../redux/actions/homepageActions';
import { connect } from 'react-redux';
import BarChart from '../components/BarChart';
import styles from '../App.css';


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
          _countryData = element;
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
          <h1>{"Corona-Virus 2019 Country Comparison with Live Data"}</h1>
          <div className='rows'>
            <BarChart countryData={countryData} />
            <BarChart countryData={getDataByCountry("China")} />
            <BarChart countryData={getDataByCountry("India")} />
            <BarChart countryData={getDataByCountry("USA")} />
            <BarChart countryData={getDataByCountry("Iran")} />
            <BarChart countryData={getDataByCountry("Bangladesh")} />
            <BarChart countryData={getDataByCountry("Germany")} />
            <BarChart countryData={getDataByCountry("France")} />
            <BarChart countryData={getDataByCountry("Italy")} />
          </div>
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
        props.isSuccessful ? showCountry(props.match.params.country ?? "Nepal") : null
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
