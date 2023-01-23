import "./InstructorPage.css";
import data from "../../data.json";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InstructorPopup from "./InstructorPopup/InstructorPopup";

function InstructorPage() {
  //to open on top of the page
  const scrollOnTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => {
    scrollOnTop();
  }, []);

  const instructors = data["instructors"];
  const { instructorId } = useParams();

  const selected_instructor = instructors.find(
    (instructor: any) => instructor.id == instructorId
  );

  const [isInstructorPopup, setInstructorPopup] = useState(false);
  const closePopup = () => {
    setInstructorPopup(false);
  };

  console.log("isInstructorPopup", isInstructorPopup);
  return (
    <>
      {isInstructorPopup ? (
        <InstructorPopup
          id={selected_instructor?.id}
          name={selected_instructor?.name}
          image={selected_instructor?.image}
          speciality={selected_instructor?.speciality}
          bio={selected_instructor?.bio}
          phoneNumber={selected_instructor?.phoneNumber}
          email={selected_instructor?.email}
          closePopup={closePopup}
        />
      ) : null}
      <div>
        <Header />
        <div className="instructor-page-container">
          <h1 className="page-title">Meet Our Instructors!</h1>
          <div
            className="instructors-container"
            onClick={() => setInstructorPopup(true)}
          >
            {instructors.map((instructor: any, index: any) => (
              <ProfileCard
                id={instructor.id}
                key={index}
                name={instructor.name}
                email={instructor.email}
                image={instructor.image}
                phoneNumber={instructor.phoneNumber}
                speciality={instructor.speciality}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default InstructorPage;
