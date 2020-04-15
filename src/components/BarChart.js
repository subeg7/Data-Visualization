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
        const canvasWidth = 300;
        const maxHeight = 300;
        const scale = maxHeight / props.countryData.cases;

        const svgCanvas = d3.select(canvasRef.current)
            .append("svg")
            .attr("height", canvasHeight)
            .attr("width", canvasWidth)
            .style("border", "1px solid red")
            .style("padding", "40px");

        svgCanvas.selectAll("rect")
            .data(data).enter()
            .append("rect")
            .attr("width", 40)
            .attr("height", (datapoint) => datapoint.value * scale)
            .attr("fill", (datapoint) => datapoint.color)
            .attr("x", (datapoint, iteration) => iteration * 45)
            .attr("y", (datapoint) => canvasHeight - datapoint.value * scale);

    };
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div key={props.countryData.country} >
                <h1>{props.countryData.country} </h1>
                <p>Last updated : {moment(props.countryData.updated).fromNow()}</p>
                <div ref={canvasRef} >
                    {/* canvas is displayed here */}
                </div>
            </div>
        </div>

    );
}

export default connect(
    null,
    null
)(BarChart);

