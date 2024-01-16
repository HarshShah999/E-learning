import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png";
import { LuPhone } from "react-icons/lu";
import { VscMail } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { BsThreads } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";


export const Footer = () => {
  return (
    <div className='mt-[280px] back_color ml-[-100px]  mr-48'>
     
    <div className='flex  justify-evenly'>
    <div className='flex flex-col gap-[50px] w-[480px] mt-10'>
    <Link to="/">
    <img src={logo} alt="Logo" className="w-[214px] h-[40px]" />
  </Link>
  <p className='text-[#B0B0D1] font-[400] leading-[28px] text-[18px]'>Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    </div>

    {/* contact */}
    <div className='flex flex-col gap-[50px]  mt-10'>
      <h3 className='text-[25px] text-[#FFFFFF] font-caladea font-[700]'>Contact  us</h3>
      <ul className='flex flex-col text-[#B0B0D1] items-start gap-[30px]'>
         <li className='flex justify-center items-center gap-4'>
            <VscMail />
            <Link to="mailto:harshkratikshah@gmail.com">code_master@gmail.com</Link>
            
         </li>
         <li className='flex justify-center items-center gap-4'>
         <LuPhone />
         <Link to="tel:+916353088683">(209) 555-0104</Link>
         
         </li>
      </ul>
    </div>

    {/* location */}
    <div  className='flex flex-col gap-[50px]  mt-10'>
         <h3 className='text-[25px] text-[#FFFFFF] font-caladea font-[700]'>Location</h3>
         <div className='flex  items-baseline gap-3 text-[#B0B0D1]'>
         <IoLocationOutline />
         <Link to="">2715 Ash Dr. San Jose, South<br/> Dakota 83475</Link>
         </div>
    </div>

        {/* Follow */}
        <div  className='flex flex-col gap-[50px]  mt-10'>
        <h3 className='text-[25px] text-[#FFFFFF] font-caladea font-[700]'>Follow us</h3>
        <div className='flex  items-baseline gap-3 text-[#B0B0D1]'>
        <SiInstagram />
        <RiTwitterXLine />
        <FiFacebook />
        <BsThreads />
        <AiOutlineLinkedin />

        
        </div>
   </div>
    </div>

           <div className='bg-[#D9ECFF] w-[1610px] h-1 blur-sm   mt-[89px]'></div>

           <div className='text-center text-[#FFFFFF] mt-5 pb-8 tracking-[0.5px]'>Copyright @ 2024 Sorting Code Master Technologies Pvt Ltd.  All Rights Reserved</div>

    </div>
  )
}
