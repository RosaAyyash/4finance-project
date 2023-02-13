import CourseContainer from "../../components/CourseContainer/CourseContainer";
import "./CoursePage.css";
import data from "../../data.json";

//Librairies
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RegistrationPopup from "./RegistrationPopup/RegistrationPopup";

function CoursePage() {
  const { courseId } = useParams();

  const courses = data["courses"];
  const selected_course = courses.find((course: any) => course.id == courseId);

  //Popup state
  const [isRegistrationPopup, setRegistrationPopup] = useState(false);

  //close Popup
  const closePopup = () => {
    setRegistrationPopup(false);
  };

  const scrollOnTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => {
    scrollOnTop();
  }, []);

  return (
    <>
      {isRegistrationPopup ? (
        <RegistrationPopup
          courseName={selected_course?.name}
          closePopup={closePopup}
        />
      ) : null}
      <div>
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
      <div className="button-container">
        <span className="button" onClick={() => setRegistrationPopup(true)}>
          ENROLL NOW
        </span>
      </div>
    </>
  );
}

export default CoursePage;
