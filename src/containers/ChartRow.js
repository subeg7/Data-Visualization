import React from 'react';
import BarChart from '../components/BarChart';
import HorizontalScroll from 'react-scroll-horizontal'



const ChartRow = props => {
    return (
        <div>
            <h1>{"Corona-Virus 2019 Live Comparisons"}</h1>
            <div style={{}}>
                <div style={{ height: 350, width: "100%", "border-width": 5, "border": "solid", "padding-top": 40 }}>
                    <HorizontalScroll>
                        {
                            props.countries.map(country => {
                                return <BarChart countryData={country} />
                            })
                        }
                    </HorizontalScroll>
                </div>
            </div>
        </div>
    );

}

export default ChartRow;