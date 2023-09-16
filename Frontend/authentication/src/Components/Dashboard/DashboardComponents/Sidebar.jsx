import { useState } from "react"
import React from 'react'
import {useNavigate} from 'react-router-dom'
function Sidebar(props) {
    const [width, setWidth] = useState("67px")
    const [flag, setFlag] = useState(false)
    const [dashboard, setDashboard] = useState("")
    const [store, setStore] = useState("")
    const [message, setMessage] = useState("")
    const [analytics, setAnalytics] = useState("")
    const [team, setTeam] = useState("")
    const [logOut, setLogOut] = useState("")
    const navigate = useNavigate();

    function open() {
        if (flag) {
            setWidth('67px')
            setFlag(false)
            setDashboard("")
            setStore("")
            setMessage("")
            setAnalytics("")
            setTeam("")
            setLogOut("")
        }
        else {
            setWidth('280px')
            setFlag(true)
            setDashboard("Dashboard")
            setStore("Store")
            setMessage("Message")
            setAnalytics("Analytics")
            setTeam("Team")
            setLogOut("Logout")
        }
    }

    const backToLogin=()=>{
        navigate('/Login')
    }

    return (
        <>

            <section className='Dashboard-section '>
                <div className=' p-2 py-4 h-80 sidebar-menu flex flex-col gap-8 md:gap-0 justify-start md:justify-between' style={{ width }}>
                    <section>
                        <article className="flex gap-2 p-2 mb-10 pt-3 my-2  .menu-items-heading"  >
                            <input type="checkbox" id="checkbox1" className="checkbox1 visuallyHidden"></input>
                            <label htmlFor="checkbox1">
                                <div className="hamburger hamburger1" onClick={open}>
                                    <span className="bar bar1"></span>
                                    <span className="bar bar2"></span>
                                    <span className="bar bar3"></span>
                                    <span className="bar bar4"></span>
                                </div>
                            </label>
                        </article>
                        <article className="">
                            <div className="flex gap-2 p-2 pt-3 items-center menu-items"  >
                                <div className="">
                                    <button><lord-icon
                                        src="https://cdn.lordicon.com/osuxyevn.json"
                                        trigger="hover"
                                        colors="primary:#30c9e8"
                                        style={{ height: "31px", width: "31px", margin: "4px 0px 0px 0px" }}>
                                    </lord-icon></button>
                                </div>
                                <div className="">
                                    <button  className="text-lg " htmlFor="/">{dashboard}</button>
                                </div>
                            </div>
                            <div className="flex gap-2 p-2 pt-3 items-center  menu-items"  >
                                <div className="">
                                    <button><lord-icon
                                        src="https://cdn.lordicon.com/hyhnpiza.json"
                                        trigger="hover"
                                        colors="primary:#30c9e8"

                                        style={{ height: "31px", width: "31px", margin: "5px 0px 0px 0px" }}>
                                    </lord-icon></button>
                                </div>
                                <div className="">
                                    <label className="text-lg" htmlFor="/">{store}</label>
                                </div>
                            </div>
                            <div className="flex gap-2 p-2 pt-3 items-center menu-items"  >
                                <div className="">
                                    <button><lord-icon
                                        src="https://cdn.lordicon.com/hpivxauj.json"
                                        trigger="hover"
                                        colors="primary:#30c9e8"
                                        className="mtl-2"
                                        style={{ height: "31px", width: "31px", margin: "6px 0px 0px 0px" }}>
                                    </lord-icon></button>
                                </div>
                                <div className="">
                                    <label className="text-lg" htmlFor="/">{message}</label>
                                </div>
                            </div>
                            <div onClick={props.analytics} className="flex gap-2 p-2 pt-3 items-center menu-items"  >
                                <div className="">
                                    <button><lord-icon
                                        src="https://cdn.lordicon.com/akuwjdzh.json"
                                        trigger="hover"
                                        colors="primary:#30c9e8"
                                        className="mtl-2"
                                        style={{ height: "31px", width: "31px", margin: "5px 0px 0px 0px" }}>
                                    </lord-icon></button>
                                </div>
                                <div className="">
                                    <label className="text-lg" htmlFor="/">{analytics}</label>
                                </div>
                            </div>
                            <div className="flex gap-2 p-2 pt-3 items-center menu-items"  >
                                <div className="">
                                    <button><lord-icon
                                        src="https://cdn.lordicon.com/bhfjfgqz.json"
                                        trigger="hover"
                                        colors="primary:#30c9e8"
                                        className="mtl-2"
                                        style={{ height: "31px", width: "31px", margin: "5px 0px 0px 0px" }}>
                                    </lord-icon></button>
                                </div>
                                <div className="">
                                    <label className="text-lg" htmlFor="/">{team}</label>
                                </div>
                            </div>
                        </article>
                    </section>
                    <div className="gap-2 mb-8"  >
                        <div className="flex gap-2 p-2 pt-3 mt-4 items-center "  >
                        <button onClick={backToLogin} className="logout-btn flex justify-center items-center gap-2">{logOut}<span className="material-symbols-outlined">
                                logout
                            </span></button>
                        </div>
                    </div>
                </div>

            </section >

        </>
    )

}

export default Sidebar
