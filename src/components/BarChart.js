import React,{ useEffect, useRef } from "react";
import * as d3 from 'd3';

const BarChart = props =>{
  const canvasRef = useRef(null);

    useEffect(()=>{
        const data = [ 2, 4, 2, 6, 8 ];
        drawBarChart(data);
    });

    const drawBarChart=data=>{
        
    };

    return (<div ref={canvasRef}></div> );
}

export default BarChart;
