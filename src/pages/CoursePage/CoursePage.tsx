import { useParams } from "react-router-dom";
import CourseContainer from "../../components/CourseContainer/CourseContainer";
import Header from "../../components/Header/Header";
import "./CoursePage.css";
import data from "../../data.json";

function CoursePage() {
  const { courseId } = useParams();
  console.log("courseId", courseId);
  const courses = data["courses"];
  const selected_course = courses.find((course: any) => course.id == courseId);

  return (
    <div>
      <Header />
      <CourseContainer
        id={selected_course?.id}
        name={selected_course?.name}
        description={selected_course?.description}
        image={selected_course?.image}
        outline={selected_course?.outline}
        startDate={selected_course?.startDate}
        registrationDate={selected_course?.registrationDate}
        majors={selected_course?.majors}
      />
    </div>
  );
}

export default CoursePage;
