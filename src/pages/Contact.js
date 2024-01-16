import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { VscMail } from "react-icons/vsc";

export const Contact = () => {
  return (
    <section className="relative z-3 pt-16 pb-16 bg-cover bg-center" >
    <div className="section-header text-center mb-10 mt-10">
    <h2 className="text-[#B0B0D1] font-bold text-3xl mb-4 font-caladea">Contact Us</h2>
  </div>
    <div className="container mx-auto px-4 mt-20 flex justify-between">
     

      <div className="flex  flex-col gap-4 flex-wrap -mx-4">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 px-4 mb-8 ">
          <div className="flex  items-start gap-6">
            <div className="bg-white rounded-full p-3 text-[48px]">
            <IoLocationOutline />
            </div>
            <div className="ml-4 flex flex-col gap-3">
              <h4 className="text-blue-500 text-lg font-bold mb-1">Address</h4>
              <p className="text-white">2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 mb-8">
          <div className="flex  items-start gap-6">
            <div className="bg-white rounded-full p-3 text-[48px]">
            <LuPhone />
            </div>
            <div className="ml-4 flex flex-col gap-3">
              <h4 className="text-blue-500 text-lg font-bold mb-1">Phone</h4>
              <p className="text-white">(209) 555-0104</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="flex  items-start gap-6">
            <div className="bg-white rounded-full p-3 text-[48px]">
            <VscMail />
            </div>
            <div className="ml-4 flex flex-col gap-3">
              <h4 className="text-blue-500 text-lg font-bold mb-1">Email</h4>
              <p className="text-white">code_master@gmail.com</p>
            </div>
          </div>
        </div>

      
      </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 px-4 ">
          <form className="back_color p-12 rounded-lg border border-slate-500 ">
            <h2 className=" text-2xl mb-4 text-blue-500 font-caladea  font-[700]">Send Message</h2>
            <div className="input-box mb-8">
            <div className="text-[#B0B0D1] mb-3">Full Name</div>
              <input type="text" placeholder='Harsh Shah' required name="" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#FF2633] rounded-[48px]"/>
              
            </div>

            <div className="input-box mb-4">
              <div className="text-[#B0B0D1] mb-3">Email</div>
              <input type="email" placeholder='abc@gamil.com' required name="" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#FF2633] rounded-[48px]"/>
              
            </div>

            <div className="input-box mb-4">
            <div className="text-[#B0B0D1] mb-3">Type your Message...</div>
              <textarea placeholder='Hello Everyone!! How are you going on??' required name="" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#FF2633] rounded-[48px]"></textarea>
             
            </div>

            <button className='text-[#FFFFFF] w-[250px] h-[80px] bg-[#7F56D9] border border-slate-300 rounded-[40px] mt-4 hover:bg-opacity-50 duration-300'>Send</button>
              
          </form>
        </div>
    </div>
  </section>
  )
}
