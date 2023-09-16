import React from 'react'

function MidHeader() {
    return (
        <>
            <div className='m-4 p-4 flex flex-wrap items-center' style={{ margin: "20px 10px 20px 75px" }}>
               <h3 className='w-64 text-sm md:text-md text-gray-500 mr-1 new-font grow'>Your Analytics this Month</h3>
               <div className='h-1 bg-gray-200 w-full border mt-1  grow'></div>
            </div>
        </>
    )
}

export default MidHeader
