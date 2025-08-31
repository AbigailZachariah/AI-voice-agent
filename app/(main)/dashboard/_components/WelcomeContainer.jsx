"use client"

import React from 'react'

function WelcomeContainer() {
    
    return (
        <div>
            <div className='bg-gray-200 p-5 rounded-xl'>
                <h2 className='text-lg font-bold'> Welcome Back </h2>
                <h2 className='text-gray-700'>AI-Driven Interviews, Hassel-Free </h2>
            </div>
           {user&&<Image src={user?.picture} alt='userAvatar' width={50} height={50}/>}
        </div>
    )
}

export default WelcomeContainer 