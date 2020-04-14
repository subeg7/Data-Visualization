import React, { useEffect, useRef } from "react";
import * as d3 from 'd3';
import { svg } from "d3";

import { connect } from 'react-redux';

const BarChart = props => {

    const canvasRef = useRef(null);
    useEffect(() => {
        try {
            const formattedData = [props.countryData.cases, props.countryData.deaths, props.countryData.recovered];
            drawBarChart(formattedData);
        } catch (e) {
            
        }
    }, []);

    const drawBarChart = (data) => {
        const canvasHeight = 400;
        const canvasWidth = 600;
        const scale = 20;

        const svgCanvas = d3.select(canvasRef.current)
            .append("svg")
            .attr("width", 600)
            .attr("height", 400)
            .style("border", "5px solid black");

        svgCanvas.selectAll("rect")
            .data(data).enter()
            .append("rect")
            .attr("width", 50)
            .attr("height", (datapoint) => datapoint)
            .attr("fill", "orange")
            .attr("x", (datapoint, iteration) => iteration * 45)
            .attr("y", (datapoint) => canvasHeight - datapoint * scale)
            .text(dataPoint => dataPoint);

        svgCanvas.selectAll("text")
            .data(data).enter()
            .append("text")
            .attr("x", (dataPoint, i) => i * 45 + 10)
            .attr("y", (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
            .text(dataPoint => dataPoint)
    };
    return (<div ref={canvasRef}><h1>Country :{props.countryData.country} </h1></div>);
}

export default connect(
    null,
    null
)(BarChart);

