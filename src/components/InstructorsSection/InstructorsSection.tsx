import "./InstructorsSection.css";
import data from "../../data.json";
import ProfileCard from "../ProfileCard/ProfileCard";

//Vectors
import LeftArrow from "../../assets/Vectors/Polygon 1.png";
import RightArrow from "../../assets/Vectors/Polygon 2.png";

import { useState } from "react";

function InstructorsSection() {
  const instructors = data["instructors"];

  const [displayed, setDisplayed] = useState(3);

  const handleLeftSwipe = () => {
    setDisplayed(displayed - 1);
  };

  const handleRightSwipe = () => {
    setDisplayed(displayed + 1);
  };

  return (
    <div className="instructors-section-container" id="instructors">
      <h1 className="section-title">Our Instructors</h1>
      <div className="instructor-cards-container">
        <>
          {displayed > 3 ? (
            <img
              className="arrow-vector"
              src={LeftArrow}
              alt="Swipe Left"
              onClick={handleLeftSwipe}
            />
          ) : (
            <img className="arrow-vector" src={LeftArrow} alt="Swipe Left" />
          )}

          {instructors
            .slice(displayed - 3, displayed)
            .map((instructor: any, index: number) => (
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
          {displayed < instructors.length ? (
            <img
              className="arrow-vector"
              src={RightArrow}
              alt="Swipe Right"
              onClick={handleRightSwipe}
            />
          ) : (
            <img className="arrow-vector" src={RightArrow} alt="Swipe Right" />
          )}
        </>
      </div>
    </div>
  );
}

export default InstructorsSection;
