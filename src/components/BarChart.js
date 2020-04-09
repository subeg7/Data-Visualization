import React, { useEffect, useRef } from "react";
import * as d3 from 'd3';
import { svg } from "d3";

const BarChart = props => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const data = [3, 5, 1, 7, 2];
        drawBarChart(data);
    });

    const drawBarChart = (data) => {
        // canvasRef.current.style = 'background-color: yellow;';
        console.log("drawing bar chart");

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
            .attr("width", 40)
            .attr("height", (datapoint) => datapoint * 20)
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



    return (<div ref={canvasRef}><h1>BarChart</h1></div>);
}

export default BarChart;
