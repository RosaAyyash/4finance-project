import "./FeedbackCard.css";

//Vector
import Star from "../../../assets/Vectors/Star 1.png";

type FeedbackCardProps = {
  StarNumbers: number;
  feedback: string;
  author: string;
};
function FeedbackCard(props: FeedbackCardProps) {
  return (
    <div className="feedback-card-container">
      <div className="rating-stars-container">
        <div className="star-container">
          {Array(props.StarNumbers)
            .fill(null)
            .map((index: number) => (
              <img key={index} src={Star} alt="Star" className="star-vector" />
            ))}
        </div>
      </div>
      <div className="rating-paragraph">{props.feedback}</div>
      <h2 className="feedback-author">{props.author}</h2>
    </div>
  );
}

export default FeedbackCard;
