import { useState } from "react"
import React from 'react'
import Sidebar from "../DashboardComponents/Sidebar"
import Menubar from "../DashboardComponents/Menubar"
import Header from "../Analytics/Header"
import ContentBar from "../Analytics/ContentBar"
import MidHeader from "../Analytics/MidHeader"
import ChartDashboard from "../Analytics/Charts/ChartDashboard"
import ProfilePopup from "../Popups/ProfilePopup"
function Dashboard() {

    const [analyticsFlag, setAnalyticsFlag] = useState(true);
    const [profilePopUp, setProfilePopUp] = useState(false);
    const analytics = () => {
        if (!analyticsFlag) {
            setAnalyticsFlag(true)
            // setProfilePopUp(false)
        }
        else {
            setAnalyticsFlag(false)
            
        }
    }
    const profilePopUpCheck = () => {
        if (!profilePopUp) {
            setProfilePopUp(true)
        }
        else {
            setProfilePopUp(false)
        }
    }

    return (
        <>
                {profilePopUp && <ProfilePopup />}
            <section className="flex Dashboard containers mx-auto">
               

                <article>
                    <Sidebar analytics={analytics} />
                </article>
                <article className="w-full">
                    <Menubar profilePopUpCheck={profilePopUpCheck} />
                    {/* Analytics Section */}
                    <div>
                        {analyticsFlag && <Header />}
                        {analyticsFlag && <ContentBar />}
                        {analyticsFlag && <MidHeader />}
                        {analyticsFlag && <ChartDashboard />}
                       
                    </div>
                    {/* Team Section */}
                    <div>

                    </div>
                </article>
            </section>
        </>
    )
}

export default Dashboard
