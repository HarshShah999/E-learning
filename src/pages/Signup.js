import React from "react";
import { useState } from "react";
import human3 from "../assets/illustrate_8.png"

export const Signup = () => {
  const [isStudent, setIsStudent] = useState(true);

  const handleToggle = () => {
    setIsStudent(!isStudent);
  };
  return (
    <section className="relative z-3 pt-16 pb-16 bg-cover bg-center">
      <div className="section-header text-center mb-10 mt-10">
        <h2 className="text-[#B0B0D1] font-bold text-3xl mb-4 font-caladea">
          Sign_Up
        </h2>
      </div>
      <div className="container mx-auto px-4 mt-20 flex justify-between relative">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 px-4 ">
          <form className="back_color p-12 rounded-lg border border-slate-500 ">
          <div className="mb-3 w-[300px] border-3 border-indigo-900 rounded-[48px] bg-gray-300 relative overflow-hidden">
          <button
            className={`bg-[#FF5156] hover:bg-indigo-900  cursor-pointer text-white font-bold py-2 px-4 rounded-full transform transition-transform ease-in-out duration-300 ${
              isStudent ? 'translate-x-0' : 'translate-x-[194px]'
            }`}
            onClick={handleToggle}
          >
            {isStudent ? 'Student' : 'Instructor'}
          </button>
        </div>
            <div className="input-box mb-8">
              <div className="text-[#B0B0D1] mb-3">User Name</div>
              <input
                type="text"
                placeholder="Harsh Shah"
                required
                name=""
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#FF2633] rounded-[48px]"
              />
            </div>

            <div className="input-box mb-4">
              <div className="text-[#B0B0D1] mb-3">Email</div>
              <input
                type="email"
                placeholder="abc@gmail.com"
                required
                name=""
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#FF2633] rounded-[48px]"
              />
            </div>
            <div className="input-box mb-4">
              <div className="text-[#B0B0D1] mb-3">Date of Birth</div>
              <input
                type="date"
                required
                name=""
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#FF2633] rounded-[48px]"
              />
            </div>
            <div className="input-box mb-4">
              <div className="text-[#B0B0D1] mb-3">Password</div>
              <input
                type="password"
                placeholder="UBm5q9EF"
                minlength="8"
                maxlength="10"
                required
                name=""
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#FF2633] rounded-[48px]"
              />
            </div>
            <div className="input-box mb-4">
              <div className="text-[#B0B0D1] mb-3">Confirm Password</div>
              <input
                type="password"
                placeholder="UBm5q9EF"
                minlength="8"
                maxlength="10"
                required
                name=""
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#FF2633] rounded-[48px]"
              />
            </div>

            <button className="text-[#FFFFFF] w-[250px] h-[80px] bg-[#7F56D9] border border-slate-300 rounded-[40px] mt-4 hover:bg-opacity-50 duration-300">
              Create Account
            </button>
          </form>
        </div>

        {/* Image */}

        <div className="w-[400px] h-[480px] bg-[#381D74] rounded-3xl">
        <img src={human3} width="350px" className='rounded-3xl'/>

        </div>
      </div>
    </section>
  );
};
