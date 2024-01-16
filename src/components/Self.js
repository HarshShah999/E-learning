import React from 'react'
import illustrate2 from "../assets/illustrate2.png"
import { RiGraduationCapFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { PiUsersThreeFill } from "react-icons/pi";
import bulb from "../assets/bulb.png"
import pen from "../assets/pen.png"
import arrow from "../assets/arrow.png"



export const Self = () => {
  return (
    <div className='mt-[280px]  flex space-x-[70px]'>
       <div className="flex flex-col gap-[42px] w-[556px] " >
        <h2 className='w-[100%] font-caladea font-[700] text-[70px] text-[#FFFFFF] leading-[80px] tracking-[-0.2px]'>What is our
        <div className='text-[#BDA0FF]'>difference</div></h2>
        <p className='text-[#B0B0D1] font-[500] text-[22px] leading-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ex ea commodo consequat. </p>
        <p className='text-[#B0B0D1] font-[500] text-[22px] leading-[40px]'> ut labore et dolore magna aliqua. ex ea commodo consequat. </p>

        <button className='rounded-[47px] bg-[#7F56D9] w-[185px] h-[65px] text-[#FFFFFF] hover:bg-opacity-75 transition-all duration-200'>Learn More</button>
       </div>
       <div className='relative'>
       <div className="w-[436px] h-[659px] bg-[#BFE3C645] rounded-[242.5px] flex items-center justify-center">
         
         <img src={illustrate2} width="400px" height=" 700px" className='rounded-[242.5px]  shadow-2xl   shadow-indigo-500/50 '/>

         
          
     
     
       </div>
       <img src={bulb} width="108px" height="101px" className='absolute left-[370px] top-[53px] ani_up1'/>
       <img src={pen} width="131px" height="113px" className='absolute  top-[53px] ani_up2'/>
       <img src={arrow} width="66px" height="66px" className='absolute  left-[370px] bottom-[50px] ani_up3 '/>


       </div>
       {/* followers */}
       <div>
           <ul className='flex flex-col items-baseline gap-24'>
              <li className='flex gap-6 justify-center items-center '>
                <div className='bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 w-[84px] h-[84px] rounded-full flex justify-center items-center text-[#FFFFFF] text-[44px]'>
                <RiGraduationCapFill />
                </div>
                <div className='flex flex-col'>
                <p className='text-[#FFFFFF] text-[32px] font-[700] leading-[40px] font-caladea'>300</p>
                <p className='text-[#B0B0D1] text-[20px] font-[400] leading-[28px]'>Instructor</p>
                </div>
              </li>

              <li className='flex gap-6 justify-center items-center '>
              <div className='bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 w-[84px] h-[84px] rounded-full flex justify-center items-center text-[#FFFFFF] text-[44px]'>
              <FaUserFriends />     
              </div>
              <div className='flex flex-col'>
              <p className='text-[#FFFFFF] text-[32px] font-[700] leading-[40px] font-caladea'>20,000+</p>
              <p className='text-[#B0B0D1] text-[20px] font-[400] leading-[28px]'>Student</p>
              </div>
            </li>

            <li className='flex gap-6 justify-center items-center '>
            <div className='bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 w-[84px] h-[84px] rounded-full flex justify-center items-center text-[#FFFFFF] text-[44px]'>
            <IoMdVideocam />
            </div>
            <div className='flex flex-col'>
            <p className='text-[#FFFFFF] text-[32px] font-[700] leading-[40px] font-caladea'>10,000+</p>
            <p className='text-[#B0B0D1] text-[20px] font-[400] leading-[28px]'>Video</p>
            </div>
          </li>

          <li className='flex gap-6 justify-center items-center '>
          <div className='bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 w-[84px] h-[84px] rounded-full flex justify-center items-center text-[#FFFFFF] text-[44px]'>
          <PiUsersThreeFill />
          
          </div>
          <div className='flex flex-col'>
          <p className='text-[#FFFFFF] text-[32px] font-[700] leading-[40px] font-caladea'>1,00,000+</p>
          <p className='text-[#B0B0D1] text-[20px] font-[400] leading-[28px]'>User's</p>
          </div>
        </li>

           </ul>
       </div>

       <div className="w-[426px] h-[426px] rounded-full bg-[#3b478733] absolute left-[-303px]  blur-lg"></div>


    </div>
  )
}
