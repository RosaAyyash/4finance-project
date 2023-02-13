import "./FeedbackSection.css";
import { useEffect, useState } from "react";
import data from "../../data.json";

//Vectors
import LeftArrow from "../../assets/Vectors/Polygon 1.png";
import RightArrow from "../../assets/Vectors/Polygon 2.png";
import FeedbackCard from "./FeedbackCard/FeedbackCard";

function FeedbackSection() {
  const feedbacks = data["feedbacks"];

  const [displayed, setDisplayed] = useState(3);
  const [skips, setskips] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 785) {
        setDisplayed(1);
        setskips(1);
      } else if (window.innerWidth < 1060) {
        setDisplayed(2);
        setskips(2);
      } else {
        setDisplayed(3);
        setskips(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLeftSwipe = () => {
    setDisplayed(displayed - skips);
  };

  const handleRightSwipe = () => {
    setDisplayed(displayed + skips);
  };
  return (
    <div className="feedback-section-container" id="feedbacks">
      <h1 className="section-title">Feedbacks</h1>
      <div className="feedback-section-carousel">
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

          {feedbacks
            .slice(displayed - skips, displayed)
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
