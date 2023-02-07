import "./FeedbackSection.css";
import { useState } from "react";
import data from "../../data.json";

//Vectors
import LeftArrow from "../../assets/Vectors/Polygon 1.png";
import RightArrow from "../../assets/Vectors/Polygon 2.png";
import FeedbackCard from "./FeedbackCard/FeedbackCard";

function FeedbackSection() {
  const feedbacks = data["feedbacks"];

  const [displayed, setDisplayed] = useState(3);

  const handleLeftSwipe = () => {
    setDisplayed(displayed - 1);
  };

  const handleRightSwipe = () => {
    setDisplayed(displayed + 1);
  };
  return (
    <div className="feedback-section-container" id="feedbacks">
      <h1 className="section-title">Feedbacks</h1>
      <div className="feedback-section-carousel">
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

          {feedbacks
            .slice(displayed - 3, displayed)
            .map((feedback: any, index: number) => (
              <FeedbackCard
                key={index}
                StarNumbers={feedback.starNumber}
                feedback={feedback.feedback}
                author={feedback.author}
              />
            ))}

          {displayed < feedbacks.length ? (
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

export default FeedbackSection;
