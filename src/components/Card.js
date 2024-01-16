import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { likedCourses } from "./Liked";

export const Card = ({ id, image, title, description }) => {
  const [click, setClick] = useState(false);
  let li=likedCourses;

  function clickHandler() {
    if (!click) {
      setClick(true);
      console.log("true marking done");
      //like-->toast
      toast.success("Liked Successfully");
      li.push({ id, title });
    } else {
      setClick(false);
      console.log("false marking done");
      //dislike-->toast
      toast.warning("Liked Removed");
      li.pop({ id, title });
    }
    console.log(li);
  }

  return (
    <div className="w-[420px] bg-[#381D74] bg-opacity-80 rounded-[30px] overflow-hidden">
      <div className="relative">
        <img src={image.url} />
        <div
          className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center"
        >
          <button onClick={clickHandler}>
            {click ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-[30px] mt-3 leading-[40px] font-caladea">{title}</p>
        <p className="mt-5 text-[#D9ECFF]">
          {description.length > 100
            ? description.substr(0, 100) + "..."
            : description}
        </p>
      </div>
    </div>
  );
};
