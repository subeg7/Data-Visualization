import React, { useEffect, useRef } from "react";
import * as d3 from 'd3';
import { BarChart } from "react-d3-components";

import { connect } from 'react-redux';
import moment from "moment";

const CustomBarChart = props => {

    useEffect(() => {

    }, []);

    let data = [
        {
            label: 'somethingA',
            values: [{ x: props.countryData.country, y: props.countryData.cases }]
        },
        {
            label: 'somethingB',
            values: [{ x: props.countryData.country, y: props.countryData.recovered }]
        },
        {
            label: 'somethingC',
            values: [{ x: props.countryData.country, y: props.countryData.deaths }]
        },

    ];
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div key={props.countryData.country} >
                <h1>{props.countryData.country} </h1>
                <p>Last updated : {moment(props.countryData.updated).fromNow()}</p>
                <BarChart groupedBars
                    data={data}
                    width={400}
                    height={400}
                    margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
                />
            </div>
        </div>



    );
}

export default connect(
    null,
    null
)(CustomBarChart);

