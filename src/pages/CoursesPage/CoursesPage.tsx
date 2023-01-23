import "./CoursesPage.css";

//Json File
import data from "../../data.json";

//Components
import CourseCard from "../../components/CourseCard/CourseCard";
import Header from "../../components/Header/Header";
import { useEffect } from "react";

function CoursesPage() {
  const courses = data["courses"];

  //to open on top of the page
  const scrollOnTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => {
    scrollOnTop();
  }, []);

  return (
    <div>
      <Header />
      <h1 className="page-title">Our Courses</h1>
      <div className="courses-container">
        {courses.map((course: any, index: number) => (
          <CourseCard
            key={index}
            id={course.id}
            name={course.name}
            date={course.startDate}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
