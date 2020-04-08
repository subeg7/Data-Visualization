import React, { Component, useRef, useEffect } from 'react';
import * as d3 from 'd3';

const DatapageHooks = props => {
    useEffect(() => {
        tempRef.current.style = 'background-color: green;'
    })
    const temperatureData = [8, 5, 13, 9, 12];
    const tempRef = useRef(null);
    d3.select(tempRef)
            .selectAll("h1")
            .data(temperatureData)
            .enter()
            .append("h2")
            .text("New Temperature");
    return (<div ref={tempRef}><h1>DatapageHooks</h1></div>);
  }
export default DatapageHooks;