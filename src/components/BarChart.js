import React, { useEffect, useRef } from "react";
import * as d3 from 'd3';

import { connect } from 'react-redux';
import moment from "moment";

const BarChart = props => {

    const canvasRef = useRef(null);
    useEffect(() => {
        try {
            const formattedData = [
                { key: "Cases", value: props.countryData.cases },
                { key: "Deaths", value: props.countryData.deaths },
                { key: "Recovered", value: props.countryData.recovered }
            ];
            drawBarChart(formattedData);
        } catch (e) {

        }
    }, []);

    const drawBarChart = (data) => {
        const canvasHeight = 300;
        const canvasWidth = 300;
        const scale = 20;

        const svgCanvas = d3.select(canvasRef.current)
            .append("svg")
            .attr("height", canvasHeight)
            .attr("width", canvasWidth)
            .style("border", "1px solid red")
            .style("padding", "40px");

        svgCanvas.selectAll("rect")
            .data(data).enter()
            .append("rect")
            .attr("width", 50)
            .attr("height", (datapoint) => datapoint.value * 20)
            .attr("fill", "orange")
            .attr("x", (datapoint, iteration) => iteration * 45)
            .attr("y", (datapoint) => canvasHeight - datapoint.value * scale);

        svgCanvas.selectAll("text")
            .data(data).enter()
            .append("text")
            .attr("x", (dataPoint, i) => i * 45 + 10)
            .attr("y", (dataPoint, i) => canvasHeight - dataPoint.value * scale - 10)
            .text(dataPoint => dataPoint.key)
    };
    return (
        <div>
            <div key={props.countryData.country} ref={canvasRef}>
                <h1>{props.countryData.country} </h1>
                <p>Last updated : {  moment(props.countryData.updated).fromNow()}</p>
            </div>
        </div>

    );
}

export default connect(
    null,
    null
)(BarChart);

