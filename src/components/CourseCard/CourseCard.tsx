import { useNavigate } from "react-router";
import "./CourseCard.css";

type CourseCardProps = {
  id: number;
  name: string;
  date: string;
  image: any;
};
function CourseCard(props: CourseCardProps) {
  const navigate = useNavigate();
  return (
    <article
      className="course-card-container"
      onClick={() => navigate(`/courses/${props.id}`)}
    >
      <img src={props.image} alt={props.name} className="course-image" />
      <div className="course-details">
        <h2 className="course-name">{props.name}</h2>
      </div>
    </article>
  );
}

export default CourseCard;
