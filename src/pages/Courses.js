import React from 'react'
import { filterData, apiUrl } from "../data";
import { Navbar_1 } from "../components/Navbar_1";
import { FilterData } from "../components/FilterData";
import { Cards } from "../components/Cards";
import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";
import { toast } from 'react-toastify';

export const Courses = (props) => {
  const [courses, setCourses] = useState("");
  const [loading, setLoader] = useState(true);
  const[category,setCategory]=useState(filterData[0].title)
  


  async function fetchData() {
    setLoader(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    } catch(error) {
      toast.error("Network me koi dikkat hai");
    }
    setLoader(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col course_id" >
        <div className='flex  mt-[280px]  '>
        <Navbar_1 />
        <FilterData filterData={filterData} category={category} setCategory={setCategory} ></FilterData>
        </div>
    <div className="w-11/12  max-w-[1600px] 
        min-h-[50vh] mt-[110px]">
      {loading ? (<Spinner/>) : (<Cards courses={courses}  category={category}></Cards>) }
    </div>
  </div>
  )
}
