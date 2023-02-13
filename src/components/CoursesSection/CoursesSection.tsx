import "./CoursesSection.css";
import data from "../../data.json";
import CourseCard from "../CourseCard/CourseCard";

import { useEffect, useState } from "react";

function CoursesSection() {
  const courses = data["courses"];

  const [displayCount, setDisplayCount] = useState(3);
  const [skips, setskips] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 520) {
        setDisplayCount(1);
        setskips(2);
      } else if (window.innerWidth < 760) {
        setDisplayCount(2);
        setskips(2);
      } else {
        setDisplayCount(3);
        setskips(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleShowMore = () => {
    setDisplayCount(displayCount + skips);
  };

  const handleShowLess = () => {
    setDisplayCount(displayCount - skips);
  };

  return (
    <div id="courses">
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
        {displayCount <= skips && (
          <div className="see-more-button-container">
            <span className="see-more-button" onClick={handleShowMore}>
              Load More...
            </span>
          </div>
        )}
        {displayCount <= courses.length && displayCount > skips ? (
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
