import React from 'react'
import Chart from "react-apexcharts";
function ContentBar() {
    return (
        <>
            <div className='m-4 flex gap-3 flex-wrap' style={{ margin: "10px 10px 20px 75px" }}>
                <div className='h-36 flex items-center gap-5 p-6 rounded-xl bg-white border w-72 grow'>
                    <div className='h-20 flex items-center justify-center w-20 shadow-red-300 shadow'>
                        <lord-icon
                            src="https://cdn.lordicon.com/kipaqhoz.json"
                            trigger="morph"
                            colors="primary:#30c9e8"
                            style={{ width: "40px", height: "40px" }}>
                        </lord-icon>
                    </div>
                    <div>
                        <h1 className='font-semibold text-lg'>Total Posts</h1>
                        <p className='text-lg text-blue-400'>42</p>
                    </div>
                </div>
                <div className='h-36 flex items-center gap-5 p-6 rounded-xl bg-white border w-72 grow'>
                    <div className='h-20 flex items-center justify-center w-20 shadow-red-300 shadow'>
                        <lord-icon
                            src="https://cdn.lordicon.com/pnhskdva.json"
                            trigger="hover"
                            colors="primary:#30c9e8"
                            style={{ width: "40px", height: "40px" }}>
                        </lord-icon>
                    </div>
                    <div>
                        <h1 className='font-semibold text-lg'>Total Likes</h1>
                        <p className='text-lg text-blue-400'>1012</p>
                    </div>
                </div>
                <div className='h-36 flex items-center gap-5 p-6 rounded-xl bg-white border w-72 grow'>
                    <div className='h-20 flex items-center justify-center w-20 shadow-red-300 shadow'>
                        <lord-icon
                            src="https://cdn.lordicon.com/vufjamqa.json"
                            trigger="hover"
                            colors="primary:#30c9e8"
                            style={{ width: "40px", height: "40px" }}>
                        </lord-icon>
                    </div>
                    <div>
                        <h1 className='font-semibold text-lg'>Total Comments</h1>
                        <p className='text-lg text-blue-400'>421</p>
                    </div>
                </div>
                <div className='h-36 flex items-center gap-5 p-6 rounded-xl bg-white border w-72 grow'>
                    <div className='h-20 flex items-center justify-center w-20 shadow-red-300 shadow'>
                        <lord-icon
                            src="https://cdn.lordicon.com/wxhtpnnk.json"
                            trigger="hover"
                            colors="primary:#30c9e8"
                            style={{ width: "40px", height: "40px" }}>
                        </lord-icon>
                    </div>
                    <div>
                        <h1 className='font-semibold text-lg'>Total Shares</h1>
                        <p className='text-lg text-blue-400'>34</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentBar
