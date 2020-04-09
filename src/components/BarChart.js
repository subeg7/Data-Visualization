import React, { useEffect, useRef } from "react";
import * as d3 from 'd3';
import { svg } from "d3";

const BarChart = props => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const data = [2, 4, 2, 6, 8];
        drawBarChart(data);
    });

    const drawBarChart = (data) => {
        // canvasRef.current.style = 'background-color: yellow;';
        console.log("drawing bar chart");

        const svgCanvas = d3.select(canvasRef.current)
            .append("svg")
            .attr("width", 600)
            .attr("height", 400)
            .style("border", "12px solid black")
    };



    return (<div ref={canvasRef}><h1>BarChart</h1></div>);
}

export default BarChart;
