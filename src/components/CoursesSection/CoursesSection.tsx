import "./CoursesSection.css";
import data from "../../data.json";
import CourseCard from "../CourseCard/CourseCard";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

//images
import Communication from "../../assets/communication.webp";

function CoursesSection() {
  const courses = data["courses"];
  const courses_three = courses.slice(0, 3);

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="section-title">Our Courses</h1>
      <div className="course-cards-container">
        {courses_three.map((course: any, index: number) => (
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

      <div className="see-more-button">
        <Button variant="contained" onClick={() => navigate("/courses")}>
          See More
        </Button>
      </div>

      <div className="blue-section-container">
        <div className="image-section">
          <img
            src={Communication}
            alt="Communication"
            width={300}
            height={300}
            className="image-2"
          />
          <img
            src="data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(25, 100%, 95%, 1)'/><path d='M0 0h10v10H0z'  stroke-width='1' stroke='none' fill='hsla(228, 49%, 12%, 1)'/><path d='M10 10h10v10H10z'  stroke-width='1' stroke='none' fill='hsla(228, 49%, 12%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>"
            alt="coding"
            width={300}
            height={300}
            className="image-1"
          />
        </div>

        <div className="right-paragraph">
          <h2 className="bottom-title">
            Unlock your Potentials and Discover New Limits...
          </h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed
            risus pretium quam vulputate dignissim. Odio eu feugiat pretium nibh
            ipsum consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoursesSection;
