import React from "react";
import { Card } from "./Card";

export const Cards = (props) => {
  let courses = props.courses;
  let category=props.category
 

  function getCourses() {
    if(category==="All"){
    
     let allcourses=[]
    Object.values(courses).forEach((array) => {
      array.forEach((courseData) => {
        allcourses.push(courseData);
      });
    });
    return allcourses;
        }
        else{
            return courses[category];
        }
  }

  return (
    <div className="flex flex-wrap  gap-12 mb-4">
      {getCourses().map((course) => {
        return <Card key={course.id} {...course}  />;
      })}
    </div>
  );
};
