import React, { useState, useEffect } from 'react';
import { getHomePageData } from '../../redux/actions/homepageActions';
import { connect } from 'react-redux';
import ChartRow from '../ChartRow';


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

  return (
    <div>
      <h1>{props.isLoading ? "Please wait" : null}</h1>
      {props.countriesData ? <ChartRow countries={props.countriesData} /> : null}
    </div>
  );

}



export default connect(
  mapStateToProps,
  {
    getHomePageData,
  }
)(Homepage);
