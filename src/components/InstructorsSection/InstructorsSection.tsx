import "./InstructorsSection.css";
import data from "../../data.json";
import ProfileCard from "../ProfileCard/ProfileCard";

//Vectors
import LeftArrow from "../../assets/Vectors/Polygon 1.png";
import RightArrow from "../../assets/Vectors/Polygon 2.png";

import { useEffect, useState } from "react";

function InstructorsSection() {
  const instructors = data["instructors"];

  const [displayed, setDisplayCount] = useState(3);
  const [skips, setSkips] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setDisplayCount(1);
        setSkips(1);
      } else if (window.innerWidth < 900) {
        setDisplayCount(2);
        setSkips(2);
      } else {
        setDisplayCount(3);
        setSkips(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLeftSwipe = () => {
    setDisplayCount(displayed - 1);
  };

  const handleRightSwipe = () => {
    setDisplayCount(displayed + 1);
  };

  return (
    <div className="instructors-section-container" id="instructors">
      <h1 className="section-title">Our Instructors</h1>
      <div className="instructor-cards-container">
        <>
          {displayed > skips ? (
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
            .slice(displayed - skips, displayed)
            .map((instructor: any, index: number) => (
              <div key={index}>
                <ProfileCard
                  id={instructor.id}
                  name={instructor.name}
                  email={instructor.email}
                  image={instructor.image}
                  phoneNumber={instructor.phoneNumber}
                  speciality={instructor.speciality}
                />
              </div>
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
