import "./CourseContainer.css";

type CourseContainerProps = {
  id?: number;
  name?: string;
  description?: string;
  outline: any;
  startDate?: string;
  registrationDate?: string;
  majors: any;
  image: any;
};

function CourseContainer(props: CourseContainerProps) {
  return (
    <div className="selected-course-container">
      <h1 className="page-title">Course Description</h1>
      <div className="selected-course-content">
        <div className="right-side-content">
          <img
            src={props.image}
            alt={props.name}
            className="selected-course-image"
          />
        </div>
        <div className="left-side-content">
          <h1 className="course-title">{props.name}</h1>
          <h3 className="course-timing">{props.startDate}</h3>
          <p className="course-description">{props.description}</p>
          <p className="course-description">
            The courses will cover the following areas, delivered respectively
            by our valuable instructors:
          </p>
          <ul>
            {props.outline.map((outline: any) => (
              <li className="topic-list-item">
                {outline.topic} delivered by {outline.instructor}
              </li>
            ))}
          </ul>
          <p className="course-description">
            The following majors are encouraged to register this course:
          </p>
          <ul>
            {props.majors.map((major: any) => (
              <li className="topic-list-item">{major}</li>
            ))}
          </ul>
          <p className="course-description">
            Registration period: {props.registrationDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseContainer;
