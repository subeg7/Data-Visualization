import React, { useEffect, useRef } from "react";
import * as d3 from 'd3';

import { connect } from 'react-redux';
import moment from "moment";

const BarChart = props => {

    const canvasRef = useRef(null);
    useEffect(() => {
        try {
            const formattedData = [
                { key: "Deaths", value: props.countryData.deaths, color: "red" },
                { key: "Cases", value: props.countryData.cases, color: "orange" },
                { key: "Recovered", value: props.countryData.recovered, color: "green" }
            ];
            drawBarChart(formattedData);
        } catch (e) {

        }
    }, []);

    const drawBarChart = (data) => {
        const canvasHeight = 300;
        const canvasWidth = 150;
        const maxHeight = 250;
        const barWidth = 40;
        const padding = 20;
        const scale = maxHeight / props.countryData.cases;

        const svgCanvas = d3.select(canvasRef.current)
            .append("svg")
            .attr("height", canvasHeight)
            .attr("width", canvasWidth)
            // .style("border", "1px solid red")

        svgCanvas.selectAll("rect")
            .data(data).enter()
            .append("rect")
            .attr("width", barWidth)
            .attr("height", (datapoint) => datapoint.value * scale)
            .attr("fill", (datapoint) => datapoint.color)
            .attr("x", (datapoint, iteration) => iteration * 45)
            .attr("y", (datapoint) => maxHeight - datapoint.value * scale);

        svgCanvas.selectAll("text")
            .data(data).enter()
            .append("text")
            .attr("y", maxHeight + 20)
            .attr("x", barWidth+10)
            .text(props.countryData.country)

    };
    return (
        <div className='row'>
            {/* <div key={props.countryData.country} >
                <h1>{props.countryData.country} </h1>
                <p>Last updated : {moment(props.countryData.updated).fromNow()}</p> */}
                <div className='row' ref={canvasRef} ></div>
            {/* </div> */}
        </div>

    );
}

export default connect(
    null,
    null
)(BarChart);

