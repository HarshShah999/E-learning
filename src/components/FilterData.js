import React from "react";

export const FilterData = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;
  
  
  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="  flex  flex-wrap  space-x-4 mx-auto  py-4 bg-[#FFFFFF1A] w-[700px]  justify-evenly rounded-[50px]">
      {filterData.map((data) => {
        return (
          <button
            className={`text-lg px-2 py-1 font-medium w-[124px] h-[76px] rounded-[46px]
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            ${
              category === data.title
                ? "bg-opacity-60 border-white"
                : "bg-opacity-40 border-transparent"
            }`}
            key={data.id}
            onClick={() => {
              filterHandler(data.title);
            }}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};
