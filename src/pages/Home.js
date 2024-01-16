import React from "react";
import plus from "../assets/plus.png";
import { IoSearchOutline } from "react-icons/io5";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import frame from "../assets/Frame.png"
import vector from "../assets/Vector.png"
import illustrate1 from "../assets/illustrate1.png"
import star from "../assets/star.png"
import cap from "../assets/cap.png"
import paper from "../assets/paper.png"
import { Self } from "../components/Self";
import { Courses } from "./Courses";
import { Join } from "../components/Join";
import circle from"../assets/Ellipse 118.png"
import { Footer } from "../components/Footer";

export const Home = () => {
  const strings = "Welcome to";
  const navigate = useNavigate();

  function clickHandler() {
    

    navigate("/courses");
  }

  return (
    <div className="relative w-[1614px] h-[100%] ml-[100px] mr-[100px]">
      <div className="w-[997px] h-[654px] flex flex-col mt-[180px] gap-[59px] ralative">
        <div className=" w-[997px] h-[325px]  leading-[110px] font-caladea tracking-[-0.5px] font-[200px] text-[100px] relative">
          <div className="text-[#BEA0FF]">Best courses</div>
          <div className="font-k2d text-[#FFFFFF]">
            are waiting to enrich your skill
          </div>
          <div className="w-[171.79px] h-[37.07px] absolute left-[450px] top-[268px] ">
          <img src={plus} />
        </div>

        <div className="w-[129.3px] h-[129.38px] absolute bottom-[197px] left-[-100px] ">
        <img src={vector}/>
     </div>

     <div className="w-[82px] h-[211px] absolute bottom-[400px] right-[580px]  ">
     <img src={frame}/>
  </div>
        </div>

        <div className="w-[798px] h-[80px]  text-[25px] leading-[40px] font-inter font-[500] text-[#B0B0D1]">
          Provides you with the latest online learning system and material that
          help your knowledge growing.
        </div>

        <div className="w-[986px] h-[99px] rounded-[49.5px] bg-[#FFFFFF] mt-[32px] relative">
          <div className="flex gap-4 w-[724px]  absolute top-[34px] left-[33px]">
            <IoSearchOutline className="w-[32px] h-[32px] text-[#98A2B3]" />
            <div className="w-[692px] h-[24px] flex gap-2 text-[30px] font-[500] text-[#e0444e] justify-start items-center">
              <span className="text-[#667085]">{strings + " "}</span>
              <Typewriter
                options={{
                  strings: [" Code Master !!!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <button
            className="w-[174px] h-[76px] absolute  left-[798px] bottom-[11px] right-[14px] text-[#FFFFFF] text-[20px] bg-[#7F56D9] py-[16px] px-[28px] rounded-[47px] hover:bg-opacity-75 transition-all duration-200"
            onClick={clickHandler}
          >
            Explore
          </button>
          
        </div>  
        <div className="w-[426px] h-[426px] rounded-full bg-[#3b478733] absolute top-[-435px] left-[-126px]  blur-lg"></div>
          <div className="w-[426px] h-[426px] rounded-full bg-[#3b478733] absolute  bottom-[434px] right-[25px] blur-lg"></div>
      </div>

      <div className="w-[406px] h-[609px] bg-[#7F56D980] rounded-[242.5px] absolute left-[980px] bottom-[97px] "></div>
    
      <div className="absolute left-[890px] bottom-[-305px] w-[600px] h-[1000px]">
     <img src={illustrate1} width="600px" height="1000px"/>
     </div>

     <div className="absolute bottom-[324px] left-[893px] ani_swipe">
       <img src={star} width="53px" height="54px" />
     </div>
    
     <div className="absolute bottom-[647px] left-[1300px] ani_up">
       <img src={cap} width="73px" height="74px" />
     </div>

     <div className="absolute bottom-[647px] left-[893px] ani_swipe">
     <img src={paper} width="73px" height="74px" />
   </div>

      {/* self compo */}
     <Self/>
     {/* courses compo */}
     <div className="w-[426px] h-[426px] rounded-full bg-[#3b478733] absolute  blur-lg"></div>
     <Courses/>
       {/* join compo */}
       <div className="w-[426px] h-[426px] rounded-full bg-[#3b478733] absolute left-[1100px] blur-lg -z-10"></div>
       <img src={circle} className="w-[222.42px] h-[222.43px] absolute left-[1300px] top-[5000px]"/>
       <Join/>

       {/* footer */}
       <Footer/>


    </div>
  );
};
