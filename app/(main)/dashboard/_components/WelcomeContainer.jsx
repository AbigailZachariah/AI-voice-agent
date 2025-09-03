"use client"

import { useUser } from '@/app/provider'
import React from 'react'

function WelcomeContainer() {
    const {user}=useUser();
    return (
        <div className='bg-gray-200 p-5 rounded-xl flex justify-between items-center mt-8 ml-8 mr-8'>
            <div>
                <h2 className='text-lg font-bold '> Welcome Back, {user?.name} </h2>
                <h2 className='text-gray-700'>AI-Driven Interviews, Hassel-Free </h2>
            </div>
           {user&&<Image src={user?.picture} alt='userAvatar' 
            width={40} height={40}
            className='rounded-full'
           />}
        </div>
    )
}

export default WelcomeContainer 