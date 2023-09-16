import React from 'react';
import { useState } from "react"
import { TextField, Badge, Avatar } from '@mui/material'
import Logo from './Assets/logoCap.png'
import AvatarPic from './Assets/avatar.png'
function Menubar(props) {
  const [display, setdisplay] = useState("none")
  const [flag, setFlag] = useState(true)

  function open() {
    if (flag) {
      setdisplay('block')
      setFlag(false)
    }
    else {
      setdisplay('none')
      setFlag(true)
    }
  }

  function close() {
    if (flag) {
      setdisplay('block')
      setFlag(false)
    }
    else {
      setdisplay('none')
      setFlag(true)
    }
  }



  return (
    <>
      <section className='h-24 py-3  w-full bg-white flex items-center justify-between'>
        <div className=' h-48  shadow-md search-dropdown  py-4' style={{ display }}>
          <div className='flex justify-end px-6'>
            <button onClick={close} className='  text-blue-400'><span className="material-symbols-outlined text-blue-400">
              close
            </span></button>
          </div>
          <div className='py-2 px-6 w-full flex justify-center'>
            <TextField className='w-full' id="standard-basic" label="Search here" variant="standard" />
          </div>
          <div className='py-2  px-6 flex '>
            <button className="logout-btn flex justify-center items-center gap-2">Search<span className="material-symbols-outlined">
              search
            </span></button>
          </div>
        </div>
        <div className='flex justify-between gap-4'>
          <div>
            <div className='flex p-2 nav-search-box'>
              <div className=' flex'>
                <div className=' px-6  md:flex flex-col items-center'>
                  <img className='h-8 w-10' src={Logo} alt="" />
                  <h1 className='text-blue-400 italic font-semibold'>Capricorn</h1>
                </div>
                <div className=' md:block p-2'>
                  <form class="flex items-center">
                    <label for="voice-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
                        </svg>
                      </div>
                      <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here..." required />
                      <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                        </svg>
                      </button>
                    </div>
                    <button type="submit" class="search-nav-btn inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className=' '>
              {/* <button onClick={open} className='search-btn p-4  flex justify-center items-center'><span className="material-symbols-outlined">
                search
              </span></button> */}
              <lord-icon
                id='search-btn'
                onClick={open}
                src="https://cdn.lordicon.com/xfftupfv.json"
                trigger="hover"
                colors="primary:#30c9e8"
                style={{ width: "31px", height: "31px" }}>
              </lord-icon>
            </div>
          </div>

        </div>
        <div className='mx-4 flex items-center justify-center gap-6 md:gap-8'>
          <div>
            <Badge badgeContent={4} color="primary">
              <span className="material-symbols-outlined primary">
                sms
              </span>
            </Badge>
          </div>
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/psnhyobz.json"
              trigger="hover"
              colors="primary:#30c9e8"
              style={{ width: "31px", height: "31px" }}>
            </lord-icon>
          </div>
          <div onClick={props.profilePopUpCheck} className='mb-2'>
            <Avatar
              alt="Remy Sharp"
              src={AvatarPic}
              sx={{ width: 45, height: 45 }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Menubar;
