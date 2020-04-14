import React, { Component, useRef, useEffect } from 'react';
import * as d3 from 'd3';

const DatapageHooks = props => {
  useEffect(() => {
    // tempRef.current.style = 'background-color: green;';
    d3.select(tempRef.current)
      .selectAll("h2")
      .data(temperatureData)
      .enter()
      .append("h2")
      .text((datapoint) => datapoint + " degrees")
      .style("background-color", "red");
  })
  const temperatureData = [8, 5, 13, 9, 12];
  const tempRef = useRef(null);

  return (<div ref={tempRef}><h1>DatapageHooks</h1></div>);
}
export default DatapageHooks;