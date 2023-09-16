import React from 'react'
import AvatarPic from '../DashboardComponents/Assets/avatar.png'
import { TextField, Badge, Avatar } from '@mui/material'
function ProfilePopup() {
    return (
        <>
            <div className='mx-auto'>
                <div className='py-6  bg-white shadow-lg border profile-pop'>
                    <div className='flex px-4 gap-3 items-center '>
                        <div className='mb-2'>
                            <Avatar
                                alt="Remy Sharp"
                                src={AvatarPic}
                                sx={{ width: 50, height: 50 }}
                            />
                        </div>
                        <div>
                            <h1 className='new-font text-lg'>Saad Mustafa</h1>
                            <p className='text-sm -mt-1'>saadmustafa2578@gmail.com</p>
                        </div>
                    </div>
                    <hr className=' mt-4 mb-2' />
                    <div className='w-full text-gray-500  h-12 flex items-center px-4 text-md  hover:bg-gray-100'>Profile</div>
                </div>
            </div>
        </>
    )
}

export default ProfilePopup
