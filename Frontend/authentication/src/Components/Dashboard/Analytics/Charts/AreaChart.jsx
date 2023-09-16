import React from 'react'
import { useState } from 'react';
import Chart from "react-apexcharts";
function AreaChart() {
    const [areaChart, setAreaChart] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "series-1",
                data: [35, 40, 45, 90, 49, 60, 70, 91]
            },

        ]
    });
    return (
        <>
            <div className='mt-6 mx-auto p-5'>
                <Chart
                    options={areaChart.options}
                    series={areaChart.series}
                    type="area"
                    
                    className='chart-width'
                />
            </div>
        </>
    )
}

export default AreaChart
