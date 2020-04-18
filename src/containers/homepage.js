import React, { useState, useEffect } from 'react';
import { getHomePageData } from '../redux/actions/homepageActions';
import { connect } from 'react-redux';
import BarChart from '../components/BarChart';
import styles from '../App.css';
import HorizontalScroll from 'react-scroll-horizontal'


const mapStateToProps = state => {
  return {
    isLoading: state.homepage.isLoading,
    isSuccessful: state.homepage.isSuccessful,
    countriesData: state.homepage.data,
  }
}
const Homepage = props => {

  useEffect(() => {
    props.getHomePageData(props.match.params.countries ?? "Nepal");
  }, []);

  const showCountries = () => {
    if (props.countriesData) {
      return (
        <div>
          <h1>{"Corona-Virus 2019 Live Comparisons"}</h1>
          <div style={{height:400,width:600,"border-width":5,"border":"solid","padding-top":40}}>
            <HorizontalScroll>
              {
                props.countriesData.map(country => {
                  return <BarChart countryData={country} />
                })
              }
            </HorizontalScroll>
          </div>
        </div>
      )
    } else {
      return ("Sorry, so called " + props.match.params.countries + " country is not in earth. Search in your own planet");
    }
  }

  return (
    <div>
      <h1>{props.isLoading ? "Please wait" : null}</h1>
      {
        props.isSuccessful ? showCountries() : null
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
