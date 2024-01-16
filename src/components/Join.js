import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Join = () => {
    const navigate=useNavigate();

    function joinHandler(){
        navigate("/signup")
    }
  return (
    <div className='mt-[280px] mx-auto flex  gap-[168px]  items-center'>
    {/* Descrpition */}
        <div className='flex flex-col gap-[50px]'>
         <h2 className='text-[#FFFFFF] text-[70px] font-caladea font-[700] leading-[80px]'>Join our <span className='text-[#BDA0FF]'>world's largest</span> <br/>learning platform today</h2>
         <p className='text-[#B0B0D1] font-[400] text-[24px] leading-[32px]'>Start learning by registering and get 30 days free trail</p>
        </div>

        {/* Buttons */}
        <div className='flex flex-col text-[#FFFFFF] gap-[47px]'>
           <button onClick={joinHandler}  className='w-[380px] h-[80px] rounded-[48px] bg-[#FF5156] text-[22px] font-[500] hover:bg-opacity-50'>Join as Instructor</button>
           <button onClick={joinHandler}  className='w-[380px] h-[80px] rounded-[48px] bg-[#7F56D9] text-[22px] font-[500] hover:bg-opacity-50'>Join as Student</button>
        </div>
    </div>
  )
}
