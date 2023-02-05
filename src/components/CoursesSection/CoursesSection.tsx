import "./CoursesSection.css";
import data from "../../data.json";
import CourseCard from "../CourseCard/CourseCard";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

import { useState } from "react";

function CoursesSection() {
  const courses = data["courses"];

  const [displayCount, setDisplayCount] = useState(3);

  const handleShowMore = () => {
    setDisplayCount(displayCount + 3);
  };

  const handleShowLess = () => {
    setDisplayCount(displayCount - 3);
  };

  return (
    <div>
      <>
        <h1 className="section-title">Our Courses</h1>
        <div className="course-cards-large-container">
          <div className="course-cards-container">
            {courses
              .slice(0, displayCount)
              .map((course: any, index: number) => (
                <div key={index}>
                  <CourseCard
                    id={course.id}
                    name={course.name}
                    date={course.startDate}
                    image={course.image}
                  />
                </div>
              ))}
          </div>
        </div>
        {console.log("displayCount", displayCount)}
        {console.log("courses.length", courses.length)}
        {displayCount <= 3 && (
          <div className="see-more-button-container">
            <span className="see-more-button" onClick={handleShowMore}>
              Load More...
            </span>
          </div>
        )}
        {displayCount <= courses.length && displayCount > 3 ? (
          <div className="see-more-button-container">
            <span className="see-more-button" onClick={handleShowLess}>
              Load Less...
            </span>
            <span className="see-more-button" onClick={handleShowMore}>
              Load More...
            </span>
          </div>
        ) : null}
        {displayCount >= courses.length && (
          <div className="see-more-button-container">
            <span className="see-more-button" onClick={handleShowLess}>
              Load Less...
            </span>
          </div>
        )}
      </>
    </div>
  );
}

export default CoursesSection;
