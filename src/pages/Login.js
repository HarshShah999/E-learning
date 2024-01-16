import React from 'react'
import human2 from "../assets/illustrate_3.png"

export const Login = () => {
  return (
    <section className="relative z-3 pt-16 pb-16 bg-cover bg-center" >
    <div className="section-header text-center mb-10 mt-10">
    <h2 className="text-[#B0B0D1] font-bold text-3xl mb-4 font-caladea">Login</h2>
  </div>
    <div className="container mx-auto px-4 mt-20 flex justify-between">
     
     
     

        {/* Contact Form */}
        <div className="w-full md:w-1/2 px-4 ">
          <form className="back_color p-12 rounded-lg border border-slate-500 ">
            
            <div className="input-box mb-8">
            <div className="text-[#B0B0D1] mb-3">User Name</div>
              <input type="text" placeholder='Harsh Shah' required name="" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#FF2633] rounded-[48px]"/>
              
            </div>

            <div className="input-box mb-4">
              <div className="text-[#B0B0D1] mb-3">Email</div>
              <input type="email" placeholder='abc@gamil.com' required name="" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#FF2633] rounded-[48px]"/>
              
            </div>
            <div className="input-box mb-4">
            <div className="text-[#B0B0D1] mb-3">Password</div>
            <input type="password" placeholder='UBm5q9EF' minlength="8" maxlength="10" required name="" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#FF2633] rounded-[48px]"/>
            
          </div>

          

            <button className='text-[#FFFFFF] w-[250px] h-[80px] bg-[#7F56D9] border border-slate-300 rounded-[40px] mt-4 hover:bg-opacity-50 duration-300'>Login</button>
              
          </form>
        </div>

        {/* Image */}

        <div className='w-[400px] bg-[#381D74] rounded-3xl' >
       <img src={human2} width="350px" className='rounded-3xl'/>
     </div>
    </div>
  </section>
  )
}
