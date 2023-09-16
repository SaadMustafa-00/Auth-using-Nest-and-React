import React from 'react'
import AreaChart from './AreaChart';
import SideContent from './SideContent';
function ChartDashboard() {
    return (
        <>
            <div className='m-4 p-4 border flex flex-wrap chart-reverse justify-center items-center gap-8  md:gap-16 bg-white' style={{ margin: "20px 10px 20px 75px" }}>
                <SideContent/>
                <AreaChart/>
            </div>
        </>
    )
}

export default ChartDashboard
